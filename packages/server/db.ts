import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { Theme } from './models/Theme'

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
  process.env

export const createClientAndConnect = async (): Promise<Sequelize | null> => {
  try {
    const isDev = process.env.NODE_ENV === 'development'
    const sequelizeOptions: SequelizeOptions = {
      username: String(POSTGRES_USER),
      host: isDev ? 'localhost' : 'postgres',
      database: String(POSTGRES_DB),
      password: String(POSTGRES_PASSWORD),
      port: Number(POSTGRES_PORT),
      dialect: 'postgres',
    }
    const sequelize = new Sequelize(sequelizeOptions)

    sequelize.addModels([Theme])

    await sequelize.authenticate()
    await sequelize.sync() //{force: true}

    console.log('  ➜ 🎸 Connected to the database success')

    return sequelize
  } catch (e) {
    console.error(e)
  }

  return null
}
