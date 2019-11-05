import React, {useState} from 'react'
import ReactDom from 'react-dom'

import FiveHundredMillionButton from './component/FiveHundredMillionButton.jsx'

const App = () => {
  const [years, setYears] = useState(0)
  // TODO 年、日、時間、分、秒に分けて出す
  return (
    <>
      <p>
        あと{years}年
      </p>
      <p>
        <FiveHundredMillionButton label="100万円" onClick={fiveHundredMillion => setYears(fiveHundredMillion + years)} />
      </p>
    </>
  )
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
)
