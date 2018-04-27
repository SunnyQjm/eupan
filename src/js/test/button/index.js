import {
    ButtonToolbar,
    Button,
    ButtonGroup,
    DropdownButton,
    MenuItem,
    SplitButton,
    Dropdown,
    Glyphicon
} from 'react-bootstrap'
import {
    LoadingButton
} from '../../components'
import React from "react";

const wellStyles = {
    maxWidth: 400,
    margin: '30px auto 10px'
};
const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Link'];

function renderDropdownButton(title, i) {
    return (
        <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
            <MenuItem eventKey="1">操作</MenuItem>
            <MenuItem eventKey="2">另一操作</MenuItem>
            <MenuItem eventKey="3" active>激活条目</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">分组链接</MenuItem>
        </DropdownButton>
    );
}
const buttonInstance = (
    <div className='well' style={wellStyles}>
        <Button bsStyle='warning' block>Warning</Button>
        <LoadingButton/>
        <ButtonToolbar>
            <Button>Default</Button>
            <Button bsStyle='primary' active>Primary(activate)</Button>
            <Button bsStyle='success' disabled>Success</Button>
            <Button bsStyle='info'>Info</Button>
            <Button bsStyle='link'>Link</Button>
        </ButtonToolbar>
        <ButtonToolbar>
            <ButtonGroup bsSize="large">
                <Button>左</Button>
                <Button>中</Button>
                <Button>右</Button>
            </ButtonGroup>
        </ButtonToolbar>

        <ButtonToolbar>
            <ButtonGroup>
                <Button>左</Button>
                <Button>中</Button>
                <Button>右</Button>
            </ButtonGroup>
        </ButtonToolbar>

        <ButtonToolbar>
            <ButtonGroup bsSize="small">
                <Button>左</Button>
                <Button>中</Button>
                <Button>右</Button>
            </ButtonGroup>
        </ButtonToolbar>

        <ButtonGroup justified>
            <Button href="#">左</Button>
            <Button href="#">中</Button>
            <DropdownButton title="下拉" id="bg-justified-dropdown">
                <MenuItem eventKey="1">链接1</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey="2">链接2</MenuItem>
            </DropdownButton>
        </ButtonGroup>
        <ButtonGroup vertical block>
            <Button>1</Button>
            <Button>2</Button>
            <DropdownButton title={"下拉"} rootCloseEvent={'mousedown'}>
                <MenuItem eventKey='1'>链接1</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey='2'>链接2</MenuItem>
            </DropdownButton>
        </ButtonGroup>
        <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
        <SplitButton title="Dropdown right" pullRight dropup
                     id="split-button-pull-right">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
        </SplitButton>
        <Dropdown>
            <Button bsStyle={'primary'}>click</Button>
            <Dropdown.Toggle bsStyle={'success'}>
                <Glyphicon glyph={'star'}/>
                &nbsp;What fuck
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Separated link</MenuItem>
            </Dropdown.Menu>
        </Dropdown>
    </div>
);

export default buttonInstance;