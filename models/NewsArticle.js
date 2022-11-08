const mongoose = require("mongoose");
const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const newsArticleSchema = new mongoose.Schema({
  content: {
    type: "string",
  },
  title: {
    type: "string",
  },
  urlToImage: {
    type: "string",
  },
  category: {
    type: "string",
  },
  url: {
    type: "string",
  },
  description:{
    type: "string",
  },
  publishedAt: {
    type: "string",
  },
  publishedAt: {
    type: "string",
  },
  author: {
    type: "string",
  },
  source: {
    id :"string",
    name:"string"
  },
});
const NewsArticle = mongoose.model("NewsArticle", newsArticleSchema);
module.exports = NewsArticle;
