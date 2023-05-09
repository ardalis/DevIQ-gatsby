module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/`;
  const configPath = themeOptions.configPath || `config`;
  const docsPath = themeOptions.docsPath || `docs`;
  const branch = themeOptions.branch || `main`;
  const baseDir = themeOptions.baseDir || ``;
  const { repositoryUrl, withMdx = false } = themeOptions;

  return {
    basePath,
    configPath,
    docsPath,
    baseDir,
    repositoryUrl,
    withMdx,
    branch,
  };
};
