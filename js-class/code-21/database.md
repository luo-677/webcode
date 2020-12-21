# 数据库

### 什么是数据库？
存储数据的仓库   
硬盘 光盘 U盘 网盘 磁带 excel ...
存储数据的软件(提供了存储数据的服务)
orcale sqlserver mysql mongodb db2 ...

### 数据库软件
数据库中存储的数据是什么样的？

数据库中存储的数据 是结构化(格式化)数据

你好，我是小花，今年18岁，毕业于浙江大学 计算机软件工程专业 ，是一名web前端工程师。

关系型数据库(是以数据表为基本结构存储数据的)


           用户信息表
编号|姓名|年龄|毕业学校|专业|职业
---|---|---|---|---|---
1|小花|18|浙江大学|软件工程|web前端工程师
2|张三|20|哈佛|法律|律师
3|里斯|25|清华|佛学|和尚

            订单表
订单编号|用户编号|创建时间
---|---|---|---
1000324|1|1543243324504
1000326|1|1543263322456

> 关系型数据库数据是以表的形式呈现的，表格之间的数据可以通过一些字段产生联系

所有的关系型数据库 都支持 数据库查询语言 SQL



非关系型数据库(是以文档的方式存储数据的)
mongodb

非关系型数据库存储的数据是以文档作为基本结构的
每一条数据是一个独立的文档
多个文档组成一个集合
每一条数据是独立存在的

```
{
    _id:123450123,
    用户名:'小花',
    年龄:18,
    毕业学校:'浙江大学',
    专业:'软件工程',
    职业:'web前端工程师',
    订单:[1000324,1000326]
}
```


### Mysql
MySQL是一个开源的 关系型数据库

1. 开源(免费)
2. 稳定
3. 跨平台(OS)  Windows Unix Linux OSX
4. 安全

SQL语句 是数据库语言
用于操作 关系型数据库
SQL语句不区分大小写

```SQL
# 创建数据表
# 需要为每一个表设置一个主键(PRIMARY KEY) 主键的数据类型是 INT 类型
# 主键在当前表中 是唯一的 自动增长

CREATE TABLE `h5_2011`.`users` ( 
    `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '用户id' , 
    `username` VARCHAR(255) NOT NULL COMMENT '用户名' , 
    `password` VARCHAR(255) NOT NULL COMMENT '密码' , 
    `email` VARCHAR(255) NOT NULL COMMENT '邮箱' , 
    `phone` BIGINT(20) NOT NULL COMMENT '手机' , 
    `address` VARCHAR(255) NOT NULL COMMENT '地址' , 
    `sex` BOOLEAN NOT NULL COMMENT '性别' , 
    PRIMARY KEY (`id`)
) ENGINE = MyISAM;

```


```SQL
# 插入数据

INSERT INTO `users` 
(`id`, `username`, `password`, `email`, `phone`, `address`, `sex`) 
VALUES 
('100001', 'admin', 'a123456', 'root@rootbk.cn', '13666666666', '浙江省杭州市江干区九堡镇旺田商务楼A座4楼', '1');


# 语法
insert into `table_name` (`字段`,`字段`,`字段`,`字段`)
values (值,值,值,值)
```


```SQL
# 查询数据
# * 表示所有字段

select * from tableName

# 选择字段查询
select 字段,字段 from tableName

# 高级查询
select * from tableName where `username`='zhangsan'      # 条件查找
select * from tableName where 条件1 and 条件2            # 多条件 与
select * from tableName where 条件1 or  条件2            # 多条件 或
 
```


```SQL
# 修改语句
update tableName set 字段=值 where 条件
update tableName set 字段=值,字段=值 where 条件
```