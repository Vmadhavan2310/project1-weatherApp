import ReactLoading from "react-loading";
import './Spinner.css'

export default function Spinner() {
  return (
    <div>
        <ReactLoading
        type="bubbles"
        color="darkblack"
        height={100}
        width={110}
        className="spinners"
      />
    </div>
  )
}
