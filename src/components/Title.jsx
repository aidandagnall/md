import { TypedHeader } from './Typed'
function Header(props) {
  return (
    <pre>
      <h1 className="text-3xl text-left">
        <TypedHeader strings={props.text} />
      </h1>
    </pre>
  )
}

export default Header;
