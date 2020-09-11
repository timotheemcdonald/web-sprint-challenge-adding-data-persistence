const db = require('../data/db-config')

module.exports = {
    findProjects,
    findById,
    // getResource,
    findTasks,
    addTask,
    addResource,
    addProject,
}

function findProjects() {
    return db('project')
    
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

// function getResource() {
//     return db('resource')
// }

// function get() {
//     return db("resource").then(resource =>
//       resource.map(resc => {
//         return {
//           ...resc,
//         };
//       })
//     );
//   }

function addTask(task) {
    return db('task').insert(task, 'id')
}

function addResource(resource) {
    return db('resource').insert(resource)
    
}

function addProject(project) {
    return db('project').insert(project)
}