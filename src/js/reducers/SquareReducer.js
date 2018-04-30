import {
    ACTION_TYPE_SQUARE_SHOW_FILE,
    ACTION_TYPE_SQUARE_LOAD_FINISH,
    ACTION_TYPE_SQUARE_LOAD_MORE_FINISH,
    ACTION_TYPE_SQUARE_LOAD_MORE,
    ACTION_TYPE_SQUARE_LOAD
} from '../model/ActionType'
let initState = {
    page: 1,
    size: 10,
    time: true,
    hot: true,
    changing: false,
    allowLoadMore: true,
    isFollow: false
};
const SquareReducer = (state = initState, action) =>{
    let newState = {};
    Object.assign(newState, state);
    Object.assign(newState, {			//默认都不是处于切换状态
        changing: false
    });
    switch (action.type) {
        case ACTION_TYPE_SQUARE_LOAD:
            Object.assign(newState, {
                page: 1,
                allowLoadMore: true
            });
            break;
        case ACTION_TYPE_SQUARE_LOAD_FINISH:
            Object.assign(newState, action.data);
            break;
        case ACTION_TYPE_SQUARE_LOAD_MORE:		//开始加载更多，在加载完毕前不响应加载更多
            Object.assign(newState, {
                allowLoadMore: false
            });
            break;
        case ACTION_TYPE_SQUARE_SHOW_FILE:
            Object.assign(newState, action.data);
            break;
        case ACTION_TYPE_SQUARE_LOAD_MORE_FINISH:
            console.log(action);
            Object.assign(newState, {
                allowLoadMore: true
            });
            newState.data = newState.data.concat(action.data);
            if(action.data && action.data.length > 0){
                newState.page = state.page + 1;
            }
            break;
        // case ACTION_SQUARE_NAV_SELECT:
        //     Object.assign(newState, {
        //         page: 1,
        //         changing: true,
        //         allowLoadMore: true
        //     });
        //     switch (action.data) {
        //         case ACTION_SQUARE_NAV_TYPE_HOT:
        //             Object.assign(newState, {
        //                 time: false,
        //                 hot: true,
        //                 isFollow: false
        //             });
        //             break;
        //         case ACTION_SQUARE_NAV_TYPE_FOLLOW:
        //             Object.assign(newState, {
        //                 isFollow: true
        //             });
        //             break;
        //         case ACTION_SQUARE_NAV_TYPE_ALL:
        //             Object.assign(newState, {
        //                 time: true,
        //                 hot: false,
        //                 isFollow: false
        //             });
        //             break;
        //     }
        //     break;
        default:
            break;
    }
    return newState;
};

export default SquareReducer