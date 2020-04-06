function Person(fname, lname, age, weight, hobbies) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.weight = weight;
  this.hobbies = hobbies;
}
Person.prototype.checkAge = function() {
  if (this.age > 20) {
    return `${this.fname} is old enough to drink alcohol.`;
  }
  return `${this.fname} is NOT old enough to drink alcohol.`;
};

const jill = new Person("Jill", "Stevens", 12, 100);
const karla = new Person("Karla", "Bishop", 21, 125);
console.log(jill.checkAge());
console.log(karla.checkAge());
