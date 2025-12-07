const user = {
  age: 14,
  checkAge () {
    if (this.age >= 18){
      return "შენ ხარ სრულწლოვანი"
    } else {
      return "შენ არ ხარ სრულწლოვანი"
    }
  }
}
console.log (user.checkAge())