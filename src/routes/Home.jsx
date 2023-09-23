import Header from "../components/Title";
import LinkComponent from "../components/Link";
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
            I'm a <span className='font-bold'>**Graduate Software Engineer**</span> at <LinkComponent to="https://wise.com" name="Wise"/>
          </p>

          <br/>

          <p className='text-left'>
            Some projects I've worked on:
          </p>
          <p className='text-left ml-4'>
            - <LinkComponent to="/lab-monitor" name="Lab Monitor" />
          </p>
          <p className='text-left ml-4'>
            - <LinkComponent to="/advent" name="Advent of Code" />
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