var employeeOfTheMonth = {
    name: 'Jakub Blaszczykowski',
    salary: 12000
  }
  console.log(employeeOfTheMonth.salary);
  
  // Spre deosebire de primitive, in cadrul unei functii, obiectele sunt transmise prin referinta (by reference), adica nu se face o copie a obiectului, ci se trimite obiectul original (vezi diagrama copiere obiecte).
  // Care este problema care poate aparea? Daca moficam proprietati ale obiectului pasat ca parametru in interiorul functiei, aceste modificari vor fi vizibile si in exterior!
  function testSalary(employee) {
    employee.salary = 5000;
  }
  testSalary(employeeOfTheMonth);
  
  console.log(employeeOfTheMonth.salary);