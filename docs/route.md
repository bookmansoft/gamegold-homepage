# 主页页面制作规范

## 项目安装

```bash
git clone https://github.com/bookmansoft/gamegold-homepage
npm i
npm start
```

## 项目编译
```bash
npm run build
```

## 页面组织管理

### 在线编辑主页面

1. 访问如下网址，在线编辑页面内容
https://motion.ant.design/edit/#t%3Dnav_0_0%2Ccontent_0_0%2Ccontent_2_0%2Ccontent_3_0%2Ccontent_4_0%2Cfooter_0_0

2. 点击"生成代码"，将下载的文件拷贝到项目的 src/routes 目录下，以单一目录形式存放如 src/routes/Home。

### 制作辅助页面

制作主页面之外的其它辅助页面，可以采用传统的页面布局独立制作，然后放置于相应目录下保存。

### 导航的实现方式

1. 利用内置控件，在活动页面间跳转
```js
const Link = ScrollAnim.Link;
const Item = Menu.Item;
const path = 'content_1_0';

return <Link to={path}>导航</Link>;
```

2. 利用A链接跳转
```html
<a href="http://baidu.com">Bookmansoft. All Rights Reserved</a>
```

3. 程序中跳转
```js
//无条件跳转
window.location.href = 'http://www.gamegold.xin';
```

```jsx
//利用 setState 修改状态字段，然后在 render 函数开头检测并相应跳转
<Button type="ghost" key="button" id={`${props.id}-button`}  onClick={()=>{
    this.setState({btn: true});
}}>

render() {
    if(this.state.btn) {
        window.location.href = 'http://www.gamegold.xin';
    }
}
```

4. 其它
dva对 react-router 包装的太深，当前框架下尝试进行其它形式的路由跳转暂时未能成功
