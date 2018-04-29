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
    MIME_CODE
};