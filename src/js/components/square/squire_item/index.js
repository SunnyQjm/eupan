import React from "react";
import {
    Avatar,
    Divider
} from 'antd'
import styled from 'styled-components';
import {
    BaseGrayTitle, GrayP, GreyP, LitleTextGrayP, TextGrayP
} from '../../../base/components'
import {
    Image
} from 'react-bootstrap'
import PropTypes from 'prop-types';
import {
    getIconByMIME
} from '../../../model/FileUtil';


const SquireItemBody = styled.div`
    background-color: white;
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    &:hover{
        box-shadow: 0px 0px 5px #888888;
    }
`;

const FileTypeIcon = styled(Image)`
    width: 50px;
    height: 50px;
    flex: 0;
`;

const FileTitleAndDescription = styled.div`
    margin-left: 10px
    width: 0;
    flex: 1;
`;
const FileNameText = styled(BaseGrayTitle)`
    font-weight: bold;
`;
const FileDescription = styled(TextGrayP)`
`;

const FileContentBody = styled.div`
    display: flex;
`;

const FileOwnerInfo = styled.div`
    display: flex;
    align-items: center;
`;

const FileOwnerAvatar = styled(Avatar)`
    width: 24px;
    height: 24px;
    flex-shrink: 0;     //头像不压缩
`;
const FileOwnerNameText = styled(TextGrayP)`
    margin-left: 10px;
    display: inline-block
`;
const FileCreateTime = styled(LitleTextGrayP)`
    width: 100%;
    text-align: end;
`;

/**
 * 文件的数据信心，点赞数，下载量什么的
 * @type {StyledComponentClass<JSX.IntrinsicElements["div"], any, JSX.IntrinsicElements["div"]>}
 */
const FileDataInfo = styled.div`
    margin-top: 10px;
    text-align: end;
`;

class SquireItem extends React.Component {
    render() {
        let {width, fileInfo} = this.props;
        return (
            <SquireItemBody style={{
                width: width
            }} className={this.props.className}>
                <FileContentBody>
                    <FileTypeIcon
                        responsive
                        circle
                        src={getIconByMIME(fileInfo.mime)}/>
                    <FileTitleAndDescription>
                        <FileNameText>{fileInfo.name}</FileNameText>
                        <FileDescription>{fileInfo.description}</FileDescription>
                    </FileTitleAndDescription>
                </FileContentBody>
                <Divider/>
                {
                    fileInfo.user ?
                        <FileOwnerInfo>
                            <FileOwnerAvatar
                                size={'small'}
                                src={fileInfo.user.avatar}/>
                            <FileOwnerNameText><a href="#">{fileInfo.user.username}</a>&nbsp;公开分享了该文件</FileOwnerNameText>
                        </FileOwnerInfo> :
                        ''
                }
                <FileCreateTime>{new Date(fileInfo.createTime).toLocaleTimeString()}</FileCreateTime>
                <FileDataInfo>
                    <LitleTextGrayP>
                        <a href="#">赞</a>(100)
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <a href="#">评论</a>(2)
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <a href="#">下载</a>(50)
                    </LitleTextGrayP>
                </FileDataInfo>
            </SquireItemBody>
        )
    }
}

SquireItem.defaultProps = {
    width: 200
};

/**
 {
            "id":1136,
            "createTime":1524996965293,
            "updateTime":1524996965293,
            "name":"541137%2BLinux命令行与shell脚本编程大全.第3版.pdf",
            "storeName":"992f7e5c-a347-484d-b2e6-1766445f3162",
            "size":22020651,
            "lookNum":1,
            "downloadCount":0,
            "identifyCode":"8pizfZ",
            "share":true,
            "privateOwn":false,
            "description":"来自优云的分享~",
            "score":0,
            "md5":"53e79a040d1fe6d46f3451758565ce5c",
            "star":0,
            "canStar":true,
            "mime":"pdf"
        }
 * @type {{width: *, fileInfo: shim}}
 */
SquireItem.propTypes = {
    width: PropTypes.number.isRequired,
    fileInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        lookNum: PropTypes.number.isRequired,
        downloadCount: PropTypes.number.isRequired,
        identifyCode: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        star: PropTypes.number.isRequired,
        user: PropTypes.object,
        mime: PropTypes.string.isRequired,
        createTime: PropTypes.number.isRequired,
    })
};
export default SquireItem