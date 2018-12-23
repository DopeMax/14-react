# 共享单车项目练习

## 1 声明式实现
编程时实现和声明式实现的区别，where,what,how
- 编程时实现：需要以具体代码表达在哪里，做什么，如何实现。比如传统的基于dom的实现。
- 声明式实现：只需要声明在哪里做什么，而无需关心如何实现。比如只需要定义个变量，变量值怎么绑定到组件中的，是框架去做的。

## 2 脚手架和yarn工具使用
```sh

npm install -g create-react-app
create-react-app my-app
cd my-app
npm start

yarn add react-router-dom axios less-loader
yarn remove react-router-dom
yarn start


yarn eject //注意不可逆
yarn add antd
yarn add less@^2.7.3  babel-plugin-import jsonp --dev

```

## 3 react的生命周期
- getDefaultProps：初始化props属性，来自于父组件或其他组件传过来的东西。
- getInitialState：state变量。
- componentWillMount：组件加载之前。用得较多。
- render：渲染核心。
- componentDidMount：组件插入完以后调用。
- componentWillReceiveProps：来自父组件属性传递时调用的方法。
- shouldComponentUpdate：组件的更新。调用了setState方法就会调用他。
- componentWillUpdate：组件要更新之前。
- componentDidUpdate：组件要更新之后。
- componentWillUnmount：组件要更新之后。

![image](front-end\14-react\03-antd-learning\images\react生命周期.jpg)

this传递的
```
class Square extends React.Component {
    handleAdd=()=>{
        //这里this是当前组件实例
        this.setState({count:this.state.count+1})
    }
    handleClick(){
        //这里this就不是当前组件实例,需要bind(this)传递后才会变成组件实例
        this.setState({count:this.state.count+1})
    }
    render(){
        let style={padding:50}
        return <div style={style}>
            <p>React生命周期介绍</p>
            <button onClick={this.handleAdd}>点击一下</button>
            <button onClick={this.handleClick.bind(this)}>点击一下</button>
            <p>{this.state.count}</p>
        </div>

    }
}
```

## 4 项目主页工程搭建
1. 基础插件安装，less文件加载配置
2. 项目主页结构开发
3. 菜单组件开发
4. 头部组件开发
5. 底部组件开发