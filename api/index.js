const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('dua_main.sqlite');

app.get("/api/category/",(req,res)=>{
  db.all('SELECT * FROM category', (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({
        message: 'Internal Error'
      });
    }
    return res.status(200).json(rows);
  });
})

app.get("/api/subcategory/:id",(req,res)=>{
  const {id} = req.params;
  db.all(`SELECT * FROM sub_category WHERE cat_id=${id}`, (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({
        message: 'Internal Error'
      });
    }
    return res.status(200).json(rows);
  });
})

app.get("/api/category/dua/:id",(req,res)=>{
  const {id} = req.params;
  db.all(`
  SELECT subsub.*
  FROM dua AS subsub
  JOIN sub_category AS sub ON subsub.subcat_id = sub.subcat_id
  JOIN category AS cat ON sub.cat_id = cat.cat_id
  WHERE cat.cat_id = ${id}
  `, (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({
        message: 'Internal Error'
      });
    }
    return res.status(200).json(rows);
  });
})


app.listen(PORT,()=>console.log(`Server Started At ${PORT}`));