let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");

	
db = db.getSiblingDB('technocite');


// INSERT INTO students(name) VALUES ("Jean Sébastien")
const students = db.students.find({
    name:"Jean Sébastien"
});




console.log(students);