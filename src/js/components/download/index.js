import React from "react";
import styled from 'styled-components';
import {
    FontSize
} from '../../base/size'
import {
    BigTitle,
    LightGayP
} from '../../base/components'
import {
    Image
} from 'react-bootstrap';
import BaseColor from '../../base/color';

import DownloadComponent from './download'
import QueueAnim from 'rc-queue-anim';


const DownloadPageBody = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 500px
    padding-top: 30px
    justify-content: center;
    align-items: center;
    margin-bottom: 60px
    background-color: ${BaseColor.color_light_grey};
`;

const CenterNormalP = styled(LightGayP)`
    text-align: center;
    width: 100%;
`;

const WaveImg = styled(Image)`
    position: absolute;
    bottom: -60px;
    z-index: -1;
`;

class DownloadPage extends React.Component {
    render() {
        let {downloadFile} = this.props;
        return (
            <QueueAnim type={'bottom'}>
                <DownloadPageBody key={1}>
                    <BigTitle>优云</BigTitle>
                    <CenterNormalP>提取码&nbsp;&nbsp;|&nbsp;&nbsp;传输文件&nbsp;&nbsp;|&nbsp;&nbsp;搜资源&nbsp;&nbsp;|&nbsp;&nbsp;分享文件&nbsp;&nbsp;|&nbsp;&nbsp;关注人</CenterNormalP>
                    <DownloadComponent key={3} downloadFile={downloadFile}/>
                    <WaveImg src={require('../../../icon/wave.png')} responsive/>
                </DownloadPageBody>
            </QueueAnim>
        )
    }
}

export default DownloadPage