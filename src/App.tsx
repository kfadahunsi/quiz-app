import Create from "./components/Create";
import Header from "./components/Header";
import Stage from "./components/Stage";
import { ThemeProvider } from "@/components/theme-provider"

export function App() {
    return(
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <div className="flex flex-col w-screen h-screen">
                <Header/>
                {/* <Stage/> */}
                <Create/>
            </div>
        </ThemeProvider>
    )
}

export default App;