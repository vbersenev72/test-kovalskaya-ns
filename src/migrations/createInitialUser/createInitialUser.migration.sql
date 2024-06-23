DELETE FROM
    users
WHERE
    id = 1;

INSERT INTO
    users (id, balance, "createdAt", "updatedAt")
values
    (1, 10000, NOW(), NOW());