let students = [
  { id: "1", name: "omer", grade: 100 },
  { id: "2", name: "avi", grade: 40 },
  { id: "3", name: "gaga", grade: 80 },
];

function getValues(array, key) {
  let cont = [];
  for (let i = 0; i < array.length; i++) {
    cont.push(array[i][key]);
  }
  return cont;
}
// console.log(getValues(students, "id"));

function getGrades(array, minGrade) {
  let cont = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].grade > minGrade) {
      cont.push(array[i]);
    }
  }
  return cont;
}
// console.log(getGrades(students, 70));
// let names = [ "yossi" , "liraz" , "baba"]

function createPersons(names){
    let persons = [];
        for(let i = 0 ; i<names.length ; i++){
            let temp = { name: names[i] , id: i + 1};
            persons.push(temp);
        }
    return persons;
}
// console.log(createPersons(["yossi" , "liraz" , "baba"]));

let employees = [
    { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
    { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
    { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
    { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
    { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
    { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
  ];

console.log(groupBy(employees , "department"));
function groupBy(array , key){
    let group = {};

    for(let i = 0 ; i<array.length ; i++){
        let item = array[i];
        let groupKey = item[key];
        if(group[groupKey] === undefined){
            group[groupKey] = [];
        }
        group[groupKey].push(item);
    }

    return group;
}