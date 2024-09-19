SELECT book_id, title
FROM books
JOIN loans USING(book_id)
GROUP BY book_id, title
HAVING COUNT(*) = COUNT(return_date)
ORDER BY book_id DESC;