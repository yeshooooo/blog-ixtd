# 安装

[官方安装文档](https://docs.chocolatey.org/en-us/choco/setup/)

管理员身份打开对于终端

::: code-group

```cmd
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

:::

# 使用

### 更新 chocolatey 本身

```powershell
choco upgrade chocolatey
```

### 常用命令

```powershell
choco -h                       # 查看帮助
choco <command> -h             #查看相应命令的帮助
choco install <package name>   #安装软件包
choco search <keyword>         #搜索软件包，会列出跟关键字相关的所有软件包
choco upgrade <package name>   #升级软件包
choco uninstall <package name> #卸载软件包
choco list --local-only        #查看本地安装的软件包
```

也可以管理员身份打开终端安装 ChocolateyGUI，输入 `chocolateygui`打开图形界面安装

```powershell
# 安装的时候一路Y即可
choco install chocolateygui
```
