const express = require("express");
const router = express.Router();
const { getPosts } = require("../http/posts.http");

router.get("/", async (req, res) => {
  let all = await getPosts();
  res.render("pages/index", { title: "Accueil", posts: all.data });
});

router.get("/about", (req, res) => {
  res.render("pages/about", { title: "A propos" });
});

router.get("/features", (req, res) => {
  res.render("pages/features", { title: "Evenement" });
});

module.exports = router;
