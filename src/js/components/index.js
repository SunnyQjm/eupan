import Loadable from 'react-loadable';
import {Spin} from 'antd';
import React from 'react';
const Loading = () => <Spin size={'larger'}/>;

const EupanNav = Loadable({
    loader: () => import('./nav'),
    loading: Loading
});
const UploadPage = Loadable({
    loader: () => import('./upload'),
    loading: Loading
});
const DownloadPage = Loadable({
    loader: () => import('./download'),
    loading: Loading
});
const SquareComponent = Loadable({
    loader: () => import('./square'),
    loading: Loading
});
const FileManagerComponent = Loadable({
    loader: () => import('./filemanager'),
    loading: Loading
});
const FooterComponent = Loadable({
    loader: () => import('./footer'),
    loading: Loading
});


export {
    EupanNav,
    UploadPage,
    DownloadPage,
    SquareComponent,
    FileManagerComponent,
    FooterComponent,
}