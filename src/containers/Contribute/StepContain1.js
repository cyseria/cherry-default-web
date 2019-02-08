/**
 * @file 创建 - 步骤1: 提交 repo 地址
 * @author: Cyseria
 */

import React, {Component} from 'react';
import {Input, Button} from 'antd';

export default class StepContain1 extends Component {
    state = {
        url: ''
    };
    onChange = e => {
        this.setState({url: e.target.value});
    };
    submit = () => {
        this.props.onNext(this.state.url);
    };
    render() {
        return (
            <div className="step__form-container">
                <Input
                    size="large"
                    value={this.state.url}
                    onChange={this.onChange}
                    placeholder="请填写脚手架的 github 地址或 iCode 地址，以 http 开头"
                />
                <div className="step__button-submit">
                    <Button size="large" type="primary" onClick={this.submit}>
                        下一步
                    </Button>
                </div>
            </div>
        );
    }
}
