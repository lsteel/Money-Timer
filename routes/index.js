'use strict'

import express from 'express'
import timePunches from './time-punches'

const { Router } = express
const api = new Router()

api.use('/time-punches', timePunches)

export default api
