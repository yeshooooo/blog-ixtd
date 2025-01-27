# cmder 安装与使用

前排送杠精：

windows 下也有 alacritty/wezterm 等更现代的终端模拟器，Windows Terminal 更现代等等等等吧

答：你个大聪明都知道我能不知道吗，cmder 是为了尽量抹平平台间的命令差异，不是为了装大聪明，让你配主题玩的。

## 安装

[不知道 choco 命令哪里来的看这里](/tools/windows/Chocolatey安装与使用)

```powershell
choco search cmder
```

![1737945459451](image/cmder安装与使用/1737945459451.png)

[安装完整版](https://cmder.app/)

命令行启动 powershell 或者 pwsh

```powershell
choco install Cmder
```

## 使用

### 改成汉语先

点击右下角的三条杠 | settings | General | Interface language | 改成中文 | 然后保存

![1737946756051](image/cmder安装与使用/1737946756051.png)

### 添加 powershell core 和它的管理员模式，并且把默认启动改为 powershell core

点击设置 | 启动下的任务 | 分别克隆一份 PowerShell::PowerShell as Admin 和 PowerShell::PowerShell | 然后名字改成你喜欢的，并把命令中的 PowerShell 改为 pwsh

如：

![1737947016057](image/cmder安装与使用/1737947016057.png)

![1737947035370](image/cmder安装与使用/1737947035370.png)

### 设置默认启动为 powershell core

选择上一步刚设置的即可

![1737947079803](image/cmder安装与使用/1737947079803.png)

### 修改默认的命令提示符 `λ`

**cmd 的**

网上的方法已经过时了，当前版本配置文件已经改了

修改 `C:\tools\Cmder\config\cmder_prompt_config.lua 中的第22行`

```lua
prompt_lambSymbol = "$"
```

**powershell/pwsh 的**

修改 `C:\tools\Cmder\vendor\profile.ps1`中第 111 行为

```powershell
Microsoft.PowerShell.Utility\Write-Host "`n$" -NoNewLine -ForegroundColor "DarkGray"
```

[扩展你可能有用的其他的](https://stackoverflow.com/questions/68283663/how-to-get-the-lambda-symbol-in-cmder-powershell-with-posh-git-after-the-git-i)

### 美化

##### **修改默认图标**

去找喜欢的图标，如去[iconfont](https://www.iconfont.cn/search/index?searchType=icon&q=powershell)下载 svg 后，使用[在线转换工具](https://convertio.co/zh/),将 svg 转成 ico，再放入 `C:\tools\Cmder\icons`目录下，然后

修改对应任务中的图标即可

![1737949061822](image/cmder安装与使用/1737949061822.png)

##### 设置背景图片

注意这里的位置要改成填充模式，他就会自适应大小

![1737949288580](image/cmder安装与使用/1737949288580.png)

其他

略，按自己心情配其他就好了，不关键
