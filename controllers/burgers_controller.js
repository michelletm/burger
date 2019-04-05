const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", function (req, res) {
   burger.all(function (result) {
      res.json(result);
   });
})

router.post("/create", function(req, res) {
   console.log(req.body);
   burger.create(["burger_name", "devoured"],
      [req.body.burger_name, req.body.devoured],
      function (result) {
         console.log(result);
         res.json({message: "Burger Successfully Created!"})
      });
});

router.put("/update/:id", function(req, res) {
   console.log(req.body);
   burger.update({devoured: true}, `item_id=${req.params.id}`, function(result) {
      console.log(result);
      res.json({message: "Burger Updated!"})
      
   });

});

module.exports = router;



