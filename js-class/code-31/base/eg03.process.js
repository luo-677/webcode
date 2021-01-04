// process 在nodejs中 是一个全局对象

// 所有的终端命令是什么？

// 所有的终端命令都是 应用程序
// 应用名 参数1 参数2 参数3 ...
// node eg03.process.js
// cd day31
// nvm install 14.15.3


// console.log(process.argv);

let argv = process.argv.slice(2);

switch (argv[0]) {
    case 'init':
        console.log('项目正在初始化');
        break;
    case 'install':
        console.log(`正在安装${argv[1]}`);
        break;
    case 'uninstall':
        console.log(`正在卸载${argv[1]}`);
        break;
    case '--help':
        console.log(`打印帮助信息`);
        break;
    default:
        console.log('参数错误，查询帮助输入 --help');
}