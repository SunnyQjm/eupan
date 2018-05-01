import Loadable from 'react-loadable';
import React from 'react';
import {Spin} from 'antd';

const Loading = () => <Spin size={'larger'} style={{
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}}/>;

const HeaderContainer = Loadable({
    loader: () => import('./HeaderContainer'),
    loading: Loading
});
const DownloadContainer = Loadable({
    loader: () => import('./DownloadContainer'),
    loading: Loading
});

const UploadContainer = Loadable({
    loader: () => import('./UploadContainer'),
    loading: Loading
});
const FileManagerContainer = Loadable({
    loader: () => import('./FileManagerContainer'),
    loading: Loading
});
const SquareContainer = Loadable({
    loader: () => import('./SquareContainer'),
    loading: Loading
});
export {
    HeaderContainer,
    DownloadContainer,
    UploadContainer,
    FileManagerContainer,
    SquareContainer,
}