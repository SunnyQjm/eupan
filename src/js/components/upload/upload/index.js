import React from "react";
import styled from 'styled-components';
import {
    BigTitleP,
    GreyP, GrayP,
    BaseAppThemeButton
} from '../../../base/components'
import BaseColor from '../../../base/color';
import {Progress, Radio, DatePicker, InputNumber, Input} from 'antd';
import moment from 'moment'
import browserMD5File from 'browser-md5-file';
import {
    Link
} from 'react-router-dom'
import {
    UploadParams
} from '../../../model/API'

import 'antd/dist/antd.css';

const UploadComponentBody = styled.div`
    background-color: white;
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
`;

const UploadLabel = styled(BigTitleP)`
`;
const CenterGreyP = styled(GreyP)`
    text-align: center;
`;


const icon_pc = require('../../../../icon/pc.png');
const UploadDraggerBody = styled.div`
    width: 100%;
    min-height: 240px;
    background-color: ${BaseColor.color_light_grey};
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`;

const UploadTipDeepLabel = styled(GrayP)`
    text-align: center;
    font-weight: bold;
`;

const UploadPCAndText = styled.div`
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const UploadInput = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: red;
    opacity: 0;
    cursor: pointer;
`;

const ProgressBar = styled.div`
    width: 70%;
`;

const UploadFiles = styled(GrayP)`
    // text-align: center;
`;

const UploadSettingBody = styled.div`
    
`;
const UploadSettingText = styled(CenterGreyP)`
    margin-top: 20px;
`;

const BoldText = styled(GrayP)`
    font-weight: bold;
    display: inline-block;
    margin-right: 30px;
    width: 100px;
    text-align: end;
`;
const RadioGroup = Radio.Group;

/////////////////////////////////////////////////////
///// Settings
/////////////////////////////////////////////////////
const SettingOptionItem = styled.div`
    padding: 5px 0
`;
const IsPublic = styled(SettingOptionItem)`
`;

const ValidTime = styled(SettingOptionItem)`
    margin-bottom: 10px;
`;

const AllowDownloadTime = styled(SettingOptionItem)`
`;

const Description = styled(SettingOptionItem)`
    display: flex;
`;
const DescriptionInput = styled(Input.TextArea)`
    flex: 1;
`;

const MyRadio = styled(Radio)`
       min-width: 100px;
`;

const UploadButton = styled(BaseAppThemeButton)`
    width: 200px !important;
    height: 35px !important;
    border-radius: 35px !important;
    margin: 0 auto;
    margin-top: 20px;
`;

class UploadComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleFileSelect = this.handleFileSelect.bind(this);
        this.handleSettingOptionsChange = this.handleSettingOptionsChange.bind(this);
        this.handleExpireTimeChange = this.handleExpireTimeChange.bind(this);
        this.handleOnDatePickerOk = this.handleOnDatePickerOk.bind(this);
        this.handleAllowDownloadCountChange = this.handleAllowDownloadCountChange.bind(this);
        this.handleAllowDownloadCountInputChange = this.handleAllowDownloadCountInputChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleFileSelect(e) {
        let {selectFile} = this.props.uploadProps;
        let files = this.uploadInput.files;
        if (files.length <= 0)
            return;
        let selectFilePaths = [];
        for (let i = 0; i < files.length; i++)
            selectFilePaths.push(files[i].name);
        //发送选择文件事件，
        selectFile(selectFilePaths);
    }

    handleSettingOptionsChange(e) {
        let {handleChange} = this.props.uploadProps;
        console.log('onChange');
        handleChange(e.target.name, e.target.value);
    }

    handleExpireTimeChange(e) {
        let {updateState} = this.props.uploadProps;
        let value = e.target.value;
        if (value >= -1) {
            updateState({
                showDatePicker: false
            });
            this.handleSettingOptionsChange(e);
        } else if (value === -2) {
            updateState({
                showDatePicker: true
            });
            this.handleSettingOptionsChange({
                target: {
                    name: e.target.name,
                    value: new Date().getTime()
                }
            })

        }
    }

    handleOnDatePickerOk(date, dateString) {
        if (date == null)
            return;
        this.handleSettingOptionsChange({
            target: {
                name: UploadParams.expireTime,
                value: date.format('X') + '000'
            }
        })
    }


    handleAllowDownloadCountChange(e) {
        let value = e.target.value;
        let {updateState} = this.props.uploadProps;
        if (value >= -1) {
            updateState({
                allowDownloadCountInputDisable: true
            });
            this.handleSettingOptionsChange(e)
        } else {
            updateState({
                allowDownloadCountInputDisable: false
            });
        }
    }

    handleAllowDownloadCountInputChange(number) {
        this.handleSettingOptionsChange({
            target: {
                name: UploadParams.leftDownloadCount,
                value: number
            }
        })
    }


    /**
     * 处理上传操作
     */
    handleUpload() {
        let {uploadFile} = this.props.uploadProps;
        let files = this.uploadInput.files;

        let params = this.props.uploadProps.uploadOptions;
        uploadFile(files, params);
    }

    render() {
        let {width, selectedFiles, showDatePicker, allowDownloadCountInputDisable, uploadOptions, uploading,
            uploadProgress} = this.props.uploadProps;
        console.log('selectFiles: ' + selectedFiles);
        return (
            <UploadComponentBody style={{
                width: width,
            }}>
                <UploadLabel>上传</UploadLabel>
                <CenterGreyP>你还未登陆，点此 <Link to='#'>登陆上传</Link></CenterGreyP>
                <UploadDraggerBody>
                    <UploadPCAndText>
                        <img src={icon_pc}/>
                        <UploadTipDeepLabel>支持文件拖拽上传</UploadTipDeepLabel>
                    </UploadPCAndText>
                    <UploadInput type={'file'} multiple onChange={this.handleFileSelect} innerRef={x => {
                        this.uploadInput = x;
                    }}/>
                    <ProgressBar>
                        {
                            selectedFiles.map((file, index) => {
                                return (
                                    <div>
                                        <Progress percent={uploadProgress[index]} width={50} strokeWidth={15}/>
                                        <UploadFiles>{file}</UploadFiles>
                                    </div>
                                )
                            })
                        }
                    </ProgressBar>
                </UploadDraggerBody>
                <UploadSettingBody>
                    <UploadSettingText>上传设置</UploadSettingText>
                    <IsPublic>
                        <RadioGroup name={UploadParams.share} defaultValue={true}
                                    onChange={this.handleSettingOptionsChange}>
                            <BoldText>是否分享到广场</BoldText>
                            <MyRadio value={true}>是</MyRadio>
                            <MyRadio value={false}>否</MyRadio>
                        </RadioGroup>
                    </IsPublic>
                    <ValidTime>
                        <RadioGroup name={UploadParams.expireTime} defaultValue={-1}
                                    onChange={this.handleExpireTimeChange}>
                            <BoldText>有效时间</BoldText>
                            <MyRadio value={24 * 60 * 60 * 1000 + (new Date()).getTime()}>一天</MyRadio>
                            <MyRadio value={24 * 60 * 60 * 1000 * (new Date()).getTime()}>一周</MyRadio>
                            <MyRadio value={24 * 60 * 60 * 1000 * (new Date()).getTime()}>30天</MyRadio>
                            <MyRadio value={-1}>永久</MyRadio>
                            <br/>
                            <BoldText/>

                            <MyRadio value={-2}>
                                {showDatePicker ?
                                    <DatePicker
                                        key={1}
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                        placeholder="Select Time"
                                        defaultValue={moment()}
                                        onOk={this.handleOnDatePickerOk}
                                    /> :
                                    '自定义'}
                            </MyRadio>
                        </RadioGroup>
                    </ValidTime>
                    <AllowDownloadTime>
                        <RadioGroup name={UploadParams.leftAllowDownloadCount} defaultValue={-1}
                                    onChange={this.handleAllowDownloadCountChange}>
                            <BoldText>允许下载次数</BoldText>
                            <MyRadio value={1}>一次</MyRadio>
                            <MyRadio value={-1}>不限</MyRadio>
                            <MyRadio value={-2}><InputNumber defaultValue={1} disabled={allowDownloadCountInputDisable}
                                                             onChange={this.handleAllowDownloadCountInputChange}/></MyRadio>
                        </RadioGroup>
                    </AllowDownloadTime>
                    <Description>
                        <BoldText>详情描述</BoldText>
                        <DescriptionInput name={UploadParams.description} autosize={{minRows: 2, maxRows: 4}}
                                          defaultValue={uploadOptions.description}
                                          onChange={this.handleSettingOptionsChange}/>
                    </Description>
                </UploadSettingBody>
                <UploadButton loading={uploading} disabled={selectedFiles.length === 0}
                              onClick={this.handleUpload}>上传</UploadButton>
            </UploadComponentBody>
        );
    }
}

UploadComponent.defaultProps = {
    width: 525
};

export default UploadComponent;