import React, {useState} from 'react'
import ReactDom from 'react-dom'

import { Provider, useSelector, useDispatch } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './rootReducer'

import FiveHundredMillionButton from './component/FiveHundredMillionButton.jsx'

const store = createStore(rootReducer)

const App = () => {
  const year = useSelector(state => state.year)
  const dispatch = useDispatch()
  // TODO 年、日、時間、分、秒に分けて出す
  return (
    <>
      <p>
        あと{year}年
      </p>
      <p>
        <FiveHundredMillionButton label="100万円" onClick={fiveHundredMillion => dispatch({
          type : 'SET_YEAR',
          year : fiveHundredMillion + year
        })} />
      </p>
    </>
  )
}

ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
