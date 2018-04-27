import {
    connect
} from 'react-redux';
import {
    DownloadPage
} from '../components'
export default connect(
    (state) => {
        return {
            ...state.DownloadReducer
        }
    },
    (dispatch) => {
        return {
        }
    },
)(DownloadPage)