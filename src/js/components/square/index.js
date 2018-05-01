import React from "react";
import styled from 'styled-components';
import SquareItem from './squire_item';
import {BigTitleP, GrayP, TextGrayP} from "../../base/components";
import {FontSize} from '../../base/size'
import BaseColor from '../../base/color'
import WaterFlow from './WaterFlow';
import MediaQuery from 'react-responsive'
import {
    message
} from 'antd';

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

const CategoryItemTextSelected = styled(CategoryItemText)`
    color: ${BaseColor.color_apptheme}
`;

const SquareItemsBody = styled.div`
    padding: 20px 0px;
`;

class SquareComponent extends React.Component {

    constructor(props) {
        super(props);
        this.downFile = this.downFile.bind(this);
        this.tryLoadMore = this.tryLoadMore.bind(this);
        this.downloadForm = React.createRef();
        this.loading = false;
    }

    refresh(){
        let {load} = this.props;
        load(this.props, true);
    }

    componentDidMount() {
        this.refresh();
        let t;
        EventUtil.addHandler(window, 'scroll', (e) => {
            if (!!t)
                clearTimeout(t);
            t = setTimeout(() => {
                this.tryScrollLoadMore();
            }, 100);
        })
    }


    componentWillUnmount() {
        EventUtil.removeHandler(window, 'scroll')
    }

    /**
     * 判断是否加载更多数据，在最后一个元素显示出来的时候，就需要
     * @returns {boolean}
     */
    judgeIsNeedLoadMore() {
        console.log(this.props.loading.toString() + ", " + this.loading.toString());
        console.log(this.lastItem);
        console.log(this.squareItemsBody);
        console.log(this.squareBody);
        if (!this.props.loading && !this.loading && !!this.lastItem
            && !!this.squareBody && !!this.squareItemsBody) {
            let visibleBottom = document.documentElement.scrollTop || document.body.scrollTop;
            visibleBottom += (document.documentElement.clientHeight || document.body.clientHeight);
            let lastItemTop = this.lastItem.offsetTop + this.squareBody.offsetTop + this.squareItemsBody.offsetTop;
            console.log(visibleBottom + ', ' + lastItemTop);
            return (visibleBottom > lastItemTop);
        }
        return false;
    }

    async loadMore() {
        let {load, page, size, hot, time} = this.props;
        page += 1;
        await load({page, size, hot, time}, false);
        this.loading = false;
    }

    tryScrollLoadMore() {
        if (this.judgeIsNeedLoadMore()) {
            this.loading = true;
            this.loadMore();
        }
    }

    tryLoadMore() {
        if (this.judgeIsNeedLoadMore()) {
            this.loading = true;
            this.loadMore();
        }
    }

    downFile(identifyCode) {
        let {downloadFile} = this.props;
        downloadFile(identifyCode, this.downloadForm.current);
    }

    componentDidUpdate(preProps, preState, snap) {
        if(preProps.category === this.props.category){
            this.tryLoadMore();
        } else {
            this.refresh();
        }
    }


    selectCategory(category) {
        let {changeCategory} = this.props;
        changeCategory(category);
    }

    render() {
        let {files, showFile, category} = this.props;
        let listItems;
        if (!!files) {
            listItems = files.map((item, index) =>
                !item ? null :
                    <SquareItem className={'square-item'} key={item.id}
                                fileInfo={item} showFile={showFile} width={350}
                                downloadFile={this.downFile}
                                innerRef={x => {
                                    if(x === null) {
                                        this.tryLoadMore();
                                        return;
                                    }
                                    this.lastItem = x;
                                    if (index === files.length - 1) {
                                        this.tryLoadMore();
                                    }
                                }}/>
            );
        }
        return (
            <SquareComponentBody innerRef={x => {
                this.squareBody = x;
            }}>
                <form ref={this.downloadForm} target={'download_target'}/>
                <iframe name="download_target" ref={'catch_result'}
                        style={{height: 0, width: 0}}/>
                <CategoryBody>
                    {category === 'all' ? <CategoryItemTextSelected>全部</CategoryItemTextSelected> :
                        <CategoryItemText onClick={()=>{
                            this.selectCategory('all');
                        }}>全部</CategoryItemText>}
                    {category === 'hot' ? <CategoryItemTextSelected>热门</CategoryItemTextSelected> :
                        <CategoryItemText onClick={()=>{
                            this.selectCategory('hot');
                        }}>热门</CategoryItemText>}
                </CategoryBody>
                <SquareItemsBody innerRef={x => {
                    this.squareItemsBody = x;
                }}>
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

const EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener)
            element.addEventListener(type, handler, false);
        else if (element.attachEvent)
            element.attachEvent("on" + type, handler);
        else
            element["on" + type] = handler;
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener)
            element.removeEventListener(type, handler, false);
        else if (element.detachEvent)
            element.detachEvent("on" + type, handler);
        else
            element["on" + type] = handler;
    },
};


export default SquareComponent;