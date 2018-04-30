import {
    ACTION_TYPE_SQUARE_LOAD_FINISH,
    ACTION_TYPE_SQUARE_LOAD
} from '../model/ActionType'

let initState = {
    page: 1,
    size: 10,
    time: true,
    hot: false,
    loading: false,
    files: [],
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
        default:
            break;
    }
    return newState;
};

export default SquareReducer