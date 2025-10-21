const multer = require("multer");

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname); // original file name
  },
  destination:function(req,file,cb){
    cb(null,'uploads/'); // upload folder
  }
});

const upload = multer({ storage: storage });
module.exports = upload;
