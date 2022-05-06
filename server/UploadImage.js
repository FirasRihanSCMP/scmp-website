const express = require('express');
const multer = require('multer');


const app = express();


app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../build/client/imgs/events')
    },
    filename: (req, file, cb) => {
        cb(null, Date().toISOString().replace(/:/g, '-'))
    }
});

const upload = multer({storage}).array('file');

