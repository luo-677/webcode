# mac安装nvm管理工具

## 如果之前通过官网下载node进行安装，需要先进行卸载：
sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}

## nvm安装
nvm git地址：https://github.com/nvm-sh/nvm/blob/master/README.md
下载方式：
1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
2. wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

## nvm安装纠错
根据mac操作系统版本的不同，需要根据文档中的排错方法进行自行纠错：Troubleshooting on macOS
记录：
1. Create one with touch ~/.zshrc and run the install script again
2. source .zshrc

## nvm安装换源
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node

## nvm操作
https://www.jianshu.com/p/622ad36ee020
1. nvm ls-remote [--lts]
2. nvm install node.version // M1需要等待很久
3. node -v
4. npm -v