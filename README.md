# 本项目是使用react-native编写的小说App

### TodoLists
1. 研究如何在项目中使用阿里的iconfont库
2. 看完react-navigation和FlatList 并尝试使用！

### 项目推进记录

#### 2018-07-27 16:12:40
>1. 利用第三方库 [___react-native-vector-icons___](https://github.com/oblador/react-native-vector-icons) 创建了一个Icon组件! 使用方法可以参考下面的链接：[在 React Native 中快捷优雅使用 iconfont - 自定义字体文件](https://www.jianshu.com/p/325d4b9955d3)

#### 2018-07-27 22:49:40
>1. 新增了首页的搜索组件 
>2. 解决github push总是卡住的问题 
```
解决方案： 
添加sendpack.sideband属性并置为false就解决了。
全局的：git config --global sendpack.sideband false
仓库的：git config --local sendpack.sideband false
````
### 项目结构变化记录
#### 2018-07-27 16:12:40
1. /config
> 用来放置全局的配置文件
2. /app
> 放置项目主文件 
3. /common
> 放置项目的公共文件