import Header from "./components/Header";
import Stage from "./components/Stage";

export function App() {
    return(
        <div className="flex flex-col w-screen h-screen">
            <Header/>
            <Stage/>
        </div>
    )
}

export default App;