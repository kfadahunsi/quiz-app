import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { Card, CardTitle } from "./ui/card"
import { X } from "lucide-react"
import type { QuestionList } from "@/helpers/types"

const fakeQuestions = [
    {
    id: 1,
    question: "what is my favourite food?",
    options: ["a", "b", "c", "d",], 
    answer: null,
    },
    {
    id: 2,
    question: "what is my favourite drink?",
    options: ["a", "b", "c", "d",], 
    answer: null,
    },
    {
    id: 3,
    question: "what is my favourite movie?",
    options: ["a", "b", "c", "d",], 
    answer: null,
    },
]

export default function Create() {
    const [name, setName] = useState("")
    const [saved, setSaved] = useState(false)
    const [questions, setQuestions] = useState<QuestionList>(fakeQuestions)
    const [correctAns, setCorrectAns] = useState<number|null>(null)

    function handleName(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>){
        setName(e.target.value)
    }

    function handleSaved(){
        setSaved(true)
    }

    function handleOption(id: number, index: number, newValue:string){
    setQuestions(
        questions.map((question) => {
            if (question.id === id) {
                return {
                    ...question,
                    options: question.options.map((option, i) =>
                        i === index ? newValue : option
                    ),
                }
            }
            return question
        })
    )
    console.log(questions)
    }

    function handleQuestion(index: number, newValue:string){
        const newArr = questions.map((item, i)=>{
            if(i === index){
                return {
                    ...item, 
                    question: newValue,
                }
            } else{
                return item
            }
        })
        setQuestions(newArr)

    }

    function handleRadio(optionNo: number){
        setCorrectAns(optionNo)
        console.log("this was the chosen anser: ", correctAns)
    }

  return (
    <div className="h-full overflow-y-auto flex flex-col items-center w-full">
        {saved || 
        <div className="flex justify-center gap-1.5 my-5">
            <Input className="w-8/12 lg:w-8/12" type="text" placeholder="enter name" value={name} onChange={handleName}/>
            <Button onClick={handleSaved}>Save</Button>
        </div>}
        {saved && 
        <div className="flex flex-col items-center mt-10">
            <h2 className="mb-5">{name}'s Quiz</h2>
            <p className="text-center">Fill in the question in the question box and possible answer options, then select which option is correct</p>
        </div>}
        {saved && 
        <div className="flex flex-col items-center w-full">
           {questions.map((question, index)=>(
            <Card key={question.id} className="flex flex-col items-center my-5 w-11/12 lg:w-4/12">
                <CardTitle>Question {index+1}</CardTitle>
                <Textarea  className="w-8/12 resize-none lg:w-8/12 border-[#279dcd]" value={question.question} onChange={(e)=>(handleQuestion(index, e.target.value))}/> 
                <div className="flex flex-col items-center w-full">
                    {question.options.map((option, optIndex)=>(
                        <div key={optIndex} className="flex gap-2 items-center">
                            <input type="radio" name={`corect-${index}`} checked={correctAns === optIndex} onChange={()=>(handleRadio(optIndex))} />
                            <Input value={option}  onChange={(e)=>(handleOption(question.id, optIndex, e.target.value))} className="w-10/12 my-1 border-[#c88767]"/>
                            {/* <X size={12}/> */}
                        </div>
                    ))}
                </div>
            </Card>
           ))} 
        </div>}
        {saved && <Button className="mt-10">Submit</Button>}
    </div>
  )
}
