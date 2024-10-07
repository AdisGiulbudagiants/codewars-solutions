SELECT
RANK() OVER (ORDER BY SUM(points) DESC) AS rank,
COALESCE(NULLIF(clan, ''), '[no clan specified]') AS clan,
SUM(points) AS total_points,
COUNT(name) AS total_people
FROM people
GROUP BY clan
ORDER BY total_points DESC;

--RANK() OVER (ORDER BY SUM(points) DESC): Присваивает ранги каждому клану на основе их общей суммы очков.
--COALESCE(NULLIF(clan, ''), '[no clan specified]'): Заменяет пустое имя клана на строку "[no clan specified]".