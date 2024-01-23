const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CategorySchema = new schema({
  category: {
    type: String,
    require: true,
  },
});

const CategoryModal = new mongoose.model("category", CategorySchema);
module.exports = CategoryModal;
