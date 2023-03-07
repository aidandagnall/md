import { Link } from "react-router-dom";
import Header from "../components/Title";
import 'animate.css'

function Home() {
    return (
        <>
          <Header text={[
            "# Hi, I'm Aiden",
            "# Hi, I'm Aidan :wave:",
            "# Hi, I'm Aidan 👋"
          ]} className="text-slate-900 dark:text-white"/>

          <div className="animate__animated animate__fadeInUp animate__delay-3s">

          <br/>
          <p className='text-left'>
            I'm a <span className="font-bold">**Computer Science**</span> student at the University of Nottingham.
          </p>

          <br/>

          <p className='text-left'>
            Some projects I've worked on:
          </p>
          <p className='text-left ml-4'>
            - [[<Link to="/lab-monitor" className="text-blue-600 dark:text-blue-400">Lab Monitor</Link>]]
          </p>
          <p className='text-left ml-4'>
            - [[<Link to="/advent" className="text-blue-600 dark:text-blue-400">Advent of Code</Link>]]
          </p>

          <br/>
          <p className="text-left">
            <a href="https://github.com/aidandagnall/" className="text-blue-600 dark:text-blue-400">GitHub</a> |
            <a href="https://twitter.com/aidandagnall" className="text-blue-600 dark:text-blue-400"> Twitter</a> |
            <a href="https://linkedin.com/in/aidandagnall/" className="text-blue-600 dark:text-blue-400"> LinkedIn</a>
          </p>
          </div>
        </>
    )
}

export default Home;