### 1、npm 配置与路径设置

- **功能**: 设置 npm 的全局安装路径和缓存路径

```bash
npm config set prefix "D:\Program Files\nodejs\node_global"
```

> 示例：设置全局安装路径为 `D:\Program Files\nodejs\node_global`

- **功能**: 设置缓存路径

```bash
npm config set cache "D:\Program Files\nodejs\node_cache"
```

> 示例：设置缓存路径为 `D:\Program Files\nodejs\node_cache`

### 2、设置镜像源

- **功能**: 设置 npm 镜像源

```bash
npm config set registry https://registry.npmmirror.com
```

> 示例：设置淘宝镜像源为 `https://registry.npmmirror.com`

- **功能**: 设置腾讯云镜像源

```bash
npm config set registry http://mirrors.cloud.tencent.com/npm/
```

> 示例：设置腾讯云镜像源为 `http://mirrors.cloud.tencent.com/npm/`

- **功能**: 设置华为云镜像源

```bash
npm config set registry https://mirrors.huaweicloud.com/repository/npm/
```

> 示例：设置华为云镜像源为 `https://mirrors.huaweicloud.com/repository/npm/`

- **功能**: 设置官方默认镜像源

```bash
npm config set registry https://registry.npmjs.org
```

> 示例：设置官方默认镜像源为 `https://registry.npmjs.org`

### 3、常用 npm 命令简写

- **功能**: 简写常用命令

```bash
-g   # 全局安装
-S   # 安装并保存到 dependencies
-D   # 安装并保存到 devDependencies
i    # install 的简写
```

> 示例：使用 `-g` 进行全局安装
>
> ```bash
> npm install -g <package-name>
> ```

### 4、安装模块

- **功能**: 安装指定模块并保存到不同依赖中

```bash
npm i express  # 安装到dependencies
npm install express -g  # 全局安装
npm install express -S  # 保存到生产依赖
npm install express -D  # 保存到开发依赖
```

### 5、卸载模块

- **功能**: 卸载模块并可选择是否移除依赖

```bash
npm uninstall express  # 卸载但保留依赖
npm uninstall express --save  # 卸载并移除dependencies
npm uninstall express --save-dev  # 卸载并移除devDependencies
```

> 示例：卸载 `express` 并从 `dependencies` 中删除

### 6、**更新模块**

- **功能**: 更新指定模块到最新版本或指定版本

```bash
npm update express
```

> 示例：更新 `express` 到最新版本

- **功能**: 更新到指定版本

```bash
npm update express@2.1.0
```

> 示例：更新 `express` 到版本 `2.1.0`

### 7、查看模块信息

- **功能**: 查看安装路径和依赖信息

```bash
npm root  # 本地安装路径
npm root -g  # 全局安装路径
```

> 示例：查看本地安装路径

- **功能**: 查看模块的依赖信息

```bash
npm view express dependencies
npm view express versions
npm info express
```

> 示例：查看 `express` 模块的依赖

### 8、其他常用命令

- **功能**: 清除 npm 缓存

```bash
npm cache clean
```

> 示例：清除 npm 缓存

- **功能**: 检查过时的模块

```bash
npm outdated
```

> 示例：检查过时的模块

- **功能**: 使用 `cnpm` 安装并使用淘宝镜像

```bash
npm install -g cnpm --registry=https://registry.npmmirror.com
```

> 示例：使用淘宝镜像安装 `cnpm`

### 9、Yarn 用法

- **功能**: 安装 Yarn

```bash
npm install -g yarn
```

> 示例：全局安装 `yarn`

- **功能**: 使用 Yarn 安装依赖包

```bash
yarn add packageName
```

> 示例：使用 `yarn` 安装 `lodash`
>
> ```bash
> yarn add lodash
> ```

- **功能**: 初始化项目

```bash
yarn init
```

> 示例：初始化一个 Yarn 项目

### 10、PNPM 用法

- **功能**: 安装 PNPM

```bash
npm install -g pnpm
```

> 示例：全局安装 `pnpm`

- **功能**: 使用 PNPM 安装依赖

```bash
pnpm install
```

> 示例：使用 `pnpm` 安装项目依赖

- **功能**: 使用 PNPM 更新依赖

```bash
pnpm update
```

> 示例：更新依赖

### 11、npm vs yarn 对比

- **功能**: 使用 npm 和 yarn 安装依赖

```bash
npm install  # 安装依赖
npm install <package> --save-dev  # 安装开发依赖
```

> 示例：使用 npm 安装 express 依赖
>
> ```bash
> npm install express
> ```

- **功能**: 使用 yarn 安装依赖

```bash
yarn add <package>  # 安装依赖
yarn add <package> --dev  # 安装开发依赖
```

> 示例：使用 yarn 安装 express 依赖
>
> ```bash
> yarn add express
> ```

### 12、创建项目

