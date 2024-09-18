SELECT name, weight, price, ROUND(CAST(price / (weight / 1000) AS numeric), 2)::float AS price_per_kg
FROM products
ORDER BY price_per_kg ASC, name ASC;

--Результат деления price / (weight / 1000) приводится к типу numeric с помощью CAST(), чтобы функция ROUND() корректно обработала число.
-- ::float приводит результат обратно к float, чтобы вывести его в обычной форме (без научной нотации).