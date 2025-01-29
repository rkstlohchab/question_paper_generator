"use client"

import { useEffect, useState } from "react";
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Textarea } from "./ui/textarea"
import { Card } from "./ui/card" // Make sure to import Card from your UI components
import { Button } from "./ui/button";
import { GenerateQuestionPaper } from "@/configs/AImodel";
import QuestionResponse from "./questionsRes";
import { redirect } from "next/navigation";

interface FormData {
  courseOutcomes: string;
  bloomsLevel: string;
  topic: string;
  questionType: string;
  numberOfQuestions: string;
}

const Fields = () => {
  const [formData, setFormData] = useState<FormData>({
    courseOutcomes: '',
    bloomsLevel: '',
    topic: '',
    questionType: '',
    numberOfQuestions: ''
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (fieldName: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const generatePaper = async () => {

    setLoading(true);
    const BASIC_PROMPT ="generate question with the following data and also provide answers :"
    const USER_INPUT_PROMPT="\ncourse outcomes - "+formData.courseOutcomes+",\nblooms taxonomy level - "+formData.bloomsLevel+" ,\ntopic - "+formData.topic+" ,\nquestion type - "+formData.questionType+" and long (250 - 600 words) ,\nnumber of questions - "+formData.numberOfQuestions
    const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT;


    const result = await GenerateQuestionPaper.sendMessage(FINAL_PROMPT);

    const parsedResult = JSON.parse(await result.response?.text());
    console.log("parsed resutl",parsedResult.questions);


    <QuestionResponse questions={parsedResult.questions} />

    setLoading(false);

    // redirect('/showPaper');
  }


  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Card className="w-full max-w-2xl mx-auto p-6 rounded-lg bg-white">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Question Paper Requirements</h2>
          
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Course Outcomes</label>
              <Textarea 
                placeholder="Enter course outcomes here..." 
                value={formData.courseOutcomes}
                onChange={(e) => handleInputChange('courseOutcomes', e.target.value)}
                className="min-h-[100px] resize-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Bloom's Level</label>
              <Select 
                value={formData.bloomsLevel}
                onValueChange={(value) => handleInputChange('bloomsLevel', value)}
              >
                <SelectTrigger className="w-full focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Select Bloom's Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remember">Remember</SelectItem>
                  <SelectItem value="understand">Understand</SelectItem>
                  <SelectItem value="apply">Apply</SelectItem>
                  <SelectItem value="analyze">Analyze</SelectItem>
                  <SelectItem value="evaluate">Evaluate</SelectItem>
                  <SelectItem value="create">Create</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Topic</label>
              <Input 
                placeholder="Enter topic" 
                value={formData.topic}
                onChange={(e) => handleInputChange('topic', e.target.value)}
                className="focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Question Type</label>
              <Select 
                value={formData.questionType}
                onValueChange={(value) => handleInputChange('questionType', value)}
              >
                <SelectTrigger className="w-full focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Select Question Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mcq">MCQ</SelectItem>
                  <SelectItem value="short">Short</SelectItem>
                  <SelectItem value="long">Long</SelectItem>
                  <SelectItem value="mix">Mix</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Number of Questions</label>
              <Input 
                placeholder="Enter number of questions" 
                type="number" 
                value={formData.numberOfQuestions}
                onChange={(e) => handleInputChange('numberOfQuestions', e.target.value)}
                className="focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <Button className="mt-6" onClick={generatePaper}>Generate Paper</Button>

        </div>
      </Card>
    </div>
  )
}

export default Fields