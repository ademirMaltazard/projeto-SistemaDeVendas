import pool from '../config/db.js'

export async function getCart() {
    const [rows] = await pool.query(
        `SELECT c.id, p.name, p.price, c.quantity, 
        from cart c
        JOIN products p ON c.product_id = p.id
        `
    );

    return rows;
}

export async function addProductToCart(product_id, quantity) {
    const [result] = await pool.query(
        'INSERT INTO cart (product_id, quantity) values (?, ?)',
        [product_id, quantity]
    );

    return result;
}