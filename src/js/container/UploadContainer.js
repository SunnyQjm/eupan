import {
    connect
} from 'react-redux';
import {
    UploadPage
} from '../components'
import {
    ACTION_TYPE_UPLOAD_SELECT_FILE,
    ACTION_TYPE_UPLOAD_OPTIONS_CHANGE,
    ACTION_TYPE_UPDATE_STATE,
    ACTION_TYPE_UPLOAD_PROGRESS,
    ACTION_TYPE_UPLOAD_ERR,
    ACTION_TYPE_UPLOAD_SUCCESS,
} from '../model/ActionType'

import {
    uploadFile
} from '../model/EupanApi'

import {
    getUploadParamBody
} from '../model/EupanApi'

export default connect(
    (state) => {
        return {
            ...state.UploadReducer
        }
    },
    (dispatch) => {
        return {
            selectFile: (paths) => {
                dispatch({
                    type: ACTION_TYPE_UPLOAD_SELECT_FILE,
                    data: paths,
                });
            },
            handleChange: (name, value) => {
                let data = {};
                data[name] = value;
                dispatch({
                    type: ACTION_TYPE_UPLOAD_OPTIONS_CHANGE,
                    data: data
                });
            },
            updateState: (data) => {
                dispatch({
                    type: ACTION_TYPE_UPDATE_STATE,
                    data: data
                })
            },
            uploadFile: async (files, params) => {
                dispatch({
                    type: ACTION_TYPE_UPDATE_STATE,
                    data: {
                        uploading: true
                    }
                });
                for (let i = 0; i < files.length; i++) {
                    let paramBody = await getUploadParamBody(files[i], params);
                    console.log(paramBody);
                    uploadFile(files[i], paramBody, progress => {       //进度回调
                        dispatch({
                            type: ACTION_TYPE_UPLOAD_PROGRESS,
                            data: progress.toFixed(2),
                            index: i
                        });
                    }).then(response => {
                        dispatch({
                            type: ACTION_TYPE_UPLOAD_SUCCESS,
                            data: response,
                        })
                    }).catch(err => {
                        dispatch({
                            type: ACTION_TYPE_UPLOAD_ERR,
                            data: err,
                        });
                    });
                }
            }
        }
    },
)(UploadPage)