# React Jira

## 初始化项目

> [create-react-app](https://create-react-app.dev/) 可以用于快速初始化一个 React 项目

初始化项目：npx 可以用于临时安装 npm 包，用完就会删除，

```shell
npx create-react-app react-jira --template typescript
```

初始目录结构

```txt
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
└── tsconfig.json
```

### 格式化配置

使用 [Prettier](https://prettier.io/) 格式化代码

安装

```shell
yarn add --dev --exact prettier
```

eslint 和 prettier 工作时会有冲突，需要安装 [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation)

```shell
yarn add eslint-config-prettier -D
```

配置文件

```shell
echo {}> .prettierrc.json
touch .prettierignore
```

格式化文件

```shell
yarn prettier --write .
yarn prettier --check .
```

commit 时自动格式化配置<https://prettier.io/docs/en/precommit.html>
