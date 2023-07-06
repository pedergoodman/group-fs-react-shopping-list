const express = require('express')
const router = express.Router();
const pool = require('../modules/pool')



// GET route -- load list, sort by purchased, then by Alphabetical
router.get('/', (req, res) => {

  // select all items, ordered by isPurchased first (false should come first)
  // then by item, We can change ASC or DES later if needed. 
  const sqlText = `SELECT * FROM "shop" ORDER BY "isPurchased", "item"`

  pool.query(sqlText)
    .then((result) => {
      console.log('DB items received!');

      // rows grabbed with results.rows
      res.send(result.rows)
    }).catch((err) => {
      console.log(`Error making DB query, ${sqlText}`, err );
      res.sendStatus(500)
    });

}); // end GET route




// POST route


// PUT route -- change isPurchased status to True


// PUT route -- reset ALL isPurchased statuses to False


// PUT route (stretch) -- rename shopping list item 


// DELETE route -- remove selected item


// DElete route -- remove all items!




module.exports = router;
