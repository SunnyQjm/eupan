import React from "react";
import TweenOne from 'rc-tween-one'
import BaseColor from '../../../base/color'
import 'font-awesome/css/font-awesome.css'


class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.onIconMouseEnter = this.onIconMouseEnter.bind(this);
        this.onIconMouseLeave = this.onIconMouseLeave.bind(this);
        this.onIconClick = this.onIconClick.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.state = {
            open: false,
            iconHover: false,
            inputFocus: false,
            closing: false
        };
    }
    //////////////////////////////////////////////////////
    /////// Search icon hover event deal
    /////////////////////////////////////////////////////
    onIconMouseEnter() {
        this.setState({
            iconHover: true,
        });
    }

    onIconMouseLeave() {
        this.setState({
            iconHover: false
        });
    }


    //////////////////////////////////////////////////////
    //////// Search icon click event deal
    //////////////////////////////////////////////////////
    onIconClick() {
        if (!this.state.open) {
            this.setState({
                open: true
            })
        }
    }

    //////////////////////////////////////////////////////////////////
    /////////// Input focus event deal
    //////////////////////////////////////////////////////////////////
    onInputFocus() {
        this.setState({
            inputFocus: true
        });
    }

    onInputBlur() {
        this.setState({
            inputFocus: false,
            open: false,
            iconHover: false,
            closing: true
        });
    }

    render() {
        let open = this.state.open;
        let inputFocus = this.state.inputFocus;
        let closing = this.state.closing;

        let iconStyle = (open || closing) ? openIconStyle : this.state.iconHover ? closeIconStyleHover : closeIconStyle;
        let icon = <i key={1} className="fa fa-search mooc-search-icon" style={
            iconStyle
        } onMouseEnter={
            this.onIconMouseEnter
        } onMouseLeave={
            this.onIconMouseLeave
        } onClick={
            this.onIconClick
        }
        />;

        let inputStyle = open ? inputFocus ? onInputFocusStyle : openInputStyle : closing ? openInputStyle : closeInputStyle;
        let input = <input key={2} style={inputStyle} type='search' placeholder={this.props.placeholder}
                           className='eupan-search-input' onFocus={this.onInputFocus} onBlur={this.onInputBlur}
                           id='mdzz' autoFocus/>;
        return (
            <form style={this.props.style} className={this.props.className + ' eupan-search-input-body'}>
                {open ?
                    <TweenOne animation={{
                        width: this.props.expandWidth,
                        duration: this.props.duration,
                    }} style={{
                        width: 28
                    }}>
                        {input}
                        {icon}
                    </TweenOne> : closing ?
                        <TweenOne animation={{
                            width: 28,
                            duration: this.props.duration,
                        }} style={{
                            width: this.props.expandWidth
                        }} onChange={(props) => {
                            if (props.moment === this.props.duration) {   //动画结束
                                this.setState({
                                    closing: false
                                })
                            }
                        }}>
                            {input}
                            {icon}
                        </TweenOne>
                        : [input, icon]
                }

            </form>
        );
    }
}

//////////////////////////////////////////////////////////////////////////////////
//////// close style
//////////////////////////////////////////////////////////////////////////////////
const DEFAULT_WIDTH = 200;
const DEFAULT_HEIGHT = 28;

let closeIconStyle = {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BaseColor.color_light_gray,
    borderRadius: '50%',
    width: DEFAULT_HEIGHT,
    height: DEFAULT_HEIGHT,
    cursor: 'pointer',
};

let closeIconStyleHover = Object.assign(Object.assign({}, closeIconStyle), {
    backgroundColor: BaseColor.color_apptheme
});

let closeInputStyle = {
    display: 'none'
};

///////////////////////////////////////////////////////////////////////////////////
//////// open style
///////////////////////////////////////////////////////////////////////////////////


let openIconStyle = Object.assign(Object.assign({}, closeIconStyle), {
    marginLeft: -DEFAULT_HEIGHT,
    background: 'none'
});

let openInputStyle = {
    width: '100%',
    height: DEFAULT_HEIGHT,
    borderRadius: DEFAULT_HEIGHT / 2,
    borderWidth: 0,
    padding: 10,
    outline: 'none',
    fontSize: '0.9em',
};

let onInputFocusStyle = Object.assign(Object.assign({}, openInputStyle), {
    borderWidth: 1,
    borderColor: BaseColor.color_apptheme,
    borderStyle: 'solid'
});

SearchInput.defaultProps = {
    className: "",
    expandWidth: 200,
    duration: 500,
    placeholder: '搜索'
};

export default SearchInput