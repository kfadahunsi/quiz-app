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
        {!begun && <Button onClick={handleBegin}>Begin Quiz</Button>}
        {begun && <Question/>}
    </div>
  )
}
