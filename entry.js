import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

const initialState = {val: 10}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return Object.assign({}, state, {val: state.val + 1})
    default:
      return state
  }
}

const store = createStore(reducer, initialState)

const App = ({ val, inc }) => (
  <p>
    It works! {val}<br/>
    <button role="button" onClick={inc}>
      Click to inc
    </button>
  </p>
)

App.propTypes = {
  val: PropTypes.number,
  inc: PropTypes.func
}

const Container = connect(
  state => ({
    val: state.val
  }),
  dispatch => ({
    inc: () => dispatch({type: 'INC'})
  })
)(App)

render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
)
