const express = require('express');

const Resource = require('./resource-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Resource.getResource()
    .then((resource)=>   {
            res.status(200).json(resource)
    })
    .catch(error => {
      res.status(500).json({
        error: `Unable to fetch projects ${error.message}`
      })
    })
  });

  router.post('/', (req, res) => {
    const changes = req.body;
  
    Resource.addResource(changes)
    .then(value => {
      res.status(201).json(value);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new Resource' });
    });
  });

  module.exports = router;