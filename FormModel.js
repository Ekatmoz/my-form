const mongoose = require('mongoose');

const formSchema = {
  name: String,
  email: String,
  text: String
};

const Text = mongoose.model("Form", formSchema);

module.exports = Text;

