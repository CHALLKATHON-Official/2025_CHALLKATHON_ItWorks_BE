const { GridFsStorage } = require("multer-gridfs-storage");
const multer = require("multer");

const mongoURI = "mongodb://localhost:27017/your-db-name"; // ← 본인 DB 주소로 변경

// ✅ GridFS 스토리지 설정
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    const filename = `image_${Date.now()}_${file.originalname}`;
    return {
      filename,
      bucketName: "uploads", // MongoDB의 fs.files → uploads.files 로 저장됨
    };
  },
});

const upload = multer({ storage });

module.exports = upload;
