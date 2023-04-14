const Text = require('./FormModel');

//GET

module.exports.getForm = async (req, res) => {
 res.sendFile(__dirname + '/index.html')
}

module.exports.postForm = async (req, res) => {
  let newText = new Text({
    name: req.body.name,
    email: req.body.email,
    text: req.body.text
  })
  newText.save()
  res.sendFile(__dirname + '/answer.html')
}
