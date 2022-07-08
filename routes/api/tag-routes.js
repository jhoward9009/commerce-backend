const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  Tag.findAll({

    attributes: [
      'tag_name'
    ],
    include: [
      {
        model: Product,
        attributes: ['price', 'id', 'product_name', 'stock' ],
      }
    ]

  })
  .then(data => res.json(data))
  .catch(error => console.log(error));


});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    attributes: ["tag_name"]

  })
  .then(data => res.json(data))
  .catch(error => console.log(error));


});

router.post('/', (req, res) => {

  Tag.create({
    tag_name: req.body.tag_name


  })
  // create a new tag

  .then(data => res.json(data))
  .catch(error => console.log(error));


});

router.put('/:id', (req, res) => {
  Tag.update({
    
      tag_name: req.body.tag_name
    },
    { 
      where: {id: req.params.id}

  })
  // update a tag's name by its `id` value

  .then(data => res.json(data))
  .catch(error => console.log(error));


});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value

  Tag.destroy({})

  .then(data => res.json(data))
  .catch(error => console.log(error));


});

module.exports = router;
