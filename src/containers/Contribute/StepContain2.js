/**
 * @file 创建 - 步骤2: 检查
 * @author: Cyseria
 */

import React, {Component} from 'react';
import {Form, Input, Button, Select} from 'antd';

const Item = Form.Item;
const TextArea = Input.TextArea;
const Option = Select.Option;

const filedSet = [
    {
        key: 'url',
        name: 'Repo 地址',
        type: 'input',
        disabled: true,
        initialValue: 'node',
        rules: [{required: true}]
    },
    {
        key: 'author',
        name: '作者',
        type: 'input',
        disabled: true,
        initialValue: 'cyseria',
        rules: [{required: true}]
    },
    {
        key: 'name',
        name: '脚手架名称',
        rules: [{required: true, message: '脚手架名称一定要填的喔～'}],
        type: 'input'
    },
    {
        key: 'description',
        name: '描述',
        rules: [],
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
    }
];

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
    }
    render() {
        const {getFieldDecorator} = this.props.form;
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
                            下一步
                        </Button>
                    </Item>
                </Form>
            </div>
        );
    }
}
function getFiledSetRender(item) {
    if (!!item.render) {
        return item.render(item);
    } else if (item.type === 'input') {
        return <Input placeholder={item.name || ''} disabled={item.disabled || false} />;
    }
}
export default Form.create({name: 'check-form'})(StepContain2Form);
