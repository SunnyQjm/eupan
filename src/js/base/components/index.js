import styled from 'styled-components';
import React from 'react';
import BaseColor from '../color';
import {FontSize} from "../size";
import {
    Button
} from 'antd'
const base_font_family = '""宋体", DFKai-SB", "STKaiti","Microsoft YaHei","黑体",sans-serif';
const BasePWithFontFamily = styled.p`
    font-family: ${base_font_family};    
`;

const BaseSpanWithFontFamily = styled.span`
    font-family: ${base_font_family};    
`;

const LightGayP = styled(BasePWithFontFamily)`
    color: ${BaseColor.color_gray}
`;

const GreyP = styled(BasePWithFontFamily)`
    color: ${BaseColor.color_grey}
`;


const GrayP = styled(BasePWithFontFamily)`
    color:${BaseColor.gray};
`;


const BaseAppThemeButton = styled(Button)`
    border: none;
    color: white !important;
    background: ${BaseColor.color_apptheme} !important;
    &:focus {
        border: none;
        outline: none;
    }
    &:hover {
        opacity: 0.8;
        cursor: pointer;
        transform: translateY(-1px);
        box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08);
    }    
`;

const BigTitle = styled(GrayP)`
    font-size: ${FontSize.FONT_SIZE_SUPER_BIG_TITLE}
    text-align: center;
    width: 100%;
`;

export {
    BaseSpanWithFontFamily,
    BasePWithFontFamily,
    LightGayP,
    GrayP,
    GreyP,
    base_font_family,
    BaseAppThemeButton,
    BigTitle,
}