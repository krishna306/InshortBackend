const router = require("express").Router();
const NewsArticle = require("../models/NewsArticle");


//get news by category

router.get("/fetchnewsbycategory/id", async (req, res) => {
  
  try {
    const {category} = req.params;
    console.log(category);
    const articles = await NewsArticle.find({category:category});
    res.json(articles);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// get all news
router.get("/allnews", async (req, res) => {
  console.log("hey");
  try {
    const category = req.body.category;
    const articles = await NewsArticle.find();
    res.json(articles);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
module.exports = router;
