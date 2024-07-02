import { useControlledState } from "../../hooks/useControllableState"
import { getMonthlyDate, getWeekDays } from "./utils/date"

interface CalenderProps {
  value?: Date
  onChange?: (value: Date) => void
}

const Calender = ({ value, onChange }: CalenderProps) => {
  const [selectedDate = new Date(), _] = useControlledState({
    prop: value,
    onChange,
  })
  const weekdays = getWeekDays("ko-KR")
  const weeklyDate = getMonthlyDate(selectedDate, 0)

  return (
    <table>
      <caption>
        {selectedDate.getFullYear()}/{selectedDate.getMonth()}
      </caption>
      <thead>
        <tr>
          {weekdays.map(({ key, value }) => {
            return <th key={key}>{value}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {weeklyDate.map(({ key, value: week }) => {
          return (
            <tr key={key}>
              {week.map(({ key, value }) => {
                return <td key={key}>{value.getDate()}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Calender

//달력을 header,body로 나눈다
//header는 현재 년,월,요일을 나타내는 용
//요일의 경우 사용하는 언어포맷에 따라 나타낼 수 있으면 좋을거같음

//body는 일 나타내기
