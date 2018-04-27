import React from "react";

import styled from 'styled-components';
import QueueAnim from 'rc-queue-anim';

const RectBg = styled.div`
    width: 100%;
    height: 500px;
    background-color: pink;
`;


class UploadComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <QueueAnim type={'bottom'}>
                {this.state.show ? <RectBg key={'bg1'} onClick={() => {
                        this.setState({show: false})
                    }}/>
                    : null}
            </QueueAnim>
        );
    }
}

export default UploadComponent