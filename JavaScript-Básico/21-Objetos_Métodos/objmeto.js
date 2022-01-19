function mediaAluno() {
  return (this.grades[0] + this.grades[1]) / 2;

}
 
var aluno = {
  name: "Bruno",
  grades: [7, 9],

  media: mediaAluno
}

var aluno1 = {
  name: "Afonso",
  grades: [10, 2],

  media: mediaAluno

}

 console.log(aluno.media());
 console.log(aluno1.media()); 