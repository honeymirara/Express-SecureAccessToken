const pool = require('../db');

async function createUserDB(name, surname, email, pwd) {
    console.log(name, surname, email, pwd);
    const client = await pool.connect();
    console.log('+');
    try {
        await client.query('begin');
        const sql = 'INSERT INTO users(name, surname, email, pwd) VALUES ($1, $2, $3, $4) RETURNING*';
        const result = (await client.query(sql, [name, surname, email, pwd])).rows;
        await client.query('commit');
        return result;
    } catch (err) {
        await client.query('rollback');
        return [];
    };
};

module.exports = { createUserDB };
