SELECT id, name, birthday, LOWER(race) AS race --Это то, как надо преобразовывать в нижний регистр
FROM demographics;