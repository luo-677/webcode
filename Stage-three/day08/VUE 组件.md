# VUE 组件
## VUE组件的定义
1. 在 html 页面中指定容器
    ```html
    <div id="app">
        <!-- 标签化使用组件，在vue的节点中以标签的方式引入 -->
        <!-- 标签名只有一个单词时，首字母大写，多个单词时使用匈牙利命名法 -->
        <Hello></Hello>
    </div>
    <!-- 在app外书写template标签  template标签是由vue提供的 -->
    <!-- id 在声明时就使用匈牙利命名法 -->
    <template id="hello">
        <!-- template的儿子是独生子(硬性要求)  根元素唯一 -->
        <div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    </template>
    ```
2. 在 js 中选择组件的作用范围
    ```javascript
    const helloOption = Vue.extend({
        template: '#hello',
    })
    ```
## VUE组件的注册
1. 全局注册
    ```javascript
    // 注册要点：组件的注册一定要写在根节点的上面，不然浏览器在进行加载时会出现找不到组件的报错
    // 全局注册  Vue.component()
    // Vue.component(组件名(大驼峰形式命名),组件的选项(options))
    Vue.component('Hello',helloOption)
    // 组件名在写成标签时要进行修改 hello-conp
    Vue.component('HelloConp',helloOption)
    // 简写方式
    Vue.component('Hello',{template: '#hello'})
    // root根组件，其他的组件必须放到root组件下
    new Vue({
        el: '#app'
    })
    ```
2. 局部注册
    ```javascript
    //1. 定义
    const wrapperOption = Vue.extend({
        template: '#wrapper'
    })
    const helloOption = Vue.extend({
        template: '#hello',
        components: {
            Wrapper: wrapperOption
        }
    })
    new Vue({
        el: '#app',
        //2. 注册
        components: {
            // 组件名： 组件选项
            Hello: helloOptions
        }
    })
    ```
## VUE组件的使用
1. 使用方式
    ```html
    <div id="app">
        这是根节点
        <!-- 以双标签的形式在容器内部进行添加 -->
        <!-- 在html文件中写双标签,在vue文件中单双皆可 -->
        <Hello></Hello>
    </div>
    <template id="hello">
        <div>
            这是hello组件
            <World></World>
        </div>
    </template>
    <template id="world">
        <div>
            这是world组件
        </div>
    </template>
    ```
2. 使用规则<br>
   在html中许多标签是规定要放在一起使用，比如 table / tr
    ```html
    <div id="app">
        <table>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr is="Hello"></tr>
        </table>
    </div>
    <template id="hello">
        <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
        </tr>
    </template>
    ```