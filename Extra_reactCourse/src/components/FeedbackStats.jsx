import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback} = useContext(FeedbackContext)
    let average = feedback.reduce((acc, curr)=>{
        return acc + curr.rating
    },0) / feedback.length

    //tofixed: average till 1 decimal place
    //replace(/[.,]0$/, ''): don't like  8.0 or 9.0
    average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired
// }
export default FeedbackStats