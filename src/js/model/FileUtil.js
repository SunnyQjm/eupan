const MIME_APPLICATION = 'apk';
const MIME_ZIP = 'zip';
const MIME_VIDEO = 'video';
const MIME_MUSIC = 'music';
const MIME_PICTURE = 'img';
const MIME_WORD = 'word';
const MIME_PDF = 'pdf';
const MIME_EXCEL = 'excel';
const MIME_PPT = 'ppt';
const MIME_OTHER = 'other';
const MIME_CODE = 'code';

const apk = require( '../../icon/90x90/apk.png');
const zip = require('../../icon/90x90/zip.png');
const video = require('../../icon/90x90/vedio.png');
const music = require('../../icon/90x90/music.png');
const word = require('../../icon/90x90/word.png');
const pdf = require('../../icon/90x90/pdf.png');
const ppt = require('../../icon/90x90/ppt.png');
const code = require('../../icon/90x90/code.png');
const file = require('../../icon/90x90/file.png');


function getIconByMIME(MIME) {
    switch (MIME) {
        case MIME_APPLICATION:
            return apk;
        case MIME_CODE:
            return code;

        case MIME_MUSIC:
            return music;
        case MIME_PDF:
            return pdf;
        case MIME_PPT:
            return ppt;
        case MIME_WORD:
            return word;
        case MIME_VIDEO:
            return video;
        case MIME_ZIP:
            return zip;
        case MIME_PICTURE:
        case MIME_EXCEL:
        case MIME_OTHER:
        default:
            return file;
    }
}

let getMyMIME = (type) => {
    console.log('type: ' + type);
    if (type === null)
        return MIME_OTHER;
    if (type.startsWith('image/')) {
        return MIME_PICTURE;
    }
    if (type.startsWith('audio')) {
        return MIME_MUSIC;
    }
    if (type.startsWith('video')) {
        return MIME_VIDEO;
    }
    switch (type) {
        case 'application/zip':
            return MIME_ZIP;
        case 'application/msword':
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            return MIME_WORD;
        case 'application/vnd.ms-powerpoint':
        case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
            return MIME_PPT;
        case 'application/vnd.ms-excel':
        case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
            return MIME_EXCEL;
        case 'application/pdf':
            return MIME_PDF;
        case 'text/plain':
        case 'application/vnd.android.package-archive':
            return MIME_APPLICATION;
        default:
            return MIME_OTHER;
    }

};

export {
    getMyMIME,
    MIME_APPLICATION,
    MIME_MUSIC,
    MIME_ZIP,
    MIME_VIDEO,
    MIME_PICTURE,
    MIME_WORD,
    MIME_OTHER,
    MIME_PDF,
    MIME_EXCEL,
    MIME_PPT,
    MIME_CODE,
    getIconByMIME
};