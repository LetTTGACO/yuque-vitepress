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
      catalog: true,
      frontMatter: {
        enable: true
      },
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
