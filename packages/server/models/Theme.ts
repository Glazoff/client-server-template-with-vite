import { Column, DataType, Model, Table } from 'sequelize-typescript'

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'theme',
})
export class Theme extends Model<Theme> {
  @Column({
    type: DataType.INTEGER,
    field: 'theme_id',
    primaryKey: true,
    autoIncrement: true,
  })
  override id!: number

  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
    allowNull: false,
  })
  userId!: number

  @Column({
    type: DataType.STRING,
    field: 'theme_name',
    allowNull: false,
  })
  titleTheme!: string
}
