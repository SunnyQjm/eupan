import React from 'react'
import {
    Modal,
    Button,
    Popover,
    Tooltip,
    OverlayTrigger
} from 'react-bootstrap'

const modalInstance = (
    <div className='static-model'>
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>对话框标题</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                主体内容...
            </Modal.Body>

            <Modal.Footer>
                <Button>取消</Button>
                <Button bsStyle={'primary'}>保存</Button>
            </Modal.Footer>
        </Modal.Dialog>
    </div>
);

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.setState({
            showModal: false
        })
    }

    open() {
        this.setState({
            showModal: true
        })
    }

    render() {
        const popover = (
            <Popover title={'popover'}>
                very popover
            </Popover>
        );
        const tooltip = (
            <Tooltip>
                wow.
            </Tooltip>
        );

        return (
            <div>
                <p>点击按钮显示弹窗</p>
                <Button bsStyle={'primary'} bsSize={'large'} onClick={this.open}>
                    弹出实例对话框
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>对话框标题</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        主体内容...
                        <p>点 <OverlayTrigger overlay={popover}><a href="#">这里</a></OverlayTrigger> 显示一个弹出框。</p>

                        <h4>对话框中的提示</h4>
                        <p>点 <OverlayTrigger overlay={tooltip}><a href="#">这里</a></OverlayTrigger> 显示一个提示。</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.close}>取消</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export {
    modalInstance,
    ModalExample
}