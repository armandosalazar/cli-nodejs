const { Schema, model } = require('mongoose');

const TaskSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = model('Task', TaskSchema);
