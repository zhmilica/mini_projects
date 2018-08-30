
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  //Getters 
  get name() {
    return this._name;
  }
  
  get level() {
    return this._level;
  }
  
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} at the ${this._level} level.`);
  }
  
  static pickSubstituteTeacher(substituteTeachers) {
    let randomIndex = Math.floor(Math.random() * substituteTeachers.length );
    console.log(substituteTeachers[randomIndex]);
  }
  
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') { 
    this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number');
      }
     }   
   }

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }  
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;    
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

//Instances of Primary School and High School

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parentt, guardian, or a family member over the age of 13');

lorraineHansbury.quickFacts();

PrimarySchool.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams); //['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
