# reactjs-demo

## 先执行下面命令安装依赖包：

```
npm install
```

## 开发模式，运行命令：

```
npm run start
```

## 项目打包

```
npm run build
```

*说明*

里面有一些server端提供的数据请求，域名是用的我的host指定的www.wml.com指定到了本地的127.0.0.1，而且需要nginx配置允许跨域请求，如果不能使用，请参考我的nginx配置：

```nginx
http {
  ...
  http {
    ...
    client_max_body_size 2m;
    server {
      ...
      location / {
            ...
            proxy_set_header Access-Control-Allow-Origin "http://www.wml.com:8080/";
        }
    }
}
```
