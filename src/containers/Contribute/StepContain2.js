/**
 * @file 创建 - 步骤2: 检查
 * @author: Cyseria
 */

import React, {Component} from 'react';
import {Form, Input, Button, Select, Upload, Icon} from 'antd';

const Item = Form.Item;
const TextArea = Input.TextArea;

class StepContain2Form extends Component {
    submit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.onNext();
            }
        });
    };
    prev = () => {
        this.props.onPrev();
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        const filedSet = getFiledSet(this.props);
        return (
            <div className="step__form-container step__form2">
                <Form className="check-form">
                    {filedSet.map((item, index) => {
                        const renderElement = getFiledSetRender(item);
                        return (
                            <Item key={item.key} label={item.name}>
                                {getFieldDecorator(item.key, {
                                    rules: item.rules || [],
                                    initialValue: item.initialValue
                                })(renderElement)}
                            </Item>
                        );
                    })}
                    <Item>
                        <Button size="large" onClick={this.prev} style={{marginRight: 20}}>
                            上一步
                        </Button>
                        <Button size="large" type="primary" onClick={this.submit}>
                            提交
                        </Button>
                    </Item>
                </Form>
            </div>
        );
    }
}

function getFiledSet(props) {
    const repo = props.repo;
    return [
        {
            key: 'url',
            name: 'Repo 地址',
            type: 'input',
            disabled: true,
            initialValue: repo.url,
            rules: [{required: true}]
        },
        {
            key: 'author',
            name: '作者',
            type: 'input',
            disabled: true,
            initialValue: repo.owner,
            rules: [{required: true}]
        },
        {
            key: 'name',
            name: '脚手架名称',
            initialValue: repo.name,
            rules: [{required: true, message: '脚手架名称一定要填的喔～'}],
            type: 'input'
        },
        {
            key: 'description',
            name: '描述',
            rules: [{max: 200}],
            render: item => {
                return <TextArea placeholder="描述" autosize />;
            }
        },
        {
            key: 'tags',
            name: 'Tags',
            rules: [],
            render: item => {
                return <Select mode="tags" tokenSeparators={[',']} />;
            }
        },
        {
            key: 'cover',
            name: '封面图(暂未实现)',
            rules: [],
            render: item => {
                return (
                    <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                            <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">点击或拖拽图片文件进行上传</p>
                        <p className="ant-upload-hint">支持 JPG/JPEG/PNG 格式</p>
                    </Upload.Dragger>
                );
            }
        }
    ];
}
function getFiledSetRender(item) {
    if (!!item.render) {
        return item.render(item);
    } else if (item.type === 'input') {
        return <Input placeholder={item.name || ''} disabled={item.disabled || false} />;
    }
}
export default Form.create({name: 'check-form'})(StepContain2Form);
