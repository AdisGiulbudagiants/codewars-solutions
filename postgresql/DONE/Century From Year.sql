SELECT yr,
 CASE
    WHEN (yr % 100 = 0) THEN FLOOR(yr / 100)
    ELSE FLOOR(yr / 100) + 1
 END AS century
FROM years;