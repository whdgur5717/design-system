import { useState } from "react"
import { getMonthlyDate } from "../utils/date"

export const useCalender = (date?: Date) => {
  const [currentDate, setCurrentDate] = useState(date || new Date())
  const data = getMonthlyDate(currentDate, 0)
  return { currentDate, setCurrentDate, data }
}
