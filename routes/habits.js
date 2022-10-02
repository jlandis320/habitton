import { Router } from 'express'
const router = Router()

import * as habitsCtrl from "../controllers/habits.js"

router.get('/', habitsCtrl.index)

router.get('/new', habitsCtrl.new)

router.post("/", habitsCtrl.create)

export {
  router
}