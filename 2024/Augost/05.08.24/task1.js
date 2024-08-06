    ///task 1 
    let person = {
        name: "ofer",
        age: 30,
        isStudent: true
    }
    console.log(person.name , person.age);
    person.isStudent = false;
    console.log(person.isStudent);
    
    //task 2
    let car = {
        make: "ford",
        model: "focus",
        year: 2017
    }
    console.log("make- " + car.make , "model- " + car.model);
    car.year = 2016;
    console.log(car.year);
    
    //task 3 
    let fruit = {
        name: "orange",
        color: "orange",
        sweetness: 8
    }
    console.log(fruit.name , fruit.sweetness);
    fruit.color = "yelloish";
    console.log(fruit.color);

    //task 4
    let book = {
        title: "daVinki",
        author: "yoMama",
        pages: 420
    }
    console.log(book.author , book.title);
    book.pages = 470;
    console.log(book.pages);
    
    // task 5
    let animal = {
        species: "canine",
        sound: " boorf",
        isCute: false
    }
    console.log(animal.species , animal.sound);
    animal.isCute = true;
    console.log("are dogs cute ? " + animal.isCute);

    //task 6 
    const smartPhone = {
        brand: "google",
        model: "pixel 6a",
        storageGB: 128
    }
    console.log(smartPhone.storageGB , smartPhone.brand);
    smartPhone.model = "pixel 8 ";
    console.log(smartPhone.model);

    //task 7
    /////////////////////////////////////////////////////

let student = {
    name: "Alice",
    age: 20,
  };
  
  // TODO: Write a function to add a new property to the student object
  function addProperty(student, key, value) {
    student[key] = value;
  }
  
  // addProperty(student, "grade", "A");
  // console.log("Updated Student:", student);
  
  /////////////////////////////////////////////////////
  //task 8 
  let products = [
    { name: "Laptop", price: 1000, sizes: ["M", "L"], isAvailable: true },
    { name: "Mouse", price: 2500, sizes: ["S", "M"], isAvailable: false },
    { name: "Keyboard", price: 52, sizes: ["L", "XL"], isAvailable: true },
  ];

  function getAvailableSizes(products) {
    const sizes = [];
    for( let i = 0 ; i < products.length ; i ++){
        if(products[i].isAvailable){
            for(let j = 0 ; j <products[i].sizes.length ; j++ ){
                if(!sizes.includes(products[i].sizes[j]))
                    sizes.push(products[i.sizes[j]])
            }
        }
    }
    return sizes; 
  }
  
  // let sizes = getAvailableSizes(products);
  // console.log("Available Sizes:", sizes);
  
  /////////////////////////////////////////////////////
  //task 9 
  /////////////////////////////////////////////////////

let school = {
    name: "Greenwood High",
    address: {
      city: "Springfield",
      zip: "12345",
    },
    students: [
      { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
      { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
    ],
  };
  
  // TODO: Write a function to update a student's grade in a subject
  function updateStudentGrade(school, studentId, subject, newGrade) {
    let short = school.students;
    for ( let i = 0 ; i < short.length ; i ++){
        if(short[i].id === studentId){
            short[i].grades.subject = new newGrade;
            return;

        }

    }
  }
  
  // updateStudentGrade(school, 1, "math", 90);
  // console.log("Updated School:", school);
  
  /////////////////////////////////////////////////////
  /// task 10
  /////////////////////////////////////////////////////

let orders = [
    { id: 1, product: "Laptop", status: "delivered" },
    { id: 2, product: "Mouse", status: "pending" },
    { id: 3, product: "Keyboard", status: "delivered" },
    { id: 4, product: "Monitor", status: "pending" },
    { id: 5, product: "Laptop", status: "shipped" },
  ];
  
  // TODO: Write a function to return an array of only delivered orders
  function getDeliveredOrders(orders) {
    let storage = [];
    for( let i = 0 ; i <orders.length ; i ++){
        if(orders[i].status === "delivered")
            storage.push(orders[i]);
    }
    return storage;
  }
  
  // let deliveredOrders = getDeliveredOrders(orders);
  // console.log("Delivered Orders:", deliveredOrders);
  
  function countProductOccurrences(orders) {
    const count = [];
    for (let i = 0 ; i <orders.length ; i++){
        if(!count[orders[i].product]){
            count[orders[i].products] = 1;
        }
        else count[orders[i].products]++;
    }
    return count 
  }
  
  // let productCounts = countProductOccurrences(orders);
  // console.log("Product Counts:", productCounts);
  //
  // task 11
  let student2 = {
    name: "ifer",
    grades: [30 , 80 , 92 , 94 , 85]
  }
  function calculateAverage(){
    let avg = 0;
    let count = 0 ;
    for (let i = 0 ; i <student2.grades.length ; i++){
        avg += student2[grades[i]];
        count++;
        console.log(count);
    }
    avg = (avg/count) ;
    return avg;
  }
  let x = calculateAverage(student2);
  function getLetterGrade(){
    

  }

