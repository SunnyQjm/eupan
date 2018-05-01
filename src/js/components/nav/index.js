import React from "react";
import {
    Navbar,
    Dropdown,
    MenuItem,
} from 'react-bootstrap'
import {
    NavLink
} from 'react-router-dom'
import {
    FontSize
} from '../../base/size'
import {
    base_font_family,
    BaseSpanWithFontFamily
} from '../../base/components'
import BaseColor from '../../base/color'
import MediaQuery from 'react-responsive'
import EupanBrand from './brand'
import SearchInput from './search'
import logo from '../../../icon/logo.png'
import styled from 'styled-components'
import LocalRoute from '../../model/LocalRoute';

const logoWidth = 107 / 1.5;
const logoHeight = 70 / 1.5;
const logoMargin = 5;
const barHeight = logoHeight + 2 * logoMargin;

////////////////////////////////////////////////////////////////////////////////
/////// css in js
///////////////////////////////////////////////////////////////////////////////
const MyNav = styled.div`
    // margin-left: 30px;
    height: ${barHeight}px
`;

const NormalSpan = styled(BaseSpanWithFontFamily)`
    font-size: ${FontSize.FONT_SIZE_TAB_LINK};
`;
const TabLink = styled(NavLink)`
    font-size: ${FontSize.FONT_SIZE_TAB_LINK};
    font-family: ${base_font_family};
    color: ${props => props.isActive ? BaseColor.color_apptheme : 'gray'};
    &:hover{
        color: ${BaseColor.color_apptheme}
    }
    height: ${barHeight}px;
    text-align: center;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    &:link, &:visited, &:hover{
        text-decoration:none;
    }
`;

const ExpandTabLink = TabLink.extend`
    height: auto
`;
const linkActiveStyle = {
    color: BaseColor.color_apptheme
};

const FlexFillItem = styled.span`
    flex-grow: 1;
`;

const NavBarContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 10px;
    padding-right: 10px;
    // margin-bottom: 20px;
    background-color: white;
    box-shadow: 0 0.8px ${BaseColor.color_light_gray}
`;

const HeaderBody = styled.div`
    width: 100%;
`;

//////////////////////////////////////////////////////////////////////////////////
//////// Component
//////////////////////////////////////////////////////////////////////////////////
class EupanNav extends React.Component {
    render() {
        let {activeBar, selectBar} = this.props;
        let nav = <MyNav activeKey={activeBar}>
            <TabLink myKey={1} to={LocalRoute.HOME} exact activeStyle={linkActiveStyle} onClick={() => {
                selectBar(1)
            }}>
                首页
            </TabLink>
            <TabLink myKey={2} to={LocalRoute.SQUARE} activeStyle={linkActiveStyle} onClick={() => {
                selectBar(2)
            }}>
                发现广场
            </TabLink>
            <TabLink myKey={3} to={LocalRoute.UPLOAD} activeStyle={linkActiveStyle} onClick={() => {
                selectBar(3)
            }}>
                我要上传
            </TabLink>
            <TabLink myKey={4} to={LocalRoute.FILE_MANAGER} activeStyle={linkActiveStyle} onClick={() => {
                selectBar(4)
            }} disabled>
                    我的文件
            </TabLink>
        </MyNav>;
        return (
            <HeaderBody>
                <NavBarContainer>
                    <Navbar.Header>
                        <EupanBrand imgWidth={logoWidth} imgHeight={logoHeight} imgSrc={logo} imgMargin={logoMargin}/>
                    </Navbar.Header>
                    <MediaQuery minWidth={900}>
                        {nav}
                    </MediaQuery>

                    <FlexFillItem/>
                    <MediaQuery minWidth={570}>
                        <SearchInput className={'search-input'} expandWidth={200} placeholder={'文件名/用户名/手机号'} style={{
                            marginRight: '20px'
                        }}/>
                    </MediaQuery>
                    <MediaQuery maxWidth={900}>
                        <Dropdown id={'drop-down'} noCaret pullRight style={{
                            marginRight: '20px',
                        }}>
                            <Dropdown.Toggle noCaret>
                                <i className='fa fa-bars'/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <MenuItem eventKey={1} href="#"><ExpandTabLink
                                    to={LocalRoute.HOME}>首页</ExpandTabLink></MenuItem>
                                <MenuItem eventKey={2} href="#"><ExpandTabLink
                                    to={LocalRoute.SQUARE}>发现广场</ExpandTabLink></MenuItem>
                                <MenuItem eventKey={3} href="#"><ExpandTabLink
                                    to={LocalRoute.UPLOAD}>我要上传</ExpandTabLink></MenuItem>
                                <MenuItem eventKey={4} href="#"><ExpandTabLink
                                    to={LocalRoute.FILE_MANAGER}>我的文件</ExpandTabLink></MenuItem>
                            </Dropdown.Menu>
                        </Dropdown>
                    </MediaQuery>

                    <a href="#" disabled><NormalSpan>登录</NormalSpan></a>
                    <span style={{
                        paddingLeft: '15px',
                        paddingRight: '15px'
                    }}> | </span>
                    <a href="#" disabled><NormalSpan>注册</NormalSpan></a>

                </NavBarContainer>
            </HeaderBody>

        );
    }
}

export default EupanNav