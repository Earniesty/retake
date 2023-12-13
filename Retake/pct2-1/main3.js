class Person {
    constructor(firstName, lastName, dateOfBirth) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dateOfBirth = dateOfBirth;
    }
    getFullName() {
      return `${this.lastName}, ${this.firstName}`;
    }
    getAge() {
      const milliToday = Date.now() //millisecond of today
      //The getTime() method of Date instance return the number of millisecond
      const milliBirthDate = this.dateOfBirth.getTime() //number of millisecond of this.dateOfBirth
      const diffMilli = milliToday - milliBirthDate
      const dateOfBirth = new Date(diffMilli)
      return dateOfBirth.getFullYear() - 1970
      }
    
    isEqual(anotherPerson){
      return this.firstName?.toLowerCase() === anotherPerson.firstName.toLowerCase() &&
      this.lastName?.toLowerCase() === anotherPerson?.lastName?.toLowerCase()
    }
    toString() {
      return `${this.getFullName()} ${this.getAge()}`
    }
  }
   
  const p1 = new Person('Thanachanok', 'Banjongjinda', new Date(2004,1,9))
  console.log(p1);
  console.log(p1.getAge());
  console.log(p1.getFullName());
  console.log(p1.toString());
  console.log(p1.isEqual(new Person('Umaporn', 'Sup', new Date(1999, 1, 10))));
  