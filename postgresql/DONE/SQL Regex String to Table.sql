SELECT REGEXP_SPLIT_TO_TABLE(text, '[AEIOUaeiou]') AS  results
FROM random_string;

--Использует функцию REGEXP_SPLIT_TO_TABLE() для разбиения строки по гласным буквам [AEIOUaeiou].