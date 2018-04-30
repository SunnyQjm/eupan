import React from "react";
import styled from 'styled-components';
import QueueAnim from 'rc-queue-anim';
import SquareItem from './squire_item';
import {BigTitleP, GrayP, TextGrayP} from "../../base/components";
import {FontSize} from '../../base/size'
import BaseColor from '../../base/color'
import WaterFlow from './WaterFlow';
import MediaQuery from 'react-responsive'

const $ = require('jquery');

const SquareComponentBody = styled.div`
`;

const CategoryBody = styled.div`
    background-color: ${BaseColor.color_light_grey};
    text-align: center;
    padding-top: 0px;
`;

const CategoryItemText = styled(TextGrayP)`
    display: inline-block;
    font-size: ${FontSize.FONT_SIZE_BIG_TITLE};
    width: 100px;
    margin-top: 30px;
    height: 40px;
    cursor: pointer;
    box-sizing: border-box;
    &:hover{
        color: ${BaseColor.color_apptheme};
        border-bottom: 3px solid ${BaseColor.color_text_gray}
    }
`;

const SquareItemsBody = styled.div`
    padding: 20px 0px;
`;

class SquareComponent extends React.Component {
    constructor(props) {
        super(props);
        this.scrollListener = this.scrollListener.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.changeState = this.changeState.bind(this);
        this.allowLoadmore = true;
    }

    scrollListener(e) {
        let lastElement = $('.square-item:last')[0];
        if (!lastElement)
            return;
        let itemBottom = lastElement.offsetTop + lastElement.offsetHeight;
        let t = document.documentElement.scrollTop || document.body.scrollTop;
        t = t + (document.documentElement.clientHeight || document.body.clientHeight);
        if (itemBottom <= t && this.props.allowLoadMore && this.allowLoadmore) {
            this.changeState(false);
            this.loadMore();
        }
    }

    loadMore() {
        if (this.props.allowLoadMore) {
            let {loadMore_} = this.props;
            loadMore_(this.props);
        }
    }

    componentDidMount() {
        let {firstLoading} = this.props;
        firstLoading(this.props);
        window.addEventListener('scroll', this.scrollListener);
    }

    changeState(loadMore) {
        this.allowLoadmore = loadMore;
    }

    componentDidUpdate() {
        if (this.props.changing) {
            this.componentDidMount();
            this.changeState(true);
        }
    }

    render() {
        let {data, showFile} = this.props;
        let listItems;
        if (!!data) {
            listItems = data.map((item, index) =>
                !item ? null :
                    <SquareItem className={'square-item'} key={item.id}
                                fileInfo={item} showFile={showFile} width={350}/>
            );
        }
        return (
            <SquareComponentBody>
                <CategoryBody>
                    <CategoryItemText>全部</CategoryItemText>
                    <CategoryItemText>热门</CategoryItemText>
                </CategoryBody>
                <SquareItemsBody>
                    <MediaQuery minWidth={1680}>
                        <WaterFlow column={4}>
                            {!!listItems && listItems}
                        </WaterFlow>
                    </MediaQuery>
                    <MediaQuery maxWidth={1680} minWidth={1270}>
                        <WaterFlow column={3}>
                            {!!listItems && listItems}
                        </WaterFlow>
                    </MediaQuery>
                    <MediaQuery maxWidth={1270}>
                        <WaterFlow column={2}>
                            {!!listItems && listItems}
                        </WaterFlow>
                    </MediaQuery>
                </SquareItemsBody>
            </SquareComponentBody>
        );
    }
}

export default SquareComponent;