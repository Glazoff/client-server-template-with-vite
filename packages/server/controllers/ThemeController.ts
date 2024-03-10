import type { Request, Response } from 'express'
import { Theme } from '../models/Theme'

export const getTheme = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId

    if (!userId) {
      res.status(404).send('User id not found')
      return
    }

    const theme = await Theme.findOne({
      where: {
        userId: userId,
      },
    })

    res.status(200).json(theme)
  } catch {
    res.status(500).send('Internal Server Error')
  }
}

export const changeTheme = async (req: Request, res: Response) => {
  try {
    const data = req.body as {
      titleTheme: string
      userId: number
    } & any

    if (!data) {
      res.status(404).send('Empty body')
      return
    }

    await Theme.update(data, {
      where: {
        userId: data.userId,
      },
    })

    res.status(200).send('OK')
  } catch {
    res.status(500).send('Internal Server Error')
  }
}
