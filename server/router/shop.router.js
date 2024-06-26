const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET route -- load list, sort by purchased, then by Alphabetical
router.get("/", (req, res) => {
  // select all items, ordered by isPurchased first (false should come first)
  // then by item, We can change ASC or DES later if needed.
  const sqlText = `SELECT * FROM "shop" ORDER BY "isPurchased", "item"`;

  pool.query(sqlText)
    .then(result => {
      console.log("DB items received!");

      // rows grabbed with results.rows
      res.send(result.rows);
    })
    .catch(err => {
      console.log(`Error making DB query, ${sqlText}`, err);
      res.sendStatus(500);
    });
}); // end GET route

// POST route
router.post("/", (req, res) => {
  // Request the data they send
  const shop = req.body;
  // USE PARAMETERIZATIONS
  const sqlShopPost = `INSERT INTO "shop" (item, quantity, unit) VALUES ($1, $2, $3)`;
  const sqlParam = [shop.item, shop.quantity, shop.unit];
  // Query to the database
  pool.query(sqlShopPost, sqlParam)
  .then((result) => {
    console.log('Added item to the shopping list:', shop)
    // Send an - OK Status in Postman
    res.sendStatus(201);
  }).catch((error) => {
    console.log(`Error in ${sqlShopPost}:`, error);
     // Send an - ERROR Status in Postman
    res.sendStatus(500);
  })
});

// PUT route -- change isPurchased status to True
router.put('/:id', (req, res) => {
  const idToUpdate = req.params.id
  const sqlText = `
    UPDATE "shop"
    SET "isPurchased" = true
    WHERE id=$1
  `

  pool.query(sqlText, [idToUpdate])
  .then((result) => {
    
    res.sendStatus(200)
  }).catch((err) => {
    alert('Error Updating "buy" item')
    res.sendStatus(500)
  });
}) // end PUT - isPurchased update


// PUT route -- reset ALL isPurchased statuses to False
router.put('/', (req, res) => {
  const sqlText = `
    UPDATE "shop"
    SET "isPurchased" = false
  `
  pool.query(sqlText)
  .then((result) => {
    res.sendStatus(200)
  }).catch((err) => {
    alert('Error Updating "buy" item')
    res.sendStatus(500)
  });
}) // end PUT - reset all

// PUT route (stretch) -- rename shopping list item

// DELETE route -- remove selected item
router.delete('/:id', (req, res) => {
  const shopId = req.params.id;
  const sqlDelete = `DELETE FROM "shop" WHERE id = $1`;

  pool.query(sqlDelete, [shopId])

  .then((result) => {
    res.sendStatus(201)
  }).catch((error) => {
    console.log(`ERROR in: ${sqlDelete}`, error);
    res.sendStatus(500);
  })
})
// DElete route -- remove all items!
router.delete('/', (req, res) => {
  const sqlText = `
    DELETE FROM "shop"
  `
  pool.query(sqlText)
  .then((result) => {
    res.sendStatus(200)
  }).catch((err) => {
    alert('Error deleting all items')
    res.sendStatus(500)
  });
})

module.exports = router;
