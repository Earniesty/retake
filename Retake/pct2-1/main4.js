//Homework
const students = [
    { id: 1, name: "John Lee" },
    { id: 10, name: "adam Smith" },
    { id: 100, name: "Ann Smith" },
    { id: 2, name: "julia Smith" },
  ];
  //sorting by id (ascending, descending)
  //sorting by name (ascending, descending) ` ดูจาก ascii code
  
  console.log(students.sort((std1, std2) => std1.id - std2.id));
  console.log(students.sort((std1, std2) => std2.id - std1.id));
  console.log(
    students.sort((std1, std2) => {
      const name1 = std1.name.toLowerCase();
      const name2 = std2.name.toLowerCase();
      if (name1 > name2) return 1;
      else if (name1 < name2) return -1;
  
      return 0;
    })
  );
  // console.log(students.sort((std1, std2) => std2.name  std1.name));
  