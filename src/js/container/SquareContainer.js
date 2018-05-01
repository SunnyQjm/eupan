import {
    connect
} from 'react-redux';
import {
    SquareComponent
} from '../components'
import {
    ACTION_TYPE_SQUARE_LOAD_FINISH,
    ACTION_TYPE_SQUARE_LOAD,
    ACTION_TYPE_CHANGE_CATEGORY
} from '../model/ActionType'
import {getForumFiles, getFollowUserShareFiles, downloadFile as DownloadFileApi} from '../model/EupanApi';


export default connect(
    (state) => {
        return {
            ...state.SquareReducer
        }
    },
    (dispatch) => {
        return {
            downloadFile: (identifyCode, form) => {
                DownloadFileApi(identifyCode, form, () => {
                    console.log('download success');
                }, (msg) => {
                    console.log('download err: ' + msg);
                })
            },
            load: async (data, isRefresh) => {
                //发送开始加载事件
                dispatch({
                    type: ACTION_TYPE_SQUARE_LOAD,
                    isRefresh: isRefresh,
                });
                let {page, size, hot, time} = data;
                if (isRefresh) {
                    page = 1;
                }
                let files = await getForumFiles({page, size, hot, time});
                if (!!files) {
                    dispatch({
                        type: ACTION_TYPE_SQUARE_LOAD_FINISH,
                        data: files,
                        isRefresh: isRefresh
                    })
                }
            },
            changeCategory: (category) => {
                dispatch({
                    type: ACTION_TYPE_CHANGE_CATEGORY,
                    category: category
                })
            }
        }
    },
)(SquareComponent)