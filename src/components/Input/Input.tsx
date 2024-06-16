import { forwardRef } from "react"
import Slot from "../Slot/Slot"
import Slottable from "../Slot/Slottable"

const Input = forwardRef((props, ref) => {
  return (
    <Slot>
      <div>뭔데</div>
      <Slottable>
        <div>ㄴㅇㄴㅇㄹ</div>
      </Slottable>
    </Slot>
  )
})

export default Input

//input은 기본으로 있고,
