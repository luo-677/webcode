# 安装node环境(windows)
## 1. 下载 nvm for windows
下载地址：https://github.com/coreybutler/nvm-windows/releases/tag/1.1.7
下载安装包：nvm-setup.zip
下载完成后下一步下一步安装即可，可以自行指定安装路径！
验证：
	1. 打开windows控制台，最好使用管理员权限
	2. 输入 nvm version，如果有版本号进行输出，则安装成功
	3. 接上条，如果没有版本号，则修改系统环境变量
nvm常用安装命令：
	1. nvm version 查看当前nvm版本号
	2. nvm install latest 安装最新的node版本
	3. nvm install 版本号 安装指定的node版本
	4. nvm uninstall 版本号 卸载指定的node版本
	5. nvm list 查看当前系统安装的所有node版本
	6. nvm use 版本号 选择指定的node版本进行使用
## 2. 安装node
安装步骤如下：
    1. 在控制台输入 nvm install latest，系统自动安装最新的node
    2. 接上条，系统默认安装的都是抢先版，稳定版需要自行进行指定
    3. 在控制台输入 nvm install 14.15.3，安装稳定版(可去官网进行查看对应的版本号)
    4. 接上条，node官网 https://nodejs.org/
    5. 安装完成后，控制台输入 node -v，即可查看node安装版本
    6. 使用 nvm list 查看所有node版本，使用 nvm use 版本号 进行指定
## 3. 安装npm
在安装node的同时，nvm会将当前node版本对应的npm版本进行同步安装，不需要进行其他的额外操作，在切换node版本时，对应的npm版本也会相应进行改变。
使用 npm -v 可查看当前npm的安装版本
注：
	1. 如果控制台提示升级npm版本，则根据它提示的语句进行操作即可
	2. 可能会遇到升级报错，提示文件已存在，在系统提示的安装命令后面加上 --force 即可
	3. 接上条，如 npm install -g npm@7.3.0 --force