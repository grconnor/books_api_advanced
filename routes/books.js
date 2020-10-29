const express = require('express');
const router = express.Router();

/* GET users listing. */
const booksCollection = [
  {
    author: "Connor",
    title: "Getting started with NodeJS"
  },
  {
    author: "Emma Thalen",
    title: "NodeJS for beginners"
  }
]
router.get('/', (req, res, next) => {
  res.json({books: booksCollection });
});

module.exports = router;
