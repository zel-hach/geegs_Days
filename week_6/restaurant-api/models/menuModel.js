// menuModel.js
import pool from './../db.js';

export const items = {
  async createTables() {
    try {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS menu_items (
          item_id SERIAL PRIMARY KEY,
          item_name VARCHAR(30) NOT NULL,
          item_price SMALLINT DEFAULT 0
        );
      `);
      console.log("Table checked/created");
    } catch (err) {
      console.error('Failed to create table:', err);
    }
  },

  async getAllItems() {
    const result = await pool.query('SELECT * FROM menu_items');
    return result.rows;
  },

  async getItemByName(name) {
    try {
      const result = await pool.query(`SELECT * FROM menu_items WHERE item_name='${name}'`);
      return result.rows.length ? result.rows : 'Item not found';
    } catch (err) {
      console.error('Failed to get item:', err);
    }
  },

  async createItem(name, price) {
    try {
      const result = await pool.query(
        'INSERT INTO menu_items(item_name, item_price) VALUES($1, $2) RETURNING *',
        [name, price]
      );
      return result.rows[0];
    } catch (err) {
      console.error('Failed to insert item:', err);
    }
  },

  async updateItem(id, name, price) {
    try {
      const result = await pool.query(
        `UPDATE menu_items SET item_name='${name}', item_price=${price} WHERE item_id='${id}' RETURNING *`);
      return result.rows[0] || 'Item not found';
    } catch (err) {
      console.error('Failed to update item:', err);
    }
  },

  async deleteItem(id) {
    try {
      const result = await pool.query(
        `DELETE FROM menu_items WHERE item_id='${id}' RETURNING *`);
      return result.rows[0] || 'Item not found';
    } catch (err) {
      console.error('Failed to delete item:', err);
    }
  }
};