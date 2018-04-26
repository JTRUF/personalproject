select img_url, name, price from pictures
join products on pictures.product_id = products.id;