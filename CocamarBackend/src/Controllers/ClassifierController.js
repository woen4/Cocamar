const VisualRecognitionV3 = require("ibm-watson/visual-recognition/v3");
const fs = require("fs");
const ibm_credentials = require("../../ibm-watson_credentials.json");
var Readable = require("stream").Readable;
const { IamAuthenticator } = require("ibm-watson/auth");

class ClassifierController {
  async classify(req, res) {
    const randomName = Math.random().toString().substring(3, 11);

    const { serviceUrl, apikey, classifierIds, version } = JSON.parse(
      JSON.stringify(ibm_credentials)
    );

    var base64 = req.body.image;
    const imgBuffer = Buffer.from(base64, "base64");

    var s = new Readable();

    s.push(imgBuffer);
    s.push(null);
    s.pipe(fs.createWriteStream(`${randomName}.png`));

    const visualRecognition = new VisualRecognitionV3({
      serviceUrl,
      version: version,
      authenticator: new IamAuthenticator({
        apikey,
      }),
    });

    const params = {
      imagesFile: fs.createReadStream(`./${randomName}.png`),
      classifierIds,
      threshold: 0.6,
    };

    const { result } = await visualRecognition.classify(params);

    res.json(result);
    fs.unlinkSync(`./${randomName}.png`);
    return;
  }
}

module.exports = new ClassifierController();
