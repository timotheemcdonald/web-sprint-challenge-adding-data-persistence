const db = require('../data/db-config')

module.exports = {
    findById,
    findTasks,
    addTask,
}

function findById(id) {
    return db('project').where({ id})
}

function findTasks(id) {
    return db('project')
    .join('task', 'task.id', 'project.task_id')
    .select('project.id', 'project.description','task.description')
    .where('project.task_id', '=', id)
}

function addTask(task) {
    return db('task').insert(task, 'id')
}
