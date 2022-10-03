import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

import * as habitsCtrl from "../controllers/habits.js"

router.get('/', isLoggedIn, habitsCtrl.index)

router.get('/new', isLoggedIn, habitsCtrl.new)

router.get('/:id', isLoggedIn, habitsCtrl.show)

router.get('/:id/edit', isLoggedIn, habitsCtrl.edit)

router.post("/", isLoggedIn, habitsCtrl.create)

router.put("/:id", isLoggedIn, habitsCtrl.update)

router.delete("/:id", isLoggedIn, habitsCtrl.delete)

export {
  router
}