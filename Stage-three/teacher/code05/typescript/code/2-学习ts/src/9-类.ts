/* 
    * 原生js是没有类的，当然ts也没有   
    * 伪类 -- 构造函数
    
    * 类的定义
        class People {
            构造函数
            construct (options) {
                this.name = options.name
            }

            实例成员 -  public 可以不写
                public a = 1  实例属性
                b = 2         实例属性
                fn () {}      实例方法
            类成员   -  static 
                static n = 10         静态属性
                static handler () {}  静态方法

            私有成员  - private 
                private m = 100     私有属性
                private func () {}  私有方法
        }
    * 类的实例化
        const people = new People({name: 'lakers'})

*/