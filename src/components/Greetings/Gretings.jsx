import "./Gretings.css"

function Gretings(props){
  return(
    <div className="greeting-wrapper">
        <h1 className="greeting-tittle">Dobro dosli na moj sajt {props.appName}</h1>
        <h2 className="greeting-subtitle">{props.fullName}</h2>
    </div>
  )
}

export default Gretings