const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
// const cors = require("cors");
const SellerRoutes = require("./Routes/SellerRoutes");
// const Bookmark=require("./Routes/Bookmark_router")
// const Comment=require("./Routes/Comment_router")
const mongooes = require("./Db/Db");
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cors());
app.use(SellerRoutes);

app.listen(90);
