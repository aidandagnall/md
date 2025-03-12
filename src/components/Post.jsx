import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Title";
import 'animate.css'

function Post(props) {
  let navigate = useNavigate();
  return (
    <div className="mb-16">
      <Link onClick={() => navigate(-1)} className="text-blue-600 dark:text-blue-400 mb-4">&lt;- Back</Link>
      <div className="my-4">
        <Header text={[
          props.title
        ]} className="text-slate-900 dark:text-white" />
      </div>
      <div className="animate__animated animate__fadeInUp animate__delay-1s">
        {props.children}
      </div>
    </div>
  )
}

export default Post;
