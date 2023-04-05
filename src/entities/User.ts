import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
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
  @Column({ type: "text" })
  firstname!: string;

  @Field()
  @Column({ type: "text" })
  middlename: string;

  @Field()
  @Column({ type: "text" })
  lastname!: string;

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
  @Column({ default: true })
  status: boolean;

  @Field(() => Role)
  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @Column({ type: "text", default: "halisia" })
  password: string;
}
