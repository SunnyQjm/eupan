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
    height: 400px;
`;

const BodyTitle = styled(GrayP)`
    font-size: ${FontSize.FONT_SIZE_TITLE}    
`;

const BodyInput = styled.input`
    width: 60%;
    border: none;
    text-align: center;
    background-color: ${BaseColor.color_grey}
    padding: 10px;
`;

const BodyButton = styled(BaseButton)`
    width: 60%;
    padding: 5px;
    height: 35px;
    border-radius: 35px;
    color: white;
    background: ${BaseColor.color_apptheme};
`;


class DownloadComponent extends React.Component {
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
                <BodyInput placeholder={'在此输入6位提取码'} autoFocus/>
                <BodyButton bsStyle={'primary'}>提取文件</BodyButton>
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