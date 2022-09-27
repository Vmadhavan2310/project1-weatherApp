import ReactLoading from "react-loading";
import './Loading.css'

export default function LoadingBar() {
  return (
    <div className="App">
        <ReactLoading
        type="bars"
        color="white"
        height={100}
        width={110}
        className="spinners"
      />
    </div>
  )
}
