'use strict'

import request from 'axios'

const createTimePunchRequest = (timePunch) => ({
  type: 'TIMEPUNCH_CREATE_REQUEST',
  payload: timePunch
})
const createTimePunchSuccess = (timePunch) => ({
  type: 'TIMEPUNCH_CREATE_SUCCESS',
  payload: timePunch
})
const createTimePunchFailure = (err) => ({
  type: 'TIMEPUNCH_CREATE_FAILURE',
  payload: err,
  error: true
})

export const createTimePunch = (name) => (dispatch) => {
  const timePunch = {
    name,
    completed: false
  }
  dispatch(createTodoRequest(todo))
  request
    .post('api/timePunches', timePunch)
    .then((response) => {
      dispatch(createTimePunchSuccess(response.data))
    })
    .catch((response) => {
      dispatch(createTimePunchFailure(response.data))
    })
}
