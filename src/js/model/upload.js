import browserMD5File from "browser-md5-file";
import {UploadParams, url} from './API'
import {getMyMIME} from './FileUtil'
import axios from 'axios';

export async function checkUploadFile(body) {
    return axios.post(url.uploadCheck, body)
        .then(response => {
            return response.data;
        })
}

export async function uploadFile(file, paramBody, progressCallback) {
    return new Promise((resolve, reject) => {
        let result = checkUploadFile(paramBody);
        result.then((result) => {
            console.log(result);
            if(!result.success)
                return;
            if(result.data.redundancy){      //是否冗余，如果冗余，则表示秒传
                progressCallback(100);       //设置进度为下载完成
                resolve({
                    data: result.data.identifyCode,
                    success: true
                })
            } else {        //并非冗余，则开始上传
                let formData = new FormData();
                formData.append('file', file);
                Object.keys(paramBody).forEach(key => {
                    formData.append(key, paramBody[key]);
                });
                axios.post(url.upload, formData, {
                    onUploadProgress: function (progressEvent) {
                        progressCallback(progressEvent.loaded * 100 / progressEvent.total)
                    }
                }).then(response => {
                    resolve(response.data);
                }).catch(err => {
                    reject(err);
                })
            }
        }).catch(err => {       //错误
            reject(err);
        });
    });

}

export async function getUploadParamBody(file, params) {
    let uploadBody = {};
    console.log(params);
    for(let key in UploadParams){
        console.log(key + ": " + params[key]);
        if(params[key]  !== undefined && params[key] !== -1){
            uploadBody[key] = params[key];
        }
    }
    uploadBody[UploadParams.privateOwn] = !params[UploadParams.share];
    //md5
    uploadBody[UploadParams.md5] = await getmd5(file);
    uploadBody[UploadParams.size] = file.size;
    uploadBody[UploadParams.name] = file.name;
    console.log(file);
    uploadBody[UploadParams.MIME] = getMyMIME(file.type);
    return uploadBody;
}
export async function getmd5(file) {
    return await new Promise((resolve, reject) => {
        browserMD5File(file, (err, md5) => {
            if(err)
                reject(err);
            else
                resolve(md5)
        });
    });
}