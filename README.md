# 14-react

首先你可以安装一下yarn，并使用taobao registry
```
npm install -g yarn
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```
```
cnpm i -g create-react-app
create-react-app my-app
cd .\my-app\
create-react-app --version
yarn add react-router-dom axios less-loader
yarn start

yarn eject //注意不可逆
yarn add antd
yarn add less@^2.7.3  babel-plugin-import jsonp --dev

```
## webpak配置

1. webpack.config.dev.js

- 147行加入
```
plugins: [
  ['import', [{ libraryName: 'antd', style: true }]],  // import less
],
```

- 157行加入配置
```
{
  test: /\.less$/,
  use: [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
      },
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebookincubator/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          autoprefixer({
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9', // React doesn't support IE8 anyway
            ],
            flexbox: 'no-2009',
          }),
        ],
      },
    },
    {
      loader:require.resolve('less-loader'),
      options: {
        modules: false,
        modifyVars: {
            "@primary-color": "#f9c700"
        }
      }
    }
  ],
},
```

2. webpack.config.prod.js

- 152行加入

```
plugins: [
    ['import', [{ libraryName: 'antd', style: true }]],  // import less
],
```
- 152行加入

```
{
  test: /\.less$/,
  use: [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
      },
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebookincubator/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          autoprefixer({
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9', // React doesn't support IE8 anyway
            ],
            flexbox: 'no-2009',
          }),
        ],
      },
    },
    {
      loader:require.resolve('less-loader')
    }
  ],
},
```