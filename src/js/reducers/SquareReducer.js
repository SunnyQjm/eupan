import {
    ACTION_TYPE_SQUARE_LOAD_FINISH,
    ACTION_TYPE_SQUARE_LOAD,
    ACTION_TYPE_CHANGE_CATEGORY
} from '../model/ActionType'

let initState = {
    page: 1,
    size: 10,
    time: true,
    hot: false,
    loading: false,
    files: [],
    category: 'all'
};
const SquareReducer = (state = initState, action) => {
    let newState = {};
    Object.assign(newState, state);
    Object.assign(newState, {			//默认都不是处于切换状态
        changing: false
    });
    switch (action.type) {
        case ACTION_TYPE_SQUARE_LOAD:
            newState.loading = true;
            break;
        case ACTION_TYPE_SQUARE_LOAD_FINISH:
            if (action.isRefresh) {
                newState.files = action.data;
                newState.page = 2;
            } else {
                newState.page += 1;
                newState.files = newState.files.concat(action.data);
            }
            newState.loading = false;
            break;
        case ACTION_TYPE_CHANGE_CATEGORY:
            newState.category = action.category;
            if(action.category === 'all'){
                newState.time = true;
                newState.hot = false;
            } else if(action.category === 'hot'){
                newState.time = false;
                newState.hot = true;
            }
            break;
        default:
            break;
    }
    return newState;
};

export default SquareReducer