import "../styled-system/styles.css"
import { GlobalSVGProvider } from "./sprite"
function App() {
  return (
    <>
      <GlobalSVGProvider />
      <div>
        <svg width="16" height="16">
          <use href={`#kakao`} />
        </svg>
      </div>
    </>
  )
}

export default App
