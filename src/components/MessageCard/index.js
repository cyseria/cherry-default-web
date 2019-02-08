/**
 * @file
 * @author 陈蔓青（chenmanqing@baidu.com）
 */
import React, {Component} from 'react';
import {Button} from 'antd';
import './index.less';

const config = {
    'no-permission': {
        image: 'https://eux-public.bj.bcebos.com/2018/12/07/nopermission.png',
        message: '抱歉，你无权限访问该页面'
    },
    suspended: {
        image: 'https://eux-public.bj.bcebos.com/2018/12/07/suspended.png',
        message: '抱歉，你无权限访问该页面'
    },
    end: {
        image: 'https://eux-public.bj.bcebos.com/2018/12/07/end.png',
        message: '抱歉，你无权限访问该页面'
    },
    delete: {
        image: 'https://eux-public.bj.bcebos.com/2018/12/11/delete.png',
        message: '抱歉，你无权限访问该页面'
    },
    submit: {
        image: 'https://eux-public.bj.bcebos.com/2018/12/07/submit.png',
        title: '提交成功',
        message: '感谢你的参与'
    }
};
class MessageCard extends Component {
    handleBack = () => {
        this.props.onButtonClick();
    };
    render() {
        let {image, title, message, type} = this.props;
        if (config.hasOwnProperty(type)) {
            image = image || config[type].image;
            message = message || config[type].message;
            title = title || config[type].title;
        }
        return (
            <div className="content-wrap warn-message">
                <img src={image} width="280px" />
                <div className="message-text-wrap">
                    <span className="message-title">{!!title ? title + ',' : ''}</span>
                    <span className="message-desc">{message}</span>
                </div>
                {this.props.children}
            </div>
        );
    }
}
export default MessageCard;
