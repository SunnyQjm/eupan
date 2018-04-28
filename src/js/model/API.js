const baseUrl = 'http://eda.eupan.top:8080/youyun';
// const baseUrl = 'http://dut.eupan.club:9748/youyun';
export default {
    baseUrl,
    updateToken: baseUrl + '/updateToken',

    login: baseUrl + '/login',

    uploadCheck: baseUrl + '/file/uploadCheck',

    upload: baseUrl + '/file/upload',

    // getForumFiles: '/api/forum/files',
    forumFiles: baseUrl + '/forum/files',

    defaultAvatar: baseUrl + '/avatar/default-avatar.jpg',

    getFileDetail: baseUrl + '/file/message',

    getComments: baseUrl + '/forum/get/comment',

    getFollowUserShareFiles: baseUrl + '/authc/forum/followUserFiles',

    getMessageBeforeDownload: baseUrl + '/file/checkdownload',

    downloadFile: baseUrl + '/file/download',

    getDynamic: baseUrl + '/file/event',

    getFollowList: baseUrl + '/get/follow',

    getUserInfo: baseUrl + '/authc/user',

    modifyUserInfo: baseUrl + '/authc/user/update',
};