const express = require('express');

const projectRouter = require('./projects/project-router.js');
const resourceRouter = require('./projects/resource-router')
const taskRouter = require('./projects/task-router')


const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resources/', resourceRouter);
server.use('/api/projects', taskRouter)

module.exports = server;