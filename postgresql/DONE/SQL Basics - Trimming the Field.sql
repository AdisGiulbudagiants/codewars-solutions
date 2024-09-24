SELECT id, name, SPLIT_PART(characteristics, ',', 1) AS characteristic
FROM monsters
ORDER BY id;

--Использует функцию SPLIT_PART() для разделения строки characteristics по запятым и выбирает первую характеристику.