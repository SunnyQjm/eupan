import {
    ACTION_TYPE_UPLOAD_SELECT_FILE,
    ACTION_TYPE_UPLOAD_OPTIONS_CHANGE,
    ACTION_TYPE_UPDATE_STATE
} from '../model/ActionType'
import {
    UploadParams
} from '../model/API'
const initUploadOptions = {};
initUploadOptions[UploadParams.isShare] = true;
initUploadOptions[UploadParams.expireTime] = -1;
initUploadOptions[UploadParams.leftDownloadCount] = -1;
initUploadOptions[UploadParams.description] = '来自优云的分享~';

const initState={
    selectedFiles: [],
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
            newState.selectedFiles = [action.data];
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
    }
    return newState;
};

export default UploadReducer;