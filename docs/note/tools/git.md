#git

## 安装与配置
第一次运行时，安装后进行用户名与邮箱的配置
```buildoutcfg
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```
`git init`将一个目录初始化为一个git repo

`git add <file>` 添加文件

`git commit -m <message>`将文件提交到仓库


## 关于版本退回的知识：
```
git status  查看各个文件的状态是否更新
git diff    查看修改的变化；
git log     查看日志，按照从最近到以前是顺序排列
git log --pretty=oneline：查看日志且只显示版本号的版本；
git reset --hard HEAD^/HEAD^^ 回退上一个版本/回退上上个版本 ^个表示回退n个以前的版本
git reset --hard commit id 回退到指定commit id的版本；
git reflog 可以查看所有历史变化日志；

回退远程分支
git reset --hard commit id 本地分支回退
git push -f origin 分支名    强制推送
```

## 工作区和暂存区：
工作区：就是本文件夹

版本库：.git文件夹

暂存区：.git文件夹里面的stage

## 分支管理
```
创建方法1：git checkout -b 新分支名
创建方法2：git branch 新分支名  然后 git checkout 该新分支名
git branch 显示本地所有的分支
git checkout 分支名 //切换分支
git merge 分支名 //将该分支合并到当前分支
git branch -d 分支名 //删除分支
git branch -a 显示所有分支，包括远程分支
git remote -v 显示远程分支
git remote add upstream http://..... 添加上游项目
git pull upstream 分支名 拉取上游分支，更新本地项目
拉取远程分支并创建本地分支
    git checkout -b 本地分支名x origin/远程分支名x .    本地新建分支x，并自动切换到该本地分支x。
    git fetch origin 远程分支名x:本地分支名x.         本地新建分支x，但是不会自动切换到该本地分支x，需要手动checkout
```