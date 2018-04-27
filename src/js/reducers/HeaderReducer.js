import {
    ACTION_TYPE_HEADER_SELECT,
    ACTION_TYPE_HEADER_LOGIN
} from '../model/ActionType'

const initState = {
    activeBar: -1,
};

const HeaderReducer = (state = initState, action) => {
    let newState = {};
    Object.assign(newState, state);
    switch (action.type){
        case ACTION_TYPE_HEADER_LOGIN:
            break;
        case ACTION_TYPE_HEADER_SELECT:
            Object.assign(newState, {
                activeBar: action.data
            });
            break;
    }
    return newState;
};

export default HeaderReducer;