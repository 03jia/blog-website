> 以：**nginx** 镜像为例
>
> - `nginx`：镜像名
> - `my_nginx`：容器名
> - `my_volume`：数据卷名

### 1、镜像管理

- **搜索镜像**

```bash
docker search image_name
```

> 示例：搜索镜像名为 `nginx` 的镜像。
>
> ```bash
> docker search nginx
> ```

- **下载镜像**

```bash
docker pull image_name
```

> 示例：从 **Docker Hub** 下载 `nginx` 镜像。
>
> ```bash
> docker pull nginx
> ```

- **查看本地镜像**

```bash
docker images
```

> 示例：查看本地存储的所有镜像。
>
> ```bash
> docker images
> ```

- **删除镜像**

```bash
docker rmi image_name
```

> 示例：删除本地的 `nginx` 镜像。
>
> ```bash
> docker rmi nginx
> ```

- **构建镜像**

```bash
docker build -t image_name .
```

> 示例：从当前目录构建 `nginx` 镜像并指定标签。
>
> ```bash
> docker build -t nginx .
> ```

------

### 2、容器管理

- **启动容器**

```bash
docker run -d --name container_name image_name
```

> 示例：启动名为 `mynginx` 的容器，并使用 `nginx` 镜像。
>
> ```bash
> docker run -d --name mynginx nginx
> ```

- **停止容器**

```bash
docker stop container_name
```

> 示例：停止名为 `mynginx` 的容器。
>
> ```bash
> docker stop mynginx
> ```

- **重启容器**

```bash
docker restart container_name
```

> 示例：重启名为 `mynginx` 的容器。
>
> ```bash
> docker restart mynginx
> ```

- **删除容器**

```bash
docker rm container_name
```

> 示例：删除名为 `mynginx` 的容器。
>
> ```bash
> docker rm mynginx
> ```

- **查看运行中的容器**

```bash
docker ps
```

> 示例：查看当前运行中的容器。
>
> ```bash
> docker ps
> ```

- **查看所有容器**

```bash
docker ps -a
```

> 示例：查看所有容器，包括已停止的容器。
>
> ```bash
> docker ps -a
> ```

- **进入容器**

```bash
docker exec -it container_name /bin/bash
```

> 示例：进入名为 `mynginx` 的容器，并启动 `bash`。
>
> ```bash
> docker exec -it mynginx /bin/bash
> ```

------

### 3、数据卷管理

- **创建数据卷**

```bash
docker volume create volume_name
```

> 示例：创建名为 `myvolume` 的数据卷。
>
> ```bash
> docker volume create myvolume
> ```

- **查看数据卷**

```bash
docker volume ls
```

> 示例：列出所有数据卷。
>
> ```bash
> docker volume ls
> ```

- **删除数据卷**

```bash
docker volume rm volume_name
```

> 示例：删除名为 `myvolume` 的数据卷。
>
> ```bash
> docker volume rm myvolume
> ```

- **使用数据卷**

```bash
docker run -v volume_name:/path_in_container image_name
```

> 示例：使用名为 `myvolume` 的数据卷挂载到容器内的 `/data` 目录。
>
> ```bash
> docker run -v myvolume:/data nginx
> ```
>
> 示例：将数据卷挂在到`E:\ProgrammingTools\docker\DockerData\open-webui`目录下：
>
> ```bash
> docker run -v E:\ProgrammingTools\docker\DockerData\open-webui:/app/backend/data
> ```

------

### 4、网络管理

- **查看网络**

```bash
docker network ls
```

> 示例：列出所有 Docker 网络。
>
> ```bash
> docker network ls
> ```

- **创建网络**

```bash
docker network create network_name
```

> 示例：创建名为 `mynetwork` 的自定义网络。
>
> ```bash
> docker network create mynetwork
> ```

- **删除网络**

```bash
docker network rm network_name
```

> 示例：删除名为 `mynetwork` 的自定义网络。
>
> ```bash
> docker network rm mynetwork
> ```

- **将容器连接到网络**

```bash
docker network connect network_name container_name
```

> 示例：将容器 `mynginx` 连接到网络 `mynetwork`。
>
> ```bash
> docker network connect mynetwork mynginx
> ```

------

### 5、其他工具

- **查看容器日志**

```bash
docker logs container_name
```

> 示例：查看名为 `mynginx` 的容器日志。
>
> ```bash
> docker logs mynginx
> ```

- **导入镜像**

```bash
docker load < image.tar
```

> 示例：从 `image.tar` 文件中导入镜像。
>
> ```bash
> docker load < nginx.tar
> ```

- **导出镜像**

```bash
docker save -o image.tar image_name
```

> 示例：将 `nginx` 镜像导出到 `nginx.tar` 文件中。
>
> ```bash
> docker save -o nginx.tar nginx
> ```