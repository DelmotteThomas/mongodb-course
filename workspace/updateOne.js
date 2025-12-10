let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");

db = db.getSiblingDB('technocite');

const students = db.students.find();

console.log(students);


const premierEtudiantId = students.toArray()[0]._id;

// UPDATE students SET courses = ["Java", "C#", "Mysql"]
const updateResult = db.students.updateOne({
    _id: premierEtudiantId
}, {
    $set: {
        courses: ["Java", "C#", "Mysql"]
    }
});

console.log(updateResult);