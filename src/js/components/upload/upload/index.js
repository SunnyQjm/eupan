import React from "react";
import styled from 'styled-components';
import {
    BigTitle,
    GreyP, GrayP,
    BaseAppThemeButton
} from '../../../base/components'
import BaseColor from '../../../base/color';
import {Progress, Radio, DatePicker, InputNumber, Input} from 'antd';
import moment from 'moment'
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

const UploadLabel = styled(BigTitle)`
`;
const CenterGreyP = styled(GreyP)`
    text-align: center;
`;


const icon_pc = require('../../../../icon/pc.png');
const UploadDraggerBody = styled.div`
    height: 240px;
    width: 100%;
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
    text-align: center;
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
const IsPublic = styled.div`
`;

const ValidTime = styled.div`
    margin-bottom: 10px;
`;

const AllowDownloadTime = styled.div`
`;

const Description = styled.div`
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
        let selectFilePath = e.target.value.trim();
        console.log('path:' + selectFilePath);
        //发送选择文件事件，
        selectFile(selectFilePath);
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


    handleUpload(){
        let uploadFile = this.props.uploadProps;

    }
    render() {
        let {width, selectedFiles, showDatePicker, allowDownloadCountInputDisable, uploadOptions, uploading} = this.props.uploadProps;
        console.log('selectFiles: ' + selectedFiles);
        return (
            <UploadComponentBody style={{
                width: width,
            }}>
                <UploadLabel>上传</UploadLabel>
                <CenterGreyP>你还未登陆，点此 <Link to='#'>登陆上传</Link></CenterGreyP>
                <UploadDraggerBody>
                    <img src={icon_pc}/>
                    <UploadTipDeepLabel>支持文件拖拽上传</UploadTipDeepLabel>
                    <UploadInput type={'file'} onChange={this.handleFileSelect}/>
                    <ProgressBar>
                        <UploadFiles>
                            {selectedFiles.toString()}
                        </UploadFiles>
                        <Progress percent={50} status="active" width={50} strokeWidth={15}/>
                    </ProgressBar>

                    {/*</ProgressBar>*/}
                </UploadDraggerBody>
                <UploadSettingBody>
                    <UploadSettingText>上传设置</UploadSettingText>
                    <IsPublic>
                        <RadioGroup name={UploadParams.isShare} defaultValue={true}
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
                            <MyRadio value={24 * 60 * 60 * 1000}>一天</MyRadio>
                            <MyRadio value={24 * 60 * 60 * 1000 * 7}>一周</MyRadio>
                            <MyRadio value={24 * 60 * 60 * 1000 * 30}>30天</MyRadio>
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
                        <RadioGroup name={UploadParams.leftDownloadCount} defaultValue={-1}
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
                              onClick={() => {
                                  alert('click')
                              }}>上传</UploadButton>
            </UploadComponentBody>
        );
    }
}

UploadComponent.defaultProps = {
    width: 525
};

export default UploadComponent;