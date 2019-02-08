### 一些错误提示页面

#### 基础使用

##### 无权限

```jsx
<MessageCard type="no-permission" />
```

##### 404

```jsx
<MessageCard type="suspended" />
```

##### 已结束

```jsx
<MessageCard type="end" />
```

##### 暂停中

```jsx
<MessageCard type="delete" />
```

##### 成功

```jsx
<MessageCard type="submit" />
```

#### 自定义

##### 自定义图片或文案

```jsx
<MessageCard
    title="自定义标题"
    message="自定义乱七八糟的描述"
    image="https://eux-public.bj.bcebos.com/2018/12/12/29a5b2a83897548deb72ffb54.png"
/>
```

-   图片可以为 `cdn` 链接，也可以使用 `import xxx from xxx` 的方式引入

##### 自定义底部按钮

```jsx
const {Button} = require('antd');
<MessageCard type="submit">
    <div>
        <Button type="primary" style={{marginRight: 10}}>
            返回首页
        </Button>
        <Button>我知道了</Button>
    </div>
</MessageCard>;
```

#### API

**title, message, image 等优先级高于 type 默认**

|属性|说明|类型|默认值|
|---|---|---|---|
|type|页面基本类型，目前有 `no-permission`, `suspended`, `end`, `delete`, `submit` 五种 |string|--|
|title|大标题|string|--|
|message|详细内容|string|--|
|image|图片资源，可以为 `cdn` 链接，也可以使用 `import xxx from xxx` 的方式引入|--|--|
