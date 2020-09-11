const express = require('express');

const Project = require('./task-model.js');

const router = express.Router();

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
  
    Project.findTasks(id)
    .then(value => {
      res.status(200).json(value)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });

router.post('/:id/tasks', (req, res) => {
    const changes = req.body;
    const { id } = req.params; 
  
    Project.findById(id)
    .then(value => {
      if (value) {
        Project.addTask(changes, id)
        .then(task => {
          res.status(201).json(task);
        })
      } else {
        res.status(404).json({ message: 'Could not find Project with given id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new Task' });
    });
  });

module.exports = router;