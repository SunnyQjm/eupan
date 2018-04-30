import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
    Progress, Tooltip, message
} from 'antd';
import {
    BaseSpanWithFontFamily,
    GrayP
} from '../../../base/components';
import copy from 'copy-to-clipboard';


const UploadItemBody = styled.div`
`;

const UploadFiles = styled(GrayP)`
`;

const FileName = styled(BaseSpanWithFontFamily)`

`;

const IdentifyCodeBody = styled.span`
    margin-left: 20px;
`;

const CopyIcon = styled.i`
    &: hover{
        cursor: pointer;
    }
`;

class UploadItem extends React.Component {
    render() {
        let {progress, fileName, identifyCode} = this.props;
        let identifyCodeItem = '';
        if (!!identifyCode)
            identifyCodeItem = (
                <IdentifyCodeBody>
                    提取码：{identifyCode}&nbsp;&nbsp;&nbsp;
                    <Tooltip title={'复制提取码'}>
                        <CopyIcon key={1} className="fa fa-clone" onClick={()=>{
                            copy(identifyCode);
                            message.success('提取码已复制到剪切板');
                        }}/>
                    </Tooltip>
                </IdentifyCodeBody>);
        return (
            <UploadItemBody>
                <Progress percent={progress} width={50} strokeWidth={15}/>
                <UploadFiles>
                    <FileName>{fileName}</FileName>
                    {identifyCodeItem}
                </UploadFiles>
            </UploadItemBody>
        )
    }
}

UploadItem.propTypes = {
    progress: PropTypes.number.isRequired,
    fileName: PropTypes.string.isRequired,
    identifyCode: PropTypes.string.isRequired,

};

export default UploadItem