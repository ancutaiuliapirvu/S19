var movie1 = {
    name: 'E.T',
    price: 32
  };
  
  var movie2 = {
    name: 'E.T.',
    price: 32
  };
  
  // ATENTIE! Doua obiecte create separat nu vor fi niciodata egale, chit ca au acelasi continut.
  console.log(movie1 === movie2);
  
  // Totusi, daca un obiect este creat prin pasarea celuilalt ca referinta, vor fi egale!
  var movie3 = movie1;
  console.log(movie1 === movie3);
  
  console.log("Problema copiere prin referinta:")
  // Avem o problema cu crearea unui obiect prin referentierea celuilalt.
  console.log(movie3.price);
  movie3.price = 48;
  console.log(movie3.price);
  console.log(movie1.price);
  // In memorie, ambele obiecte impart acelasi spatiu. Daca unuia i se modifica vreo valoare, si celuilalt i se va modifica.
  
  console.log("Copiere prin Object.assign:")
  // Cum rezolvam aceasta problema?
  // Cu metoda Object.assign. Primul parametru e un obiect gol, cel de-al
  // doilea obiectul are carui proprietati sunt copiate. Rezultatul va fi salvat intr-o variabila.
  var movie4 = Object.assign({}, movie1);
  console.log(movie4.price);
  movie4.price = 56;
  console.log(movie4.price);
  console.log(movie1.price);
  