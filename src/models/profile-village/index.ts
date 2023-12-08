import { Model, Column, Table, DataType } from "sequelize-typescript";

@Table
class ProfileVillage extends Model<{ name: string }> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id!: string;

  @Column({ allowNull: false })
  name!: string;
}

export default ProfileVillage;
