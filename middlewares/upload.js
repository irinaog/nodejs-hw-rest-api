const { diskStorage } = require('multer');
const multer = require('multer');
const path = require('path');

const tempDir = path.join(__dirname, '../', 'temp');

const multerConfig = diskStorage({
    destination: tempDir,
    filename: (req, file, cb) => {
        cb(null, file.originalname)
        console.log(file.originalname)
    }
});

const upload = multer({
    storage: multerConfig
});

module.exports = upload;