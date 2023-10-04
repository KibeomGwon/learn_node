// const http = require('http');
// const app = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type" : "text/html; charset=utf-8"});
//     if(req.url === '/'){
//         res.end('여기는 루트입니다.');
//     } else if(req.url === '/login'){
//         res.end('여기는 로그인 화면 입니다.');
//     }
// });
// app.listen(3001, ()=>{
//     console.log('http로 가동된 서버입니다.');
// });

"use strict";

// 모듈
const PORT = 3000;
const express = require("express");
const bodyParser = require("body-parser");

const app = express();


// 앱 세팅
app.set("views", "./src/views");
app.set("view engine","ejs");
// __dirname은 현재 파일 (app.js)가 있는 현재 위치를 나타냄
// 정적 경로로 추가를 함.
// ejs의 파일이 js파일에 접근을 할 때 밑의 경로가 자동으로 루트가 된다.
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// url 을 통해서 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended : true}));


//라우팅
const home = require("./src/routes/home");

app.use('/',home); // use -> 미들웨어를 등록해 주는 메소드


module.exports = app;

