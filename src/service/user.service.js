const { createUserDB } = require('../repository/user.repository');

async function createUser(name, surname, email, pwd) {
    const data = await createUserDB(name, surname, email, pwd);
    return data;
};


module.exports = {createUser};