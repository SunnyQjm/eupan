import styled from 'styled-components';
import React from 'react';
import BaseColor from '../color';

const base_font_family = '"DFKai-SB", "STKaiti","Microsoft YaHei","黑体","宋体",sans-serif';
const BasePWithFontFamily = styled.p`
    font-family: ${base_font_family};    
`;

const BaseSpanWithFontFamily = styled.span`
    font-family: ${base_font_family};    
`;

const LightGayP = styled(BasePWithFontFamily)`
    color: ${BaseColor.color_gray}
`;

const GrayP = styled(BasePWithFontFamily)`
    color:${BaseColor.gray};
`;


const BaseButton = styled.button`
    border: none;
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


export {
    BaseSpanWithFontFamily,
    BasePWithFontFamily,
    LightGayP,
    GrayP,
    base_font_family,
    BaseButton,
}