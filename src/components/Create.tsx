import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Card, CardTitle } from "./ui/card"
import { Radio } from "@base-ui/react"
import { X } from "lucide-react"

const fakeQuestions = [
    {
    number: 1,
    question: "what is my favourite food?",
    options: ["a", "b", "c", "d",], 
    },
    {
    number: 2,
    question: "what is my favourite drink?",
    options: ["a", "b", "c", "d",], 
    },
    {
    number: 3,
    question: "what is my favourite movie?",
    options: ["a", "b", "c", "d",], 
    },
]

export default function Create() {
    const [name, setName] = useState("")
    const [saved, setSaved] = useState(false)

    function handleName(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>){
        setName(e.target.value)
    }

    function handleSaved(){
        setSaved(true)
    }

  return (
    <div className="h-full overflow-y-auto flex flex-col items-center w-full">
        {saved || 
        <div className="flex justify-center gap-1.5 my-5">
            <Input className="w-4/12 lg:w-88/12" type="text" placeholder="enter name" value={name} onChange={handleName}/>
            <Button onClick={handleSaved}>Save</Button>
        </div>}
        {saved && 
        <div className="flex flex-col items-center mt-10">
            <h2 className="mb-5">{name}'s Quiz</h2>
            <p className="text-center">Fill in the question in the question box and possible answer options, then select which option is correct</p>
        </div>}
        {saved && 
        <div className="flex flex-col items-center w-full">
           {fakeQuestions.map((question, index)=>(
            <Card key={index} className="flex flex-col items-center my-5 w-11/12 lg:w-4/12">
                <CardTitle>Question {index+1}</CardTitle>
                <Textarea  className="w-8/12 resize-none lg:w-8/12 border-[#279dcd]" placeholder={question.question}/> 
                <div className="flex flex-col items-center w-full">
                    {question.options.map((option, index)=>(
                        <div key={index} className="flex gap-2 items-center">
                            <input type="radio" name="correct"/>
                            <Input placeholder={option} className="w-10/12 my-1 border-[#c88767]"/>
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
