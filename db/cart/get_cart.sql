SELECT c.id as cart_id, p.id, name, price, quantity FROM cart c
JOIN products p ON p.id = c.prod_id
WHERE user_id = $1;