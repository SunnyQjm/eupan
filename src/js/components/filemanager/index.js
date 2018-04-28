import React from "react";
import styled from 'styled-components';
import QueueAnim from 'rc-queue-anim';

const RectBg = styled.div`
    width: 100%;
    height: 600px;
    background-color: yellow;
`;

class FileManagerComponent extends React.Component{

    componentDidMount(){

    }
    render(){
        return (
            <QueueAnim type={'top'}>
                <RectBg key={'bg1'} />
            </QueueAnim>
        );
    }
}

export default FileManagerComponent;