SELECT product_id, product_name, quantity_in_stock
FROM products, generate_series(1, quantity_in_stock)
ORDER BY product_id DESC;

--generate_series(1, quantity_in_stock) создает строки для каждого продукта в соответствии с количеством на складе.