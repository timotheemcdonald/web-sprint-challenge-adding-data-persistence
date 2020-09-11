const db = require('../data/db-config')

module.exports = {
    getResource,
    addResource,
}

function getResource() {
    return db('resource')
}

function addResource(resource) {
    return db('resource').insert(resource).then(value => {
        return getResource(value)
    })
}