## Git 提交规范

### Git 拉取远程仓库代码
``` js
  // 拉取远程仓库代码
  git clone 项目地址
```

###  Git 提交到远程仓库
``` js
  // 拉取远程仓库代码
  git pull
  // 代码提交
  git add .
  /*
   * @description { . } 为修改的文件全部提交
   * @description { test.vue } 为只提交test.vue 文件
   */
  git commit -m 'feat / fix: 例：本次提交信息'
  /*
   * commit 简要说明本次提交的信息
   * { feat } 新功能
   * { fix }  bug修复
   * { docs } 文档提交
   * { style } 代码格式（不影响代码运行，对CSS样式修改进行的提交）
   * { refactor } 重构功能
   * { test } 提交代码测试
   * { chore } 构建或辅助工具变更
   * { misc } 未归类或是不知道归类的提交
   */
  // 代码推送到远端仓库 dev 为当前需要提交的分支
  git push origin dev  / git push
```
### Git 版本回滚
``` js
  // 回退版本 => 不要随意操作 有需要时进行操作
  // 查看当前提交的信息 找到回退版本的commit的hash值 
  git log / git reflog 
  // 版本回滚
  git reset --hard hash值

```
### Git 解决冲突
### Git 提交信息模板