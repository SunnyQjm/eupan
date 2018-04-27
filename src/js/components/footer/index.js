import React from "react";
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.css'
import BaseColor from '../../base/color';
import {
    LightGayP
} from '../../base/components'
import {
    FontSize
} from '../../base/size'
import {
    MediaQuery
} from 'react-responsive'

const LightGrayPWithSize = LightGayP.extend`
    font-size: ${FontSize.FONT_SIZE_FOOTER}
`;

const FooterBody = styled.div`
`;

const FooterContract = styled.div`
    background-color: ${BaseColor.color_light_grey};    
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-top: 15px ;
    padding-bottom: 15px 
`;

const FooterCopyRight = styled.div`
    background-color: ${BaseColor.color_gray};
    text-align:center;
    color: white;
    padding-top: 15px ;
    padding-bottom: 15px 
    font-size: ${FontSize.FONT_SIZE_FOOTER}
`;

class FooterComponent extends React.Component {

    render() {
        return (
            <FooterBody>
                <FooterContract>
                    <div>
                        <LightGrayPWithSize><i
                            className="fa fa-phone"/>&nbsp;&nbsp;联系我们：18340857280</LightGrayPWithSize>
                        <LightGrayPWithSize><i className="fa fa-map-marker"/>&nbsp;&nbsp;辽宁省大连市大连理工大学-开发区校区
                            OurEDA实验室</LightGrayPWithSize>
                    </div>
                    <div>
                        <LightGrayPWithSize>首页 | 关于 | 服务 | 动态 | 联系</LightGrayPWithSize>
                    </div>
                </FooterContract>
                <FooterCopyRight>
                    @ 2018 大连理工大学开发区校区 OurEDA实验室 ALL RIGHT RESERVED
                </FooterCopyRight>
            </FooterBody>
        );
    }

}

export default FooterComponent;