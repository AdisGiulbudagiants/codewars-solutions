SELECT dna, TRANSLATE(dna,'ATCG','TAGC') AS res FROM dnastrand

--Функция TRANSLATE сразу выполняет замену каждого символа в строке:
--'A' меняется на 'T'
--'T' меняется на 'A'
--'C' меняется на 'G'
--'G' меняется на 'C'