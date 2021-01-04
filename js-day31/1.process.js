console.log(process.argv);
let argv = process.argv.slice(2);
console.log(argv);
switch (argv[0]) {
    case 'install':
        console.log(`正在安装${argv[1]}`);
        break;
}