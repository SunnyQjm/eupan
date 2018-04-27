import {
    connect
} from 'react-redux';

import {
    FileManagerComponent
} from '../components'
export default connect(
    (state) => {
        return {
            ...state.FileManagerReducer
        }
    },
    (dispatch) => {
        return {
        }
    },
)(FileManagerComponent)