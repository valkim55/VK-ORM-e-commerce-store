const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }]
  }).then(dbCategoriesData => {
      return res.json(dbCategoriesData)
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({ 
    where: {id: req.params.id},
    include: [{
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }] 
  }).then(dbCategoriesData => {
      if(!dbCategoriesData) {
        res.status(400).json({message: 'no categories found with this id'});
        return;
      }
      res.json(dbCategoriesData);
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({ category_name: req.body.category_name })
    .then(dbCategoriesData => {
      return res.json(dbCategoriesData);
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, { where: {id: req.params.id} })
    .then(dbCategoriesData => {
      if(!dbCategoriesData[0]) {
        res.status(404).json({message: 'no category found under requested id'});
        return;
      }
      res.json(dbCategoriesData);
    }).catch(err => {
      console.log(err);
      res.json(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({ where: {id: req.params.id} })
    .then(dbCategoriesData => {
      if(!dbCategoriesData) {
        res.status(404).json({message: 'no category found under this id'});
        return;
      }
      res.json(dbCategoriesData);
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
