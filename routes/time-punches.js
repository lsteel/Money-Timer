'use strict'

import express from 'express'

const { Router } = express
const timePunchesRouter = new Router()

const timePunches = []

timePunchesRouter.get('/', (req, res, next) => {
  res.json(timePunches)
})

export default timePunchesRouter
