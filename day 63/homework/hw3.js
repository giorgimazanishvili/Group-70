const student = {
  score: 80,
  
  checkstudent() {
    if (this.score >= 50){
       return "passed"
    } else {
      return "failed"
    }
  } 
}

console.log (student.checkstudent())