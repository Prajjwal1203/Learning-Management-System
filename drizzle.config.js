import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url:'postgresql://neondb_owner:QDxjZ2S0CfgK@ep-ancient-truth-a5ycplw1.us-east-2.aws.neon.tech/neondb?sslmode=require'
  }
});
