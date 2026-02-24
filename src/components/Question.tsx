import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "./ui/card";

const questionList = [
    {
        number: 1,
        question: "what is my favourite drink?",
        options: ["don julio", "hennessey", "captain morgan", "belvedere"],
        answer: "captain morgan",
    },
    {
        number: 2,
        question: "who is my favourite artist?",
        options: ["travis scott", "young thug", "future", "lil wayne"],
        answer: "lil wayne",
    },
    {
        number: 3,
        question: "what is my favourite food",
        options: ["pounded yam","pancakes", "pork chops", "suya",],
        answer: "pancakes",
    }
]

const colourClasses = {
    wrong: "bg-red-500",
    correct: "bg-green-500",
    primary: "--primary",
}

type Colour = "wrong" | "correct" | "primary"


export default function Question() {

    const [index, setIndex] = useState(0)
    const [answer, setAnswer] =useState("")
    const [selected, setSelected] = useState(false)
    const [completed, setCompleted] = useState(false)
    const [tally, setTally] = useState(0)
    const [colour, setColour] = useState<Colour>("primary")
    const [ansIndex, setAnsIndex] = useState(-1)

    const currentQuestion =  index
    const maxIndex = index === questionList.length -1
    const showNext = selected && !maxIndex

    function handleNext(){
        setIndex((prev)=>(prev+1))
        setSelected(false)
        setColour("primary")
    }

    function handleAnswer(answer: string, i: number){
        if(selected){
            return
        }
        setSelected(true)
        setAnswer(answer)
        if(answer === questionList[currentQuestion].answer){
            setTally((prev)=>(prev+1))
            setColour("correct")
            setAnsIndex(i)
        }else{
            setAnsIndex(i)
            setColour("wrong")
        }
        //console.log("this was the selected answer:", answer)

    }

    function handleFinish(){
        setCompleted(true)
/*         setAnswer("")
        setSelected(false)
        setIndex(0) */

    }

  return (
    <div className="flex flex-col w-full items-center lg:h-full lg:pt-20">
        {!completed ?     
        <Card className="w-11/12 lg:w-6/12 lg:h-8/12">
            <CardHeader>
                <CardTitle>Question {questionList[currentQuestion].number}</CardTitle>
                <p className="text-end">Score: {tally}</p>
                <h2 className="text-center">{questionList[currentQuestion].question}</h2>
            </CardHeader>
            <CardAction className="flex flex-col gap-1 items-center w-full">
                {questionList[currentQuestion].options.map((answer, i)=> (<Button className={i === ansIndex ? colourClasses[colour] : colourClasses["primary"]} key={i} onClick={()=>(handleAnswer(answer, i))}>{answer}</Button>))}  
            </CardAction>
            <CardAction className=" w-full flex justify-end">
                {showNext && <Button className="bg-blue-400 mr-5" onClick={handleNext}>Next</Button>}
                {maxIndex && <Button className="bg-blue-400 mr-5" onClick={handleFinish}>Finish</Button>}
            </CardAction>
        </Card> : 
        <Card className="w-11/12 lg:w-6/12 lg:h-8/12">
            <CardHeader>
                <CardTitle className="text-center">THAT'S ALL FOLKS!</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
                <p className="text-center">FINAL SCORE: {tally}/{questionList.length}</p>
                <img className="h-40" src="/confetti-montego.gif" alt="confetti" />
                {completed && <Button className="mt-5">Return home</Button>}
            </CardContent>
        </Card>
    }
    </div>
  )
}
