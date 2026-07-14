const pool = require("../config/db");
const createUser = async (name, email, password) => {
  const values = [name, email, password];
  const query = `INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING id,name,email`;

  const response = await pool.query(query, values);
  return response.rows[0];
};

const findUserByEmail = async (email) => {
  const query = `SELECT * FROM users WHERE email=$1`;
  const res = await pool.query(query, [email]);
  return res.rows[0];
};

const findUserById = async (id) => {
  const query = `SELECT * FROM users WHERE id=$1`;
  const res = await pool.query(query, [id]);
  return res.rows[0];
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
};
