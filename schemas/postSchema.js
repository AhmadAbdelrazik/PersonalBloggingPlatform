module.exports = {
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
