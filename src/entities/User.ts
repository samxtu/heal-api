import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Role } from "./Role";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt = new Date();

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt = new Date();

  @Field()
  @Column({ type: "text", unique: true })
  name!: string;

  @Field()
  @Column({ type: "text", unique: true })
  email: string;

  @Field()
  @Column({ type: "text", unique: true })
  phone: string;

  @Field()
  @Column({ type: "text" })
  location: string;

  @Field()
  @Column({ type: "bigint" })
  maxCredit: number;

  @Field()
  @Column({ type: "int" })
  creditDays: number;

  @Field()
  @Column({ default: true })
  credit: boolean;

  @Field()
  @Column({ default: true })
  status: boolean;

  @Field()
  @Column({ type: "bigint", default: 0 })
  balance: number;

  @Field()
  @Column({ type: "bigint", default: 0 })
  salary: number;

  @Field()
  @Column({ type: "int" })
  roleId: number;

  @Field(() => Role)
  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @Column({ type: "text", default: "halisia" })
  password: string;
}
