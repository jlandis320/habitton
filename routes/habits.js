import { Router } from 'express'
const router = Router()

import * as habitsCtrl from "../controllers/habits.js"

router.get('/', habitsCtrl.index)

router.get('/new', habitsCtrl.new)

router.get('/:id', habitsCtrl.show)

router.get('/:id/edit', habitsCtrl.edit)

router.post("/", habitsCtrl.create)

router.put("/:id", habitsCtrl.update)

export {
  router
}