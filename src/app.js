import React, {useState} from 'react'
import ReactDom from 'react-dom'

import FiveMillionButton from './component/FiveMillionButton.jsx'

const App = () => {
  const [years, setYears] = useState(0)
  // TODO 年、日、時間、分、秒に分けて出す
  return (
    <>
      <p>
        あと{years}年
      </p>
      <p>
        <FiveMillionButton label="100万円" onClick={fiveMillion => setYears(fiveMillion + years)} />
      </p>
    </>
  )
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
)