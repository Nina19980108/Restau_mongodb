# 我的餐廳清單

一個使用 Node.js + Express 打造的餐廳美食網站，並透過 mongodb 資料庫取得資料，可以在首頁看到所有餐廳與它們的簡單資料，再點進去看餐廳的詳細資訊。可以自行新增餐廳，或是修改餐廳內容。

## Features - 產品功能

1. 使用者可以點擊任一餐廳，查看更多餐廳資訊，如地址、電話與簡介
2. 使用者可以瀏覽一家餐廳的詳細資訊。
3. 使用者可以修改一家餐廳的詳細資訊。
4. 使用者可以新增一家餐廳。

## Environment SetUp - 環境建置

1. [MongoDB v4.0 以上](https://www.mongodb.com/download-center/community)
2. [Node.js](https://nodejs.org/en/)

## Installing - 專案安裝流程

1. 打開你的 terminal，Clone 此專案至本機電腦

```
git clone https://github.com/pierceshih15/restaurantList.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd restaurantList
```

3. 安裝 npm 套件

```
在 Terminal 輸入 npm install 指令
```

4. 安裝 nodemon 套件

```
在 Terminal 輸入 nodemon app.js 指令
```

5. 匯入種子檔案

```
在 Terminal 找到 Seeder.js 檔案

執行 node models/seeds/Seeder.js 匯入使用者與餐廳資料
```

當 terminal 出現以下字樣，即表示種子資料已新增至資料庫，按下 ctrl + c 結束執行

```
Mongodb is connected!

User and Restaurant data get done!
```

6. 啟動伺服器，執行 app.js 檔案

```
nodemon app.js
```

7. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
Restaurant list is on http://localhost:3000
```

## Contributor - 專案開發人員

> [Nina Liu](https://github.com/Nina19980108)