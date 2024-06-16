const weekdays = {
  "en-US": {
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    weekStartDay: 0, // 일요일부터 시작
  },
  "ko-KR": {
    days: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ],
    weekStartDay: 0, // 일요일부터 시작
  },
  "fr-FR": {
    days: [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ],
    weekStartDay: 1, // 월요일부터 시작
  },
} as const

export const isDate = (date: unknown) => {
  if (date instanceof Date === false) {
    throw new Error(`${date}의 형식이 Date 객체가 아닙니다 `)
  }
  return date
}

const getYear = (date: Date) => isDate(date).getFullYear()

const getMonth = (date: Date) => isDate(date).getMonth()
/**Day는 0에서 6까지로 일~토를 나타냄 */
const getDay = (date: Date) => isDate(date).getDay()

/**특정 달의 첫번째 날(1일)에 해당하는 Date 객체를 리턴하는 함수 */
export const getFirstDateOfMonth = (date: Date): Date => {
  const [year, month] = [getYear(date), getMonth(date)]
  return isDate(new Date(year, month, 1))
}

/**특정 달의 마지막 날이 몇일인지 구하는 함수 */
export const getLastDateOfMonth = (date: Date): Date => {
  const [year, month] = [getYear(date), getMonth(date)]
  return isDate(new Date(year, month + 1, 0))
}

/**요일 시작 기준에 따라 특정 달의 첫번째 날(1일)의 index를 구하는 함수 */
export const getFirstIndexOfMonth = (
  date: Date,
  weekStartDay: number = 0,
): number => {
  const startDay = getDay(getFirstDateOfMonth(date))

  return weekStartDay - startDay > 0
    ? 7 - (weekStartDay - startDay)
    : -(weekStartDay - startDay)
}

export const getNumberOfWeeks = (date: Date, weekStartDay: number = 0) =>
  (getFirstIndexOfMonth(date, weekStartDay) +
    getLastDateOfMonth(date).getDate()) /
  7

export const getWeekDays = (locale: keyof typeof weekdays = "ko-KR") => {
  const { days, weekStartDay } = weekdays[locale]
  const formatter = new Intl.DateTimeFormat(locale, { weekday: "long" })
  const newWeekDays = days.reduce(
    (acc, _, i) => {
      const index =
        i - weekStartDay >= 0 ? i - weekStartDay : 7 + (i - weekStartDay)
      acc[index] = { key: i, value: formatter.format(new Date(0, 0, i)) }
      return acc
    },
    [] as { key: number; value: string }[],
  )

  return newWeekDays
}

export const getWeeklyDate = (startDate: Date, currentMonth: number) =>
  Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startDate) //startDate와 참조값이 다른 date 객체
    date.setDate(startDate.getDate() + i)

    return {
      key: `daily_${i}_${date}`,
      value: date,
      status:
        currentMonth === getMonth(date)
          ? ("THIS_MONTH" as const)
          : ("OTHER_MONTH" as const),
    }
  })

export const setFirstDate = (date: Date) => {
  isDate(date).setDate(1)
  return date
}

/** 2*2 배열로 날짜 데이터를 구하는 함수 */
export const getMonthlyDate = (
  date: Date,
  weekStart: number,
  showFixedNumberOfWeeks?: number,
) => {
  const numberOfWeeks =
    showFixedNumberOfWeeks ?? getNumberOfWeeks(date, weekStart) // 출력될 달의 주 수

  // 달력에 출력될 첫번째 날짜를 구한다. (이전/현재/다음 달 상관없이)
  date.setDate(1)
  const monthlyStartDate = setFirstDate(new Date(date)) //인자로 들어온 date와 값은 같지만, 참조가 다름
  monthlyStartDate.setDate(1 - getFirstIndexOfMonth(date, weekStart)) //현재 월의 1일 전에 몇일이 존재하는지

  return Array.from({ length: numberOfWeeks }, (_, i) => {
    const newDate = new Date(monthlyStartDate)
    newDate.setDate(monthlyStartDate.getDate() + 7 * i)

    return {
      key: `weekly_${i + 1}_${date}`,
      value: getWeeklyDate(newDate, getMonth(date)),
    }
  })
}
