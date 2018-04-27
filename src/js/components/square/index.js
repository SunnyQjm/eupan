import React from "react";
import styled from 'styled-components';
import QueueAnim from 'rc-queue-anim';

const RectBg = styled.div`
    width: 100%;
    height: 500px;
    background-color: green;
`;

class SquareComponent extends React.Component {
    render() {
        return (
            <QueueAnim type={'top'}>
                <RectBg key={'bg1'} />
            </QueueAnim>
        );
    }
}

export default SquareComponent;