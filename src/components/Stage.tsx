import { useState } from "react";
import { Button } from "./ui/button";
import Question from "./Question";


export default function Stage() {
    const [begun, setBegun] = useState(false)
    function handleBegin(){
        setBegun(true)
    }

  return (
    <div className="h-full flex justify-center items-center">
        {!begun && <Button onClick={handleBegin} className="animate-in fade-in slide-in-from-bottom-full duration-500-in">Begin Quiz</Button>}
        {begun && <Question setBegun={setBegun}/>}
    </div>
  )
}
