import {
    ACTION_TYPE_UPLOAD_SELECT_FILE,
    ACTION_TYPE_UPLOAD_OPTIONS_CHANGE,
    ACTION_TYPE_UPDATE_STATE,
    ACTION_TYPE_UPLOAD_SUCCESS,
    ACTION_TYPE_UPLOAD_ERR,
    ACTION_TYPE_UPLOAD_PROGRESS,
    ACTION_TYPE_BEGIN_UPLOAD,
} from '../model/ActionType'
import {
    UploadParams
} from '../model/API'
const initUploadOptions = {};
initUploadOptions[UploadParams.share] = true;
initUploadOptions[UploadParams.expireTime] = -1;
initUploadOptions[UploadParams.leftAllowDownloadCount] = -1;
initUploadOptions[UploadParams.description] = '来自优云的分享~';
initUploadOptions[UploadParams.score] = 0;

const initState={
    selectedFiles: [],
    uploadProgress: [],
    identifyCodes: [],
    uploadOptions: initUploadOptions,
    showDatePicker: false,
    allowDownloadCountInputDisable: true,
    uploading: false,   //正在上传
};
const UploadReducer = (state = initState, action) =>{
    let newState = {};
    Object.assign(newState, state);
    switch (action.type){
        case ACTION_TYPE_UPLOAD_SELECT_FILE:
            newState.selectedFiles = action.data;
            newState.identifyCodes = [];
            newState.uploadProgress = [];
            break;
        case ACTION_TYPE_BEGIN_UPLOAD:
            newState.uploading = true;
            break;
        case ACTION_TYPE_UPLOAD_OPTIONS_CHANGE:
            let uploadOptions = Object.assign({}, state.uploadOptions);
            Object.assign(uploadOptions, action.data);
            Object.assign(newState, {
                uploadOptions: uploadOptions
            });
            break;
        case ACTION_TYPE_UPDATE_STATE:
            Object.assign(newState, action.data);
            break;
        case ACTION_TYPE_UPLOAD_ERR:
            break;
        case ACTION_TYPE_UPLOAD_PROGRESS:
            let [...progress] = state.uploadProgress;
            progress[action.index] = action.data;
            Object.assign(newState, {
                uploadProgress: progress
            });
            break;
        case ACTION_TYPE_UPLOAD_SUCCESS:
            let [...identifyCodes] = state.identifyCodes;
            identifyCodes[action.index] = action.data.identifyCode;
            if(identifyCodes.length === newState.selectedFiles.length)
                newState.uploading = false;
            newState.identifyCodes = identifyCodes;
            break;
    }
    return newState;
};

export default UploadReducer;