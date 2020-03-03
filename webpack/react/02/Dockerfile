#制定node镜像的版本
FROM node:latest AS Build
#声明作者
MAINTAINER gaoda

#移动当前目录下面的文件到app目录下
COPY . /
#进入到app目录下面，类似cd
WORKDIR /

#安装依赖
#RUN npm install
##构建
#RUN npm run build
#对外暴露的端口

#线上。。。。会用得到
#COPY --from=builder server.js .
#COPY --from=builder ./dist/ ./dist/
EXPOSE 8081

