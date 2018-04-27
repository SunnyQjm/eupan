import HeaderReducer from './HeaderReducer';
import DownloadReducer from './DownloadReducer'
import UploadReducer from './UploadReducer'
import FileManagerReducer from './FileManagerReducer'
import SquareReducer from './SquareReducer'
import {combineReducers} from 'redux';

export default combineReducers({
    HeaderReducer,
    DownloadReducer,
    UploadReducer,
    FileManagerReducer,
    SquareReducer,
})