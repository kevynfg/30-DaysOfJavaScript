class Student extends Person {
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here
  constructor(firstName, lastName, idNumber, scores) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.scores = scores;
  }

  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here

  calculate() {
    const result = this.scores.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
    const averageScores = result / this.scores.length;
    if (averageScores >= 90 && averageScores <= 100) {
      return 'O';
    } else if (averageScores >= 80 && averageScores < 90) {
      return 'E';
    } else if (averageScores >= 70 && averageScores < 80) {
      return 'A';
    } else if (averageScores >= 55 && averageScores < 70) {
      return 'P';
    } else if (averageScores >= 40 && averageScores < 55) {
      return 'D';
    } else {
      return 'T';
    }
  }
}
