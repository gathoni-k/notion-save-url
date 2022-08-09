const express = require("express")
require("dotenv").config()
const addItem = require("./notion")
const app = express()

app.use(
    express.urlencoded({
      extended: true,
    })
  );

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.post('/add-url', async (req, res) => {
    const {link, tag} = req.body
    const response =  await addItem(link, tag)
    return res.json(
        {response}
    )
});

app.listen(3000, () => {
    console.log("Server started")
})
module.exports = app;