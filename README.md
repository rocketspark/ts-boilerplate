 <div>
  <h2>Typescript Library Boilerplate Basic</h2>
  <blockquote>Minimal Library Starter Kit for your Typescript projects</blockquote>
 
 <a href="https://www.npmjs.com/package/@hodgef/ts-library-boilerplate-basic"><img src="https://badgen.net/npm/v/@hodgef/ts-library-boilerplate-basic?color=blue" alt="npm version"></a> <a href="https://github.com/hodgef/ts-library-boilerplate"><img src="https://img.shields.io/github/last-commit/rocketspark/ts-boilerplate" alt="latest commit"></a> <a href="https://github.com/rocketspark/ts-boilerplate/actions"><img alt="Build Status" src="https://github.com/rocketspark/ts-boilerplate/workflows/Build/badge.svg?color=green" /></a> <a href="https://github.com/rocketspark/ts-boilerplate/actions"> <img alt="Publish Status" src="https://github.com/rocketspark/ts-boilerplate/workflows/Publish/badge.svg?color=green" /></a>


</div>

## ⭐️ Features

- Webpack 5
- Babel 7
- vanilla-extract stylesheets
- Hot reloading (`npm start`)
- Automatic Types file generation (index.d.ts)
- UMD exports, so your library works everywhere.
- Jest unit testing
- Customizable file headers for your build [(Example 1)](https://github.com/hodgef/ts-library-boilerplate-basic/blob/master/build/index.js) [(Example2)](https://github.com/hodgef/ts-library-boilerplate-basic/blob/master/build/css/index.css)
- Daily [dependabot](https://dependabot.com) dependency updates

## 📦 Getting Started

```
git clone https://github.com/rocketspark/ts-boilerplate.git myLibrary
npm install
```

## 💎 Customization

> Before shipping, make sure to:

1. Edit `LICENSE` file
2. Edit `package.json` information (These will be used to generate the headers for your built files)
3. Edit `library: "MyLibrary"` with your library's export name in `./webpack.config.js`

## 🚀 Deployment

1. `npm publish`
2. Your users can include your library as usual

### npm

```
import MyLibrary from 'my-library';
const libraryInstance = new MyLibrary();
...
```

### self-host/cdn

```
<script src="build/index.js"></script>

const MyLibrary = window.MyLibrary.default;
const libraryInstance = new MyLibrary();
...
```
