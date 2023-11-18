
# Elog配置详解
参考 [Elog 文档](https://elog.1874.cool/)，本博客的 Elog 的配置如下：
```javascript
module.exports = {
  write: {
    platform: 'yuque',
    yuque: {
      token: process.env.YUQUE_TOKEN,
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
      onlyPublic: false,
      onlyPublished: true,
    }
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './docs/docs',
      filename: 'title',
      format: 'markdown',
      catalog: true
    }
  },
  image: {
    enable: true,
    platform: 'local',
    local: {
      outputDir: './docs/images',
      pathFollowDoc: true,
    }
  }
}

```

### 语雀配置
```javascript
yuque: {
  token: process.env.YUQUE_TOKEN,
  login: process.env.YUQUE_LOGIN,
  repo: process.env.YUQUE_REPO,
  onlyPublic: false,
  onlyPublished: true,
}
```

- `token`为语雀Token，可从[此处](https://elog.1874.cool/notion/gvnxobqogetukays#token)获取
- `login`为语雀路径，可从[此处](https://elog.1874.cool/notion/gvnxobqogetukays#login)获取
- `repo`为语雀仓库短名称，可从[此处](https://elog.1874.cool/notion/gvnxobqogetukays#repo)获取
- `onlyPublic`表示是否只下载互联网公开文档
- `onlyPublished`表示是否只下载已发布文档

### 本地配置
```javascript
local: {
  outputDir: './docs/docs',
  filename: 'title',
  format: 'markdown',
  catalog: true
}
```

- `outputDir`表示文档的存放位置为项目根目录下的`docs/docs`文件夹中
- `filename`表示文档将以数据库的 `title` 字段命名，也就是文档名
- `format`表示文档将以 markdown 的形式保存
- `catalog`表示文档将按照语雀知识库的现有目录存放

### 图床配置
```javascript
local: {
  outputDir: './docs/images',
  pathFollowDoc: true,
}
```

- `outputDir`表示图片的存放位置为项目根目录下的`docs/images`文件夹中
- `pathFollowDoc`表示图片路径会相对文档位置自动变化

## 更多 Elog 配置详情，请阅读 [Elog 文档](https://elog.1874.cool/)
