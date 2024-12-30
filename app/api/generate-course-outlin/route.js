import {  courseOutlineAIModel } from "@/configs/AiModel";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { NextResponse } from "next/server";
import {db} from "@/configs/db";

export async function POST(req)
{
  const{courseId,topic,courseType,difficultyLevel,createdBy}=await req.json();

  const PROMPT = 'Generate a study material for'+topic+ 'for'+courseType+ 'and level of difficulty will be '+difficultyLevel+' with summary of course ,List of chapters along with summary for each chapter,Topic list in each chapter,all result in JSON Format'
  const aiResp = await courseOutlineAIModel.sendMessage(PROMPT);
  const aiResult= JSON.parse(aiResp.response.text());

  const dbResult = await db.insert(STUDY_MATERIAL_TABLE).values({
    courseId:courseId,
    courseType:courseType,
    createdBy:createdBy,
    topic:topic,
    courseLayout:aiResult
  }).returning({STUDY_MATERIAL_TABLE})

  console.log(dbResult);



   return NextResponse.json({result:dbResult[0]})
}