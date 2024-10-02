SELECT
    s.id AS student_id,
    s.name,
    (c_science.score - c_math.score) AS score_difference
FROM students s
JOIN courses c_math
    ON s.id = c_math.student_id
JOIN courses c_science
    ON s.id = c_science.student_id
WHERE c_math.course_name = 'Math'
  AND c_science.course_name = 'Science'
  AND c_science.score > c_math.score
ORDER BY score_difference DESC, s.id;