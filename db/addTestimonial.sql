insert into testimonials(name, rating, message, image) values($1, $2, $3, $4)
 returning *