### 1、环境管理

- **创建环境**

```bash
conda create --name env_name
```

> 示例：创建一个名为 `env_name` 的 Conda 环境。
>
> ```bash
> conda create --name myenv
> ```

- **激活环境**

```bash
conda activate env_name
```

> 示例：激活名为 `env_name` 的 Conda 环境。
>
> ```bash
> conda activate myenv
> ```

- **退出环境**

```bash
conda deactivate
```

> 示例：退出当前激活的 Conda 环境。
>
> ```bash
> conda deactivate
> ```

- **删除环境**

```bash
conda remove --name env_name --all
```

> 示例：删除名为 `env_name` 的 Conda 环境。
>
> ```bash
> conda remove --name myenv --all
> ```

------

### 2、包管理

- **安装包**

```bash
conda install package_name
```

> 示例：安装名为 `numpy` 的包。
>
> ```bash
> conda install numpy
> ```

- **删除包**

```bash
conda remove package_name
```

> 示例：删除名为 `numpy` 的包。
>
> ```bash
> conda remove numpy
> ```

- **更新包**

```bash
conda update package_name
```

> 示例：更新名为 `numpy` 的包。
>
> ```bash
> conda update numpy
> ```

- **查看已安装包**

```bash
conda list
```

> 示例：列出所有已安装的包。
>
> ```bash
> conda list
> ```

------

### 3、频道管理

- **添加频道**

```bash
conda config --add channels channel_name
```

> 示例：添加名为 `conda-forge` 的频道。
>
> ```bash
> conda config --add channels conda-forge
> ```

- **查看频道**

```bash
conda config --show channels
```

> 示例：查看当前配置的所有频道。
>
> ```bash
> conda config --show channels
> ```

------

### 4、配置与清理

- **查看配置**

```bash
conda config --show
```

> 示例：查看当前 Conda 配置。
>
> ```bash
> conda config --show
> ```

- **清理缓存**

```bash
conda clean --all
```

> 示例：清理 Conda 的所有缓存文件。
>
> ```bash
> conda clean --all
> ```

- **更新所有包**

```bash
conda update --all
```

> 示例：更新当前环境中的所有包。
>
> ```bash
> conda update --all
> ```