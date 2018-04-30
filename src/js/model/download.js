import axios from 'axios';
import {url as BaseUrl} from './API';


export function getEncryptMessageBeforeDownload(identifyCode, successCallback, errCallback) {
    axios.get(`${BaseUrl.getMessageBeforeDownload}/${identifyCode}`)
        .then(msg => {
            successCallback(msg);
        })
        .catch(reason => {
            errCallback(reason.toString())
        })
}

export function downloadFile(identifyCode, form, successCallback, errCallback) {
    getEncryptMessageBeforeDownload(identifyCode, (encryptMessage) => {     //successCallback
        form.action = `${BaseUrl.downloadFile}/${encryptMessage}`;
        form.submit();
        successCallback();
    }, (msg) => {   //errCallback
        errCallback(msg);
    })
}
