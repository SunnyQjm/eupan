import React from "react";

import styled from 'styled-components';
import UploadComponent from './upload'
import QueueAnim from 'rc-queue-anim';

const UploadPageBody = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;
class UploadPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let {selectFile, selectedFiles, handleChange, updateState, showDatePicker, allowDownloadCountInputDisable,
        //     uploadOptions, uploading} = this.props;
        return (
            <QueueAnim type={'top'}>
                <UploadPageBody key={1}>
                    <UploadComponent key={1} width={774} uploadProps={this.props}/>
                </UploadPageBody>
            </QueueAnim>
        );
    }
}

export default UploadPage