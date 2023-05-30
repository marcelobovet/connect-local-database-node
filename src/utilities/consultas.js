const { Pool } = require('pg')
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    allowExitOnIdle: true
});


const obtenerPosts = async () => {
    const { rows } = await pool.query('SELECT * FROM posts');
    return rows;
};

const agregarPost = async (post) => {
    const consulta = 'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)';
    const values = [post.titulo, post.url, post.descripcion, post.likes];
    await pool.query(consulta, values);
    return { mensaje: 'post agregado' };
}

module.exports = {obtenerPosts, agregarPost}