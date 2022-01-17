 function mediaAluno() {
    return (this.grades[0] + this.grades[1]) / 2;

 }
 
 var aluno = {
   name: "Bruno",
   grades: [7, 9],

   media: mediaAluno
 }

 console.log(aluno.media());