/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Wdays {
  Monday, 
  Tuesday,
  Wednesday,
  Thursday,
  Friday
}

enum Wends {
  Saturday,
  Sunday
}

function isWeekend(day: Wdays | Wends): string {
  if ( day === Wends.Saturday || Wends.Sunday){
    return 'It is weekend'
  } else {
    return 'It is workday'
  }
}