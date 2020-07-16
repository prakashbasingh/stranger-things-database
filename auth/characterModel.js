const db = require("../database/dbConfig.js")

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
}

async function add(characters) {
    const [id] = await db("characters").insert(character)
    return findById(id)
}

function find() {
    return db("characters")
}

function findBy(filter) {
    return db("characters").where(filter)
}

function findById(id) {
    return db("characters")
        .where({ id })
        .first()
}

function update(id , changes) {
    return db("characters")
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db("characters")
        .where("id", Number(id))
        .del()
}
