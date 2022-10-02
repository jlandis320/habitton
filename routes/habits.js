import { Router } from 'express'
const router = Router()

import * as habitsCtrl from "../controllers/habits.js"

router.get('/', habitsCtrl.index)

export {
  router
}