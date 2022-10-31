const students = [
  {
    name: 'Carlos',
    firstPoint: 9,
    secondPoint: 7
  },
  {
    name: 'Ricardo',
    firstPoint: 6,
    secondPoint: 4
  },
  {
    name: 'Ana Lúcia',
    firstPoint: 6,
    secondPoint: 9
  },
  {
    name: 'Debora',
    firstPoint: 5,
    secondPoint: 4
  },
  {
    name: 'Eslen',
    firstPoint: 9,
    secondPoint: 10
  }
]

function calculatorAverage(firstPoint, secondPoint) {
  return (firstPoint + secondPoint) / 2
}

for (const student of students) {
  if (calculatorAverage(student.firstPoint, student.secondPoint) >= 7) {
    alert(
      `A média do(a) aluno(a) ${student.name} é de: ${calculatorAverage(
        student.firstPoint,
        student.secondPoint
      )}\nParabéns, você passou.`
    )
  } else
    alert(
      `A média do(a) aluno(a) ${student.name} é de: ${calculatorAverage(
        student.firstPoint,
        student.secondPoint
      )}\nQue pena, tente novamente.`
    )
}
