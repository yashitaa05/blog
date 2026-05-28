const express = require("express");
require('dotenv').config();
let path = require("path");
let app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
let cors = require('cors');
let blog = require("./config/db");
let cookieParser=require('cookie-parser');
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.json());

app.use(cors({
    origin:"*",
    methods:["POST","GET","DELETE","PUT"],
    credentials:true,
}));

app.use("/api/auth",require("./routes/authRoutes"));
app.use("/api/product",require("./routes/productRoutes"));
// app.use("/auth/register",require("./routes/authRoutes"));
// app.use("/auth/login",require("./routes/authRoutes"));

const PORT=process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});