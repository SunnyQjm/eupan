import axios from 'axios';
import {
    message
} from 'antd'
import {
    getEncryptMessageBeforeDownload,
    downloadFile
} from './download'

import {
    getmd5,
    getUploadParamBody,
    uploadFile
} from './upload'
import {
    getForumFiles,
    getFileDetail,
    getComments,
    getFollowUserShareFiles
} from './FileForum';

/**
 * 对错误进行统一处理
 */
axios.interceptors.response.use(response => {
    if (response.data.success) {
        return response.data.data;
    } else if (response.data.msg !== 'Index: 0, Size: 0') {
        message.error(response.data.msg);
    }
}, error => {
    message.error(error.message);
});

export {
    getEncryptMessageBeforeDownload,
    downloadFile,
    getmd5,
    getUploadParamBody,
    uploadFile,
    getComments,
    getFileDetail,
    getFollowUserShareFiles,
    getForumFiles
}
