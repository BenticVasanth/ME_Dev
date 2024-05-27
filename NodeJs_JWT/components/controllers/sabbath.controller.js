const db = require("../models");
const sabbathModal = db.sabbathModal;
const aesUtil = require("../../assets/js/aesUtil");
const path = require('path');
const fs = require('fs');

// Retrieve all Sabbath Doc from the database.
// exports.findAll = (req, res) => {
//   sabbathModal.findAll()
//     .then(data => {
//       res.setHeader('auth_token', global.auth_token);
//       res.status(200).json(aesUtil.encrypt(JSON.stringify(data), global.auth_token));
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err
//       });
//     });
// };

exports.findAll = (req, res) => {
  let response = JSON.parse(aesUtil.decrypt(req.body.stringValue, req.get('auth_token')));
  sabbathModal.findAll({
    order: response.order,
    limit: response.limit,
  }).then(data => {
    res.setHeader('auth_token', global.auth_token);
    res.status(200).json(aesUtil.encrypt(JSON.stringify(data), global.auth_token));
  }).catch(err => {
    res.status(500).send({ message: err });
  });
};

exports.sabbathDocUpload = async (req, res) => {
  try {
    const files = req.files;
    files.map(x => {
      const fullFileName = x.originalname;
      const filePath = `./Documents/SabbathDayMeditation/${fullFileName}`;
      fs.writeFileSync(filePath, x.buffer);
      const title = fullFileName.split('.')[0];
      sabbathModal.create({
        DocumentID: null,
        CategoryId: 1,
        Title: title,
        FilePath: `Documents/SabbathDayMeditation/${fullFileName}`,
        DownloadCount: null,
        DocumentReference: null,
        CreatedBy: null,
        CreatedDateTime: '',
        Status: 1,
        ImagesPath: null,
        Description: null
      }).then(() => {
        return res.status(200).send('File(s) Uploaded Successfully.');
      }).catch(err => {
        return res.status(500).send({ message: err.message || "Some error occurred while Uploading the File(s)." });
      });
    })
  } catch (error) {
    console.error('Error handling file upload:', error);
    res.status(500).send('Error uploading file.');
  }
}

exports.sabbathDocDownload = (req, res) => {
  let filename = JSON.parse(aesUtil.decrypt(req.body.stringValue, req.get('auth_token')));
  console.log(filename);
  const file = path.join(__dirname, '../../Documents/SabbathDayMeditation', filename);
  console.log(file)
  res.download(file)
}