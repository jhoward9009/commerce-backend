const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  Tag.findAll({})
  .then(data => res.json(data))
  .catch(error => console.log(error));


});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({})
  .then(data => res.json(data))
  .catch(error => console.log(error));


});

router.post('/', (req, res) => {

  Tag.create({

  })
  // create a new tag

  .then(data => res.json(data))
  .catch(error => console.log(error));


});

router.put('/:id', (req, res) => {
  Tag.update({

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
