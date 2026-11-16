# 1. 選擇 Node.js 24 作為基礎 Image
FROM node:24

# 2. 設定 Container 內的工作目錄
WORKDIR /app

# 3. 複製專案檔案
COPY package*.json ./
COPY server.js ./

# 4. 宣告服務使用的 Port
EXPOSE 3000

# 5. Container 啟動時執行 npm start
CMD ["npm", "start"]
