/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Monday, 
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

enum Wends {
  
}

function isWeekend(day: Days): string {
  if ( day === Days.Saturday || day === Days.Sunday){
    return 'It is weekend'
  } else {
    return 'It is workday'
  }
}