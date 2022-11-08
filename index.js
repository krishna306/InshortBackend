const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser")
const articlesRoutes = require("./routes/articlesRoutes")
const NewsAPI = require('newsapi');
const NewsArticle = require("./models/NewsArticle");
const newsapi = new NewsAPI('33e1939ef0844197b927f2cf2ac561cf');
require("./connection");


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json({extended:true}));
app.use("/articles",articlesRoutes);
//Function created to fetch news from "https://newsapis.org" and save to databse created on mongodb atlas 
// async function fetchNews(category){
   
//     newsapi.v2.topHeadlines({
//       language: 'en',
//       category: category,
//       page: 5
//       }).then(response => {
//         let articles = [];
//         articles = response.articles;
//         for(const article of articles){
//         //   console.log(article);
//           let newsObj = {};
//           newsObj.title = article.title;
//           newsObj.description = article.description;
//           newsObj.url = article.url;
//           newsObj.urlToImage= article.urlToImage;
//           newsObj.publishedAt= article.publishedAt;
//           newsObj.content = article.content;
//           newsObj.category = category;
//           newsObj.source = article.source;
//           newsObj.author = article.author;
//         //   console.log(newsObj);
//           const res = NewsArticle.create(newsObj);  
//         }
//       });
// }
// const catagories = ["business","entertainment","general","health","science","sports","technology"];
// for(let category of catagories){
//    fetchNews(category);
// }
const port =  process.env.PORT || 9000;

app.listen(port,function(){
    console.log(`Server Running on Port ${port}`);
});
