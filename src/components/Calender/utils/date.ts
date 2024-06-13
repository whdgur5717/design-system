type Day = {
  key: string
  value: Date
  status: "THIS_MONTH" | "OTHER_MONTH"
}

export const getCalender = (current: Date) => {
  const curMonthStartDate = new Date(
    current.getFullYear(),
    current.getMonth(),
    1,
  ).getDay() //현재월의 시작요일

  const curMonthEndDate = new Date(
    current.getFullYear(),
    current.getMonth() + 1,
    0,
  ) //현재 월의 마지막날을 구하려면 그 다음월의 0일을 구하면됨

  const prevMonthEndDate = new Date(
    current.getFullYear(),
    current.getMonth(),
    0,
  ) //이번달의 0일 === 저번달 마지막날

  const nextMonthStartDate = new Date(
    current.getFullYear(),
    current.getMonth(),
    +1,
    1,
  ) //현재달 +1한 달의 1일

  //curMonthStartDate가 3이라는 건 앞에 0 1 2가 존재한다는 소리

  const days: Day[] = Array.from({ length: curMonthStartDate }, (_, i) => {
    const date = new Date(
      current.getFullYear(),
      current.getMonth() - 1,
      prevMonthEndDate.getDate() - i,
    )
    return {
      key: `${date}`,
      value: date,
      status: "OTHER_MONTH" as const,
    }
  }).reverse() //전달 짤린값들

  days.push(
    //이번달 1일~마지막날까지 값들 넣기
    ...Array.from({ length: curMonthEndDate.getDate() }, (_, i) => {
      const date = new Date(current.getFullYear(), current.getMonth(), i + 1)
      return {
        key: `${date}`,
        value: date,
        status: "THIS_MONTH" as const,
      }
    }),
  )

  const remainingDays = 7 - (days.length % 7) //다음달로 채워야됨
  console.log(days.length, remainingDays)
  if (remainingDays < 7) {
    days.push(
      ...Array.from({ length: remainingDays }, (_, i) => {
        const date = new Date(
          nextMonthStartDate.getFullYear(),
          nextMonthStartDate.getMonth(),
          i + 1,
        )
        return { key: `${date}`, value: date, status: "OTHER_MONTH" as const }
      }),
    )
  }
  return days
}

//4로 나누기만하면 되는거아닌가
