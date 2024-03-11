import express from 'express'
import { changeTheme, getTheme } from './ThemeController'

export const initControllers = () => {
  const router = express.Router()

  router.get('/api/get_theme', getTheme)
  router.post('/api/change_theme', changeTheme)

  return router
}
