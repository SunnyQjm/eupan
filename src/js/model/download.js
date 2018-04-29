import axios from 'axios';
import {url as BaseUrl} from './API';


export function getEncryptMessageBeforeDownload(identifyCode, successCallback, errCallback) {
    axios.get(`${BaseUrl.getMessageBeforeDownload}/${identifyCode}`)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .then(result => {
            if(!!result && result.success && !!result.data){
                successCallback(result.data);
            } else {
                errCallback(result.msg);
            }
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
