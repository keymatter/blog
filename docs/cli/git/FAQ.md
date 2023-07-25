---
title: 问题
description: Git问题记录
category: git
tags:
  - FAQ
---

# FAQ

## .gitignore 添加忽略文件不生效

- 原因：`.gitignore` 只能忽略那些原来没有被追踪的文件，如果某些文件已经被纳入了版本管理中，则修改 `.gitignore` 是无效的。

- 解决：把本地缓存删除（改变成未被追踪状态）

```shell
# 删除文件
git rm .env.development --cached
# 删除文件夹
git rm dist --cached -r
```

- `--cached`：只从缓存区中删除指定的文件或目录，而不删除本地文件。如果不加这个参数，则会从缓存区和本地文件系统中都删除指定的文件或目录。

- `-r`： 进行递归删除，用于删除文件夹。
