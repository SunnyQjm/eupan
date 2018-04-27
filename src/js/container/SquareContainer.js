import {
    connect
} from 'react-redux';
import {
    SquareComponent
} from '../components'

export default connect(
    (state) => {
        return {
            ...state.SquareReducer
        }
    },
    (dispatch) => {
        return {
        }
    },
)(SquareComponent)