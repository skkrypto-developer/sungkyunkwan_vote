const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const logger = require('morgan');
const FileStore = require('session-file-store')(session);
const cors = require('cors');

const splashRouter = require('./routes/splash'); //모듈 추가
const loginRouter = require('./routes/login');
const setUserKeyRouter = require('./routes/setUserKey')
const menuRouter = require('./routes/menu')
const myPageRouter = require('./routes/myPage')
const voteRouter = require('./routes/vote')

const corsOptions = {
    origin: true,
    credentials: true
};

const app = express();

require('console-stamp')(console, 'yyyy/mm/dd HH:MM:ss.l');

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs'); //set view engine
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(cookieParser('skkrypto2018'));
app.use(express.json()); //body-parser 대용
app.use(express.urlencoded({extended: false})); //body-parser 대용

//making session
app.use(session({
    secret: 'skkrypto2018',
    resave: false,
    saveUninitialized: true,
    store: new FileStore({logFn: function(){}}),
    cookie: {
        httpOnly: false,
        secure: false
    }
}))

//cors
app.use(cors(corsOptions));

app.use('/', splashRouter);
app.use('/login', loginRouter);
app.use('/menu', menuRouter);
app.use('/setUserKey', setUserKeyRouter);
app.use('/vote', voteRouter);
app.use('/myPage', myPageRouter);

app.use((req, res, next) => {
    res.status(404).send('Sorry cant find that');
})
app.use((req, res, next) => {
    res.status(500).send('Something broke!')
})

app.listen(3000, () => {
    console.log('Sungkyunkwan vote server is started')
})

module.exports = app;

