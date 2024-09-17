SELECT producer, COUNT(DISTINCT(name, price, stock)) AS count_products_types
FROM products
GROUP BY producer
ORDER BY count_products_types DESC, producer ASC;