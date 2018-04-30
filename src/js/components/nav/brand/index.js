import React from "react";
import styled from 'styled-components';
import {
    FontSize
} from '../../../base/size'

import {
    BaseSpanWithFontFamily
} from '../../../base/components'

const BigTitle = styled(BaseSpanWithFontFamily)`
    font-size: ${FontSize.FONT_SIZE_BIG_TITLE};
    color: gray;
`;

const BrandBody = styled.div`
    display: inline-flex;
    align-items: center;
    width: 180px;
`;

class EupanBrand extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let imgWidth = this.props.imgWidth;
        let imgHeight = this.props.imgHeight;
        let imgSrc = this.props.imgSrc;
        let imgMargin = this.props.imgMargin;
        return (
            <BrandBody>
                <img style={{
                    width: imgWidth,
                    height: imgHeight,
                    margin:imgMargin,
                }} src={imgSrc}/>
                <BigTitle>优云</BigTitle>
            </BrandBody>
        )
    }
}
export default EupanBrand