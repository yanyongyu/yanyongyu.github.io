(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{382:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("DVWA是一款开源的渗透测试漏洞练习平台，其中内含XSS、SQL注入、文件上传、文件包含、CSRF和暴力破解等各个难度的测试环境。")]),s._v(" "),t("p",[s._v("本文使用的系统是"),t("a",{attrs:{href:"https://www.kali.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("kali linux"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"下载压缩包并解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载压缩包并解压"}},[s._v("#")]),s._v(" 下载压缩包并解压")]),s._v(" "),t("p",[s._v("从GitHub上下载最新版DVWA包，解压到www目录下。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/ethicalhack3r/DVWA/archive/master.zip\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" -o -d /var/www/html master.zip\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /var/www/html/DVWA-master /var/www/html/dvwa\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /var/www/html/dvwa/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" hackable/uploads/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" external/phpids/0.6/lib/IDS/tmp/phpids_log.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" config/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"创建数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[s._v("#")]),s._v(" 创建数据库")]),s._v(" "),t("p",[s._v("kali默认使用的数据库是MariaDB。")]),s._v(" "),t("p",[s._v("开启MySQL服务。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("连接MySQL，进入MariaDB。密码默认为空。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql -u root -p\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("创建 "),t("code",[s._v("dvwa")]),s._v(" 数据库以及 "),t("code",[s._v("dvwa")]),s._v(" 用户。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),s._v(" dvwa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" dvwa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" dvwa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" dvwa"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@localhost")]),s._v(" identified "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nflush "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" dvwa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dvwa'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nflush "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"安装php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装php"}},[s._v("#")]),s._v(" 安装php")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php-gd\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/php/7.3/apache2/php.ini\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("修改 "),t("code",[s._v("allow_url_include=On")]),s._v("、"),t("code",[s._v("display_errors=On")])]),s._v(" "),t("p",[s._v("Tips：vim中使用/text查找内容。")]),s._v(" "),t("h2",{attrs:{id:"配置dvwa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置dvwa"}},[s._v("#")]),s._v(" 配置dvwa")]),s._v(" "),t("p",[s._v("创建配置文件:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /var/www/html/dvwa/config/config.inc.php.dist /var/www/html/dvwa/config/config.inc.php\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /var/www/html/dvwa/config/config.inc.php\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("修改数据库配置:")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_DVWA")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("array")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_DVWA")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'db_server'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'127.0.0.1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_DVWA")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'db_database'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'dvwa'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_DVWA")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'db_user'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'dvwa'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_DVWA")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'db_password'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("打开 "),t("code",[s._v("http://localhost/dvwa/login.php")]),s._v(" 使用账号 "),t("code",[s._v("admin")]),s._v(" 密码 "),t("code",[s._v("password")]),s._v(" 登录，点击 "),t("code",[s._v("Create/Reset Database")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"搭建完毕"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建完毕"}},[s._v("#")]),s._v(" 搭建完毕")]),s._v(" "),t("p",[s._v("至此所有配置全部完成。登录即可进入靶场啦！")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/DVWA%E6%B8%97%E9%80%8F%E6%B5%8B%E8%AF%95%E5%B9%B3%E5%8F%B0%E7%9A%84%E6%90%AD%E5%BB%BA/1.png",alt:"1"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);