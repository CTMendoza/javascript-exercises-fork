const getAge = function (birthDate, deathDate) {
    if (!deathDate) {
      deathDate = new Date().getFullYear();
    }
    return deathDate - birthDate;
  };

const findTheOldest = function(people) {
    return people.reduce((firstPerson, currentPerson) => {
        const oldestAge = getAge(firstPerson.yearOfBirth, firstPerson.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        if (oldestAge < currentAge) {
            return currentPerson;
        } else {
            return firstPerson;
        }
}) 
};

// Do not edit below this line
module.exports = findTheOldest;
