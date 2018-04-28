import {
    connect
} from 'react-redux';
import {
    DownloadPage
} from '../components'

import {
    downloadFile as DownloadFileApi
} from '../model/EupanApi'

import {

} from '../model/ActionType'
export default connect(
    (state) => {
        return {
            ...state.DownloadReducer

        }
    },
    (dispatch) => {
        return {
            downloadFile: (identifyCode, form) => {
                DownloadFileApi(identifyCode, form, ()=>{
                    console.log('download success');
                }, (msg) => {
                    console.log('download err: ' + msg);
                })
            }
        }
    },
)(DownloadPage)