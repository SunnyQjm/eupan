import {
    connect
} from 'react-redux';
import {
    SquareComponent
} from '../components'
import {
    ACTION_TYPE_SQUARE_SHOW_FILE,
    ACTION_TYPE_SQUARE_LOAD_FINISH,
    ACTION_TYPE_SQUARE_LOAD_MORE_FINISH,
    ACTION_TYPE_SQUARE_LOAD_MORE,
    ACTION_TYPE_SQUARE_LOAD
} from '../model/ActionType'
import {getForumFiles, getFollowUserShareFiles} from '../model/EupanApi';


export default connect(
    (state) => {
        return {
            ...state.SquareReducer
        }
    },
    (dispatch) => {
        return {
            firstLoading: async (data) => {
                if(!data)
                    return;
                dispatch({
                    type: ACTION_TYPE_SQUARE_LOAD,
                });
                let requestData = Object.assign({}, data);
                Object.assign(requestData, {
                    page: 1
                });
                let res;
                if(data.isFollow){
                    res = await getFollowUserShareFiles(requestData);
                } else {
                    res = await getForumFiles(requestData);
                }
                console.log(res);
                dispatch({
                    type: ACTION_TYPE_SQUARE_LOAD_FINISH,
                    data: res
                });
            },
            showFile: (data) => {
                dispatch({
                    type: ACTION_TYPE_SQUARE_SHOW_FILE,
                    data
                });
            },
            loadMore_: async (data) => {
                if(!data)
                    return;
                dispatch({
                    type: ACTION_TYPE_SQUARE_LOAD_MORE
                });
                let requestData = Object.assign({}, data);
                console.log(requestData);
                Object.assign(requestData, {
                    page: (data.page + 1) ? data.page + 1 : 1
                });
                let res;
                if(data.isFollow){
                    res = await getFollowUserShareFiles(requestData);
                } else {
                    res = await getForumFiles(requestData);
                }
                if(res.success){	//获取成功
                    dispatch({
                        type: ACTION_TYPE_SQUARE_LOAD_MORE_FINISH,
                        data: res.data
                    });
                }
            }
        }
    },
)(SquareComponent)