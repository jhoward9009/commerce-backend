const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  Category.findAll({

  attributes: [ "category_name"],
  include: [
    {
      model: Product,
      attributes: ['id', 'product_name'],
    }
  ]
  })
  .then(data => res.json(data))
  .catch(error => console.log(error));

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  Category.findOne({

    where: {
      id: req.params.id
    },
    attributes: [
      "category_name"
    ],
    include: [
      {
        model: Product,
        attributes: ["product_name","id"],
      }
    ]

  })
    .then(data => res.json(data))
    .catch(error => console.log(error));

});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
