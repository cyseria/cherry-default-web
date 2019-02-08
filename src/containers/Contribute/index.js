/**
 * @file
 * @author Cyseria
 */

import React, {Component} from 'react';
import './index.less';
import {Steps, message} from 'antd';
import {githubUrlParse} from '../../utils/github-parse';
import StepContain1 from './StepContain1';
import StepContain2 from './StepContain2';
import StepContain3 from './StepContain3';
import {createProject} from '../../server/index';

const Step = Steps.Step;

export default class Contribute extends Component {
    state = {
        current: 0,
        repoInfo: {}
    };
    next = () => {
        const current = this.state.current + 1;
        this.setState({current});
    };

    prev = () => {
        const current = this.state.current - 1;
        this.setState({current});
    };

    submitStep1 = url => {
        const repoInfo = githubUrlParse(url);
        if (!repoInfo) {
            message.error('提交地址有误，请检查后再试试～');
            return;
        }
        this.setState({repoInfo});
        this.next();
    };

    submitStep2 = form => {
        // this.setState({url});
        console.log('submit data', form);
        createProject(form)
            .then(res => {
                this.next();
            })
            .catch(err => {
                message.error(err);
            });
    };

    render() {
        const {current} = this.state;
        return (
            <div className="main-wrap">
                <div className="container">
                    <h2>提交一个脚手架</h2>
                    <Steps current={current} className="steps-head">
                        <Step title="提交" />
                        <Step title="核对" />
                        <Step title="完成" />
                    </Steps>
                    <div className="steps-content">
                        {current === 0 && <StepContain1 onNext={this.submitStep1} />}
                        {current === 1 && (
                            <StepContain2
                                // url={this.state.url}
                                repo={this.state.repoInfo}
                                onNext={this.submitStep2}
                                onPrev={this.prev}
                            />
                        )}
                        {current === 2 && <StepContain3 />}
                    </div>
                </div>
            </div>
        );
    }
}
