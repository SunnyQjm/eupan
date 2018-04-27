
import {
    connect
} from 'react-redux';

import {
    EupanNav
} from '../components'

import {
    ACTION_TYPE_HEADER_LOGIN,
    ACTION_TYPE_HEADER_SELECT
} from '../model/ActionType'

export default connect(
    (state) => {
        return {
            ...state.HeaderReducer
        }
    },
    (dispatch) => {
        return {
            login: ()=>{
                dispatch({
                    type: ACTION_TYPE_HEADER_LOGIN,
                    data: {
                        isLogin: true
                    }
                })
            },
            selectBar: (selectIndex) => {
                dispatch({
                    type: ACTION_TYPE_HEADER_SELECT,
                    data: selectIndex
                })
            }
        }
    },
)(EupanNav)