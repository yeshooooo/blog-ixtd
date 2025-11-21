---
title: jetson命令行刷机
author: 马超
date: 2025/11/7 8:24
categories:
  - tools
tags:
  - tools
  - jetson
---

# jetson命令行刷机

很多板子因为种种原因，无法使用sdkmanager刷机，并且也不好发现问题。
## 查看官方文档下载刷机文件
首先打开[官方文档](https://docs.nvidia.com/jetson/archives/),选择对应版本的文档，比如这里选择r36.4.4,选择对应的[文档页面](https://docs.nvidia.com/jetson/archives/r36.4.4/DeveloperGuide/IN/QuickStart.html#to-flash-the-jetson-developer-kit-operating-software)

![image-20251107092615829](https://pic.ixtd.com/images/2025/11/07/image-20251107092615829.png)

![image-20251107092713950](https://pic.ixtd.com/images/2025/11/07/image-20251107092713950.png)

## 连接跳线，usb连接电脑

线插在23上面，不是34，不要听网上胡说八道，连接电脑前`lsusb`查看一下，连接电脑后再`lsusb`查看一下，会发现多出来一个英伟达的设备，如果看到这个设备，说明连接电脑成功

![image-20251112103558126](https://pic.ixtd.com/images/2025/11/12/image-20251112103558126.png)

## 刷机

切换到组件安装位置，使用下面的命令刷机
我这里组件安装位置如下
```shell
~/nvidia/nvidia_sdk/JetPack_6.2.1_Linux_JETSON_ORIN_NANO_TARGETS/Linux_for_Tegra
```

```shell
cd ~/nvidia/nvidia_sdk/JetPack_6.2.1_Linux_JETSON_ORIN_NANO_TARGETS/Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

成功后会显示如下日志

![image-20251112103741927](https://pic.ixtd.com/images/2025/11/12/image-20251112103741927.png)

## 在盒子上安装jtop

首先安装英伟达基础组件

```shell
sudo apt install -y nvidia-jetpack
```

然后安装python和pip

```shell
sudo apt update
sudo apt install python3 python3-pip -y
```

然后安装jtop

```shell
sudo pip3 install -U pip
sudo pip3 install jetson-stats
```

## 解决jtop中jetson sdk为missing

[官方论坛](https://forums.developer.nvidia.com/t/jtop-fix-to-show-jetpack-6-2-1/339404)

在jtop包中，添加对应版本的映射

```shell
sudo vim /usr/local/lib/python3.10/dist-packages/jtop/core/jetson_variables.py
```

如

```shell
"36.4.4": "6.2.1",
```

然后重启服务

```shell
sudo cp -pu /usr/local/jetson_stats/jtop.service  /etc/systemd/system/

sudo systemctl daemon-reload
sudo systemctl restart jtop.service
```

