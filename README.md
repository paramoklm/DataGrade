HOW TO INITIALISE DATA CLUSTER

$ initdb -D $PWD/postgres_data
$ sh launch_server.sh

HOW TO START POSTGRES

$ psql postgres

TABLES:

student: id and name of student

module: refferred to student, id, name and coeff

(RECURSIVELY ...)

subject

eval_group: ex -> dm, qcm

grade
