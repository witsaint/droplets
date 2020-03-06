const getComponents = () => {
  const componentsFile = require.context('../components', true, /\.vue$/);
  const comsModuleKeys = componentsFile.keys();
  console.info('comsModuleKeys', comsModuleKeys[0]);
  console.info('comsModuleKeys', componentsFile(comsModuleKeys[0]));
  const globalComponents = {};
  // eslint-disable-next-line array-callback-return
  comsModuleKeys.map((key) => {
    globalComponents[key] = componentsFile(key);
  });
  window.globalComponents = globalComponents;
};

export default getComponents;
