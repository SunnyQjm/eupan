import browserMD5File from "browser-md5-file";
import {UploadParams, url} from './API'
import {getMyMIME} from './FileUtil'
import axios from 'axios';

function checkUploadFile(body) {
    return axios.post(url.uploadCheck, body)
}

/**
 * 上传文件
 * 返回：
        {
            identifyCode: "362ivc"
        }
 * @param file                  要上传的文件对象
 *
 * @param paramBody             上传参数
 * @see getUploadParamBody
 *
 * @param progressCallback
 * @returns {Promise<any>}
 */
export async function uploadFile(file, paramBody, progressCallback) {
    return new Promise((resolve, reject) => {
        let result = checkUploadFile(paramBody);
        result.then((data) => {
            if(data.redundancy){      //是否冗余，如果冗余，则表示秒传
                progressCallback(100);       //设置进度为下载完成
                resolve({
                    identifyCode: data.identifyCode
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
                }).then(data => {
                    resolve({
                        identifyCode: data
                    });
                }).catch(err => {
                    reject(err);
                })
            }
        }).catch(err => {       //错误
            reject(err);
        });
    });

}

/**
 * 计算md5，构建文件上传请求体
 * @param file
 * @param params
 * @returns {Promise<void>}
 */
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

/**
 * 获取文件的md5
 * @param file
 * @returns {Promise<any>}
 */
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