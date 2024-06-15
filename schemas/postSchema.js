const Ajv = require('ajv');
const ajv = new Ajv();

const postSchema = {
  type: "object",
  properties: {
    title: 
    { 
      type: "string",
      maxLength: 100,
    },
    author: 
    { 
      type: "string",
      maxLength: 40,
    },
    post: {
      type: "string",
      maxLength: 10000,
    }
  },
};

const validate = ajv.compile(postSchema);

module.exports = validate;