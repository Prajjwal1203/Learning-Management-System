import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const USER_TABLE = pgTable('users',{
  id:serial().primaryKey(),
  userName:varchar().notNull(),
  email:varchar().notNull(),
  isMember:boolean().default(false),
   
})

export const STUDY_MATERIAL_TABLE=pgTable('studymaterial',{
  id:serial().primaryKey(),
  courseId:varchar().notNull(),
  courseType:varchar().notNull(),
  topic:varchar().notNull(),
  difficultyLevel:varchar().default('Easy'),
  courseLayout:json(),
  createdby:varchar().notNull(),

})