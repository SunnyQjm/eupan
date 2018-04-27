import {
    connect
} from 'react-redux';
import {
    UploadComponent
} from '../components'

export default connect(
    (state) => {
        return {
            ...state.UploadReducer
        }
    },
    (dispatch) => {
        return {
        }
    },
)(UploadComponent)