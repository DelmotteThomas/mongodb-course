let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");

	
db = db.getSiblingDB('technocite');
// SE connecter a la base de donnees technocite Si elle n'existe pas elle sera créee
// IDEM que use dans le shell mongo


// INSERT INTO students(name) VALUES ("Jean Sébastien")
const inserted = db.formators.insertOne({
    name:"Gilles Dupont",
});


const insertedMany = db.formators.insertMany({
    name:"Gilles Dupont",
},
{
    name:"Fred Gérard",
},
{
    name:"Gilles François",
}
);

console.log(inserted);