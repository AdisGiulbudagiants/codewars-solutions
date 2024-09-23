SELECT genre, COUNT(*) AS count, ARRAY_AGG(title ORDER BY title) AS books
FROM books, UNNEST(genres) AS genre
GROUP BY genre
ORDER BY count DESC, genre ASC;

--Используем UNNEST(genres) для развертывания массива жанров в отдельные строки.

--Используем ARRAY_AGG(title ORDER BY title) для агрегирования и сортировки названий книг по алфавиту.