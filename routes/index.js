const express = require("express");
const router = express.Router();
const { getPosts } = require("../http/posts.http");

router.get("/", async (req, res) => {
  try {
    let all = await getPosts();
    res.render("pages/index", { title: "Accueil", posts: all.data });
  } catch (error) {
    console.log(error);
  }
});

router.get("/about", (req, res) => {
  res.render("pages/about", { title: "A propos" });
});

router.get("/create-test", (req, res) => {
  res.json({
    status: "success",
    message: "request is Done !",
  });
});

router.get("/features", (req, res) => {
  res.render("pages/features", { title: "Evenement" });
});

module.exports = router;
