import {
    connect
} from 'react-redux';
import {
    UploadPage
} from '../components'
import {
    ACTION_TYPE_UPLOAD_SELECT_FILE,
    ACTION_TYPE_UPLOAD_OPTIONS_CHANGE,
    ACTION_TYPE_UPDATE_STATE
} from '../model/ActionType'

export default connect(
    (state) => {
        return {
            ...state.UploadReducer
        }
    },
    (dispatch) => {
        return {
            selectFile: (path) => {
                dispatch({
                    type: ACTION_TYPE_UPLOAD_SELECT_FILE,
                    data: path,
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
            uploadFile: (params) => {

            }
        }
    },
)(UploadPage)