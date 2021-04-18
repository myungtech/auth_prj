const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// .env path설정
require('dotenv').config({
    path: './config/config.env'
})

//req.body는 body-parser를 사용하기 전에는 디폴트 값으로 Undefined
app.use(bodyParser.json());


// 개발 환경설정
if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    app.use(morgan('dev'))
    // MORGAN: 각 요청에 대한 정보를 준다.
    // CORS:로컬 호스트에 대한 응답을 문제 없이 처리할 수 있게해준다.

}

//Load All ROUTES
const authRouter = require('./routes/authRoute');

//USE ROUTE
app.use('/api/', authRouter);


app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Page Not Founded"
    })
});

//PORT번호
const PORT = process.env.PORT;

app.listen((PORT), () => {
    console.log(`'listening on port number ${PORT}`);
});