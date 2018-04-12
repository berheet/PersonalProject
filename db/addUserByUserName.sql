INSERT INTO users (userid, nickname) VALUES ($1, $2);
SELECT * FROM users WHERE userid = $1;