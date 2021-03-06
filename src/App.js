import React from 'react';
import es6 from'es6-shim';      //md,有些浏览器还不支持es6
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import LocalRoute from './js/model/LocalRoute';
import {
    FooterComponent
} from './js/components'
import {
    HeaderContainer,
    DownloadContainer,
    UploadContainer,
    SquareContainer,
    FileManagerContainer
} from './js/container'
import styled from 'styled-components';
import store from './store';
import BaseColor from './js/base/color';
import {
    Provider
} from 'react-redux'

const AppBody = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    background-color: ${BaseColor.color_light_grey}
`;

const FlexFillItem = styled.span`
    background-color: ${BaseColor.color_light_grey}
    flex: 1;
`;

const Header = styled(HeaderContainer)`
    flex: 0 0 auto;
`;
const App = () => (
    <Provider store={store}>
        <Router
            basename={process.env.PUBLIC_URL}>
            <AppBody>
                <Header/>
                <FlexFillItem>
                    <Switch>
                        <Route key={'a'} exact path={LocalRoute.HOME} component={DownloadContainer}/>
                        <Route key={'b'} path={LocalRoute.UPLOAD} component={UploadContainer}/>
                        <Route key={'c'} path={LocalRoute.SQUARE} component={SquareContainer}/>
                        <Route key={'d'} path={LocalRoute.FILE_MANAGER} component={FileManagerContainer}/>
                    </Switch>
                </FlexFillItem>
                <FooterComponent/>
            </AppBody>
        </Router>
    </Provider>
);

export default App;
