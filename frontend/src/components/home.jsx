import { useEffect } from "react"
import Intro from "./intro"
import NavBar from "./navBar"
import Quote from "./quote"
import AboutMe from './aboutMe'
const Home = ()=>{

    useEffect(()=>{
        document.title = 'Aceybooks | where creativity never fades away'
    })
    return(
        <>
             <NavBar />
             <Intro />
             <Quote />
             <AboutMe />
        </>
    )
}

export default Home