import React from "react";
import styled from 'styled-components';
import {
    FontSize
} from '../../base/size'
import {
    GrayP,
    LightGayP
} from '../../base/components'

import DownloadComponent from './download'
import QueueAnim from 'rc-queue-anim';

const BigTitle = styled(GrayP)`
    font-size: ${FontSize.FONT_SIZE_SUPER_BIG_TITLE}
    text-align: center;
    width: 100%;
`;

const DownloadPageBody = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 500px
    padding-top: 30px
    justify-content: center;
    align-items: center;
`;

const CenterNormalP = styled(LightGayP)`
    text-align: center;
    width: 100%;
`;

class DownloadPage extends React.Component {
    render() {
        return (
            <QueueAnim type={'bottom'}>
                <DownloadPageBody key={1}>
                    <BigTitle>优云</BigTitle>
                    <CenterNormalP>提取码&nbsp;&nbsp;|&nbsp;&nbsp;传输文件&nbsp;&nbsp;|&nbsp;&nbsp;搜资源&nbsp;&nbsp;|&nbsp;&nbsp;分享文件&nbsp;&nbsp;|&nbsp;&nbsp;关注人</CenterNormalP>
                    <DownloadComponent key={3}/>
                </DownloadPageBody>
            </QueueAnim>
        )
    }
}

export default DownloadPage