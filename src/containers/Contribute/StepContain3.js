/**
 * @file 创建 - 步骤3: success
 * @author: Cyseria
 */

import React, {Component} from 'react';
import MessageCard from '../../components/MessageCard/index';
const {Button} = require('antd');
export default class StepContain3 extends Component {
    render() {
        return (
            <MessageCard type="submit" message="感谢你的贡献">
                <Button type="primary">返回首页</Button>
            </MessageCard>
        );
    }
}
