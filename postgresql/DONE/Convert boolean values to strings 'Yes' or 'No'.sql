SELECT bool,
    CASE
        WHEN bool = TRUE THEN 'Yes'
        ELSE 'No'
    END AS res
FROM booltoword;
 