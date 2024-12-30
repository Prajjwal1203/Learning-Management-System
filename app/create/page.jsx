"use client"
import React, { useState } from 'react'
import SelectOption from './_components/SelectOption'
import { Button } from '@/components/ui/button';
import TopicInput from './_components/TopicInput';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';



function Create() {
  const[step,setstep] = useState(0);

  const[formData,setFormData] = useState([]);
  //const handleUserInput = (fieldName,)
  const {user} = useUser();

  const handleUserInput=(fieldName,fieldValue)=>{
    setFormData(prev=>({
      ...prev,
      [fieldName]:fieldValue
    }))

    console.log(formData)
  }

  const GenerateCourseOutline=async()=>{
    const courseId=uuidv4();
    try{
      const result = await axios.post('/api/generate-course-outline',{
        courseId:courseId,
        ...formData,
        createdBy:user?.primaryEmailAddress?.emailAddress
      });
  
      console.log(result);

    }catch(error)
    {
      console.error(error);
    }
    

  }
  return (
    <div className='flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20'>
      <h2 className='font-bold text-4xl text-primary'>Start Building Your Personalized Study Material</h2>
      <p className='text-gray-500 text-lg'>Fill all the details in order to generate study material for your course</p>

      < div className='mt-10'>
       {  step==0?   <SelectOption selectedStudyType={(value)=>handleUserInput('studyType',value)}></SelectOption>
       : <TopicInput setTopic={(value)=>handleUserInput('topic',value)}
       setDifficultyLevel={(value)=>handleUserInput('difficulty level',value)}></TopicInput>} 
      </div>


      <div className='flex justify-between w-full mt-32'>
       {step!=0? <Button variant='outline' onClick={()=>setstep(step-1)}>Previous</Button>:'-'}
       {step==0? <Button onClick={()=>setstep(step+1)}>Next</Button> : <Button onClick={GenerateCourseOutline}>Generate</Button>} 
      </div>
      
    </div> 
  )
}

export default Create