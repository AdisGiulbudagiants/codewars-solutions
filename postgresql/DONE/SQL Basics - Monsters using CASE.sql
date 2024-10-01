SELECT id, heads, legs, arms, tails,
  CASE
      WHEN heads > arms OR tails > legs THEN 'BEAST'
      ELSE 'WEIRDO'
  END AS species
FROM top_half
JOIN bottom_half USING(id)
ORDER BY species;