'use strict'

import express from 'express'

const { Router } = express
const timePunchesRouter = new Router()

const timePunches = []

timePunchesRouter.get('/', (req, res, next) => {
  res.json(timePunches)
})

timePunchesRouter.post('/', (req, res, next) => {
  if (!req.body.startTime) {
    return next(new Error('You must include a `name` in the body'))
  }
  if (typeof req.body.startTime !== 'string') {
    return next(new Error('The `name` property must be a string'))
  }

  let newTimePunchId = timePunches.push({
    startTime: req.body.startTime,
  })

  res.json(timePunches[newTimePunchId])
})

export default timePunchesRouter
