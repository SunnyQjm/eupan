import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import headerBg from '../../../../icon/wave1.png';
import lock from '../../../../icon/lock.png';
import {
    GrayP,
    BasePWithFontFamily,
    BaseButton,
} from '../../../base/components';

import {
    FontSize
} from '../../../base/size'
import BaseColor from '../../../base/color'

const DownloadComponentBody = styled.div`
    border: 1px solid ${BaseColor.color_apptheme};
    @media (max-width: 550px) {
        width: 100%;
    }
    background-color: white;
`;
const Header = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

const HeaderContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: -webkit-box;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeaderBg = styled.img`
    
`;

const HeaderText = styled(BasePWithFontFamily)`
    color: white;
    margin-top: 15px;
    font-size: ${FontSize.FONT_SIZE_BIG_TITLE}
`;

const Body = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 350px;
`;

const BodyTitle = styled(GrayP)`
    font-size: ${FontSize.FONT_SIZE_TITLE}    
`;

const BodyInput = styled.input`
    width: 60%;
    border: none;
    text-align: center;
    background-color: ${BaseColor.color_grey};
    padding: 10px;
`;

const BodyButton = styled(BaseButton)`
    width: 60%;
    padding: 5px;
    height: 45px;
    border-radius: 35px;
    color: white;
    background: ${BaseColor.color_apptheme};
`;


class DownloadComponent extends React.Component {

    constructor(props){
        super(props);
        this.handleDownload = this.handleDownload.bind(this);
        this.downloadForm = React.createRef();
    }

    handleDownload(){
        let {downloadFile} = this.props;
        let identifyCode = this.codeInput.value;
        let form = this.downloadForm.current;
        console.log(identifyCode);
        console.log(form);
        downloadFile(identifyCode, form);
    }
    render() {
        let {width} = this.props;
        return (
            <DownloadComponentBody style={{
                maxWidth: width
            }}>
                <Header>
                    <HeaderContent>
                        <img src={lock} style={{
                            width: 47,
                            margin: '0 auto'
                        }}/>
                        <HeaderText>提取码</HeaderText>
                    </HeaderContent>
                    <HeaderBg src={headerBg} alt=""/>
                </Header>
                <Body>
                <BodyTitle>请输入提取码以提取文件</BodyTitle>
                <BodyInput placeholder={'在此输入6位提取码'} autoFocus innerRef={x => this.codeInput = x}/>
                <BodyButton bsStyle={'primary'} onClick={this.handleDownload}>提取文件</BodyButton>
                <form ref={this.downloadForm} target={'upload_target'}/>
                <iframe name="upload_target" ref={'catch_result'}
                        style={{height: 0, width: 0}}/>
                </Body>
            </DownloadComponentBody>
        );
    }
}

DownloadComponent.defaultProps = {
    width: 525
};

export default DownloadComponent;

DownloadComponent.propTypes = {
    width: PropTypes.number,
};