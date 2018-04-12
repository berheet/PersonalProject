update users set name = $1, age=$2, gender=$3, height=$4, currentweight=$5, goalweight=$6, activitylevel=$7, goal=$8
 where id = $9
 returning *