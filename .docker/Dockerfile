FROM node:18-alpine as base
# アプリケーションディレクトリを作成する
WORKDIR /src

ARG HOME=/home/node

ENV NPM_CONFIG_PREFIX=$HOME/.npm-global
ENV PATH=$PATH:$HOME/.npm-global/bin

# set env
ARG env
ENV NODE_ENV=${env:-production}

RUN echo $NODE_ENV
RUN mkdir \
  $HOME/.npm \
  $NPM_CONFIG_PREFIX \
  /src/node_modules

RUN chown -R node:node \
  $HOME/.npm \
  $NPM_CONFIG_PREFIX \
  /src

USER node:node

RUN npm install -g npm@10.1.0
# アプリケーションの依存関係をインストールする
# ワイルドカードを使用して、package.json と package-lock.json の両方が確実にコピーされるようにします。
# 可能であれば (npm@5+)
COPY --chown=node:node ./package*.json ./
RUN npm install
# 本番用にコードを作成している場合
# RUN npm install --only=production
# アプリケーションのソースをバンドルする
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]