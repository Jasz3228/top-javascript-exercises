const findTheOldest = function(people) {
  return people.sort((a, b) => {
    // Calculate a's age (handle undefined yearOfDeath)
    const ageA = a.yearOfDeath ? (a.yearOfDeath - a.yearOfBirth) :
      (new Date().getFullYear() - a.yearOfBirth);

    // Calculate b's age
    const ageB = b.yearOfDeath ? (b.yearOfDeath - b.yearOfBirth) :
      (new Date().getFullYear() - b.yearOfBirth);

    return ageB - ageA;
  })[0];
}

// Do not edit below this line
module.exports = findTheOldest;
