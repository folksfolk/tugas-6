//  Jawaban Nomor 1

var luasLingkaran = (r) => {
    const pi = 3.14
     return pi * r * r;
  }
  console.log(luasLingkaran(4));
  
  var kelilingLingkaran = (r) => {
    let pi = 3.14
     return 2 * pi * r;
  }
  console.log(kelilingLingkaran(4));

// Jawaban Nomor 2

let kalimat = ""

const tambahKata = (str) => {
  kalimat = `${kalimat} ${str}`
}

tambahKata("saya")
tambahKata("adalah")
tambahKata("seorang")
tambahKata("frontend")
tambahKata("developer")

console.log(kalimat)

// Jawaban Nomor 3


newFunction = (firstName, lastName) => {
    return {
      firstName: firstName,
      lastName: lastName,
      fullName: function(){
        console.log(firstName + " " + lastName)
      }
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName() 
  
// Jawaban Nomor 4

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
  
console.log(`${newObject.firstName}, ${newObject.lastName}, ${newObject.destination}, ${newObject.occupation}, ${newObject.spell}`);
  
// Jawaban Nomor 5

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...east, ...west];

//Driver Code
console.log(combined)