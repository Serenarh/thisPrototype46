function Person(fname, lname, age, weight, hobbies) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.weight = weight;
  this.hobbies = hobbies;

  if (this.fname === "Jill") {
    this.hobbies = ["knitting", " running", " and baseball."];
  } else if (this.fname === "Karla") {
    this.hobbies = ["judo", " baking", " and reading."];
  } else {
    this.hobbies = ["welding", " drawing", " and painting."];
  }
}
Person.prototype.checkAge = function() {
  if (this.age > 20) {
    return `${this.fname} is old enough to drink alcohol.`;
  }
  return `${this.fname} is NOT old enough to drink alcohol.`;
};

Person.prototype.getInfo = function() {
  return `${this.fname} ${this.lname} is ${this.age} years old and weighs ${this.weight} pounds. Her hobbies are ${this.hobbies}`;
};

const jill = new Person("Jill", "Stevens", 12, 100);
const karla = new Person("Karla", "Bishop", 21, 125);

console.log(jill.getInfo());
console.log(karla.getInfo());

console.log(jill.checkAge());
console.log(karla.checkAge());
