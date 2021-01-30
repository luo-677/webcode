# VUE知识点总结：
## day01:
- 引入vue.js:
    1. cdn 下载
    2. 下载 vue.js 源文件
    3. npm 安装 vue，引入 vue.js (就离谱...)
- vue 的兼容性:
    1. Vue中使用了ie6-8不兼容的es5方法：Object . defineProperty
- vue 的使用:
    1. 引入 vue.js 文件
    2. 选择一个 DOM 作为 vue 的作用范围
    3. 使用 vue 的构造函数将实例挂载到 DOM 上
    4. 通过 mustache 语法来使用数据
- mustache 语法(双括号表达式 / 插值表达式):
    1. string {{ str }}
    2. number {{ num }}
    3. undefined 不输出任何结果
    4. null 不输出任何结果
    5. boolean {{ bool }}
    6. arr {{ arr[0] }}
    7. obj {{ obj.name }}
    8. js {{ 可直接写js表达式 }}
- vue指令:
    1. v-text, v-html 数据展示指令(v-html 可以识别标签)
    2. v-show 控制 display属性 ( true -- block&nbsp;&nbsp;&nbsp;&nbsp;false -- none )
    3. v-if / v-else-if / v-else 分路控制
    4. v-if 和 v-show 的区别: v-show 用于频繁切换，v-if 用于创建和销毁 DOM 节点
    5. v-for="(item index) in arr" 循环指令 number / string 也可以使用 v-for 指令
    6. v-on:事件名="函数名" 简写方式 @事件名="函数名"
    7. 当事件函数中需要用到事件参数时，如果牵涉到多个参数，可以使用 ($event, a, b...)
- vue修饰符: 
    1. 事件修饰符: .stop .self .prevent .once
    2. 键盘修饰符: .13 .enter
    3. 系统修饰符: @click.ctrl @click.ctrl.shift
- vue数据单向绑定:
    1. ( v-bind:属性 = "属性值" ) 简写 ( :属性 = "属性值" )
    2. :class 类名绑定 ( 对象形式 数组形式 )
    3. 行内式写法1 :style="{ width: '100px', height: '100px', background: color }"
    4. 行内式写法2 :style="[{ width: '100px', height: '100px' }, { background: color }]" 建议使用方法二进行书写，直接进行代码替换
- vue数据双向绑定:
    1. v-model:变量名 只要是表单数据，直接使用双向绑定
    2. 为了防止列表在渲染时出现不响应的情况，需加上 :key="item.id"
    3. 简单数据格式不响应，如数组：length属性不响应
        - 清空数组：this.arr.splice(0)
        - 使用下标进行指定数据修改：this.$set(this.arr,'0','a')
- vue - computed:
    1. 单向计算：
        ```javascript
        // 需要进行格式化的数据
        computed: {
            reverseMsg(){
                return this.msg.xxx...
            }
        }
        // 可直接使用函数的名称
        {{ reverseMsg }}
        ```
    2. 双向计算：
        ```javascript
        computed: {
            fullName: {
                // 用于赋值
                get(){
                    return this.firstName + this.lastName
                },
                // 用于反向修改值
                set(val){
                    this.firstName = val.slice(0,1);
                    this.lastName = val.slice(1);
                }
            }
        }
        ```
- vue - watch 浅监听:
    ```javascript
    let app = new Vue({
        el: "#app",
        data: {
            count: 1,
        },
        methods: {
            addCount() {
                this.count++;
            }
        },
        watch: {
            // 函数名为监听的变量名
            count() {
                // 内部的函数会自动触发
                console.log('草');
            }
        }
    })
    ```
- vue - watch 深监听:
    ```javascript
    let app = new Vue({
        el: "#app",
        data: {
            count: {
                name: 1,
            }
        },
        methods: {
            addCount() {
                this.count.name++;
            }
        },
        watch: {
            // 使用第一种方式比较方便
             'count.name' () {
                 console.log('草');
             }
            // count: {
            //     // 开启深度监听
            //     deep: true,
            //     // handler 固定写法
            //     handler(){
            //         console.log('草');
            //     }
            // }
        }
    })
    ```
- vue - watch 同时触发多个事件:
    ```javascript
    let app = new Vue({
        el: "#app",
        data: {
            count: {
                name: 1,
            }
        },
        methods: {
            addCount() {
                this.count.name++;
            },
            handler1() {
                xxx...
            }
        },
        watch: {
            // 使用数组的方式写入多个函数即可
            count: [
                // 可以使用函数名直接引用methods中的函数
                'handler1',
                function handler2(){
                    xxx...
                },
                function handler3(){
                    xxx...
                },
            ]
        }
    })
    ```
- vue - watch 中的参数:
    ```javascript
    watch: {
        // 函数中自带两个参数，新值 和 旧值
        count (newValue,oldValue) {
            console.log('新值',newValue)
            console.log('旧值',oldValue)
        }
    }
    ```