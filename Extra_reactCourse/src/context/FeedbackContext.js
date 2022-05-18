import { createContext, useState } from "react";

const FeedbackContext = createContext();

//a provider
export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This term is from context',
            rating: 10
        }
    ])

    const deleteFeedback = (id) => {
        //to delete feedback
        if (window.confirm('Are you sure you want to delete')) {
          setFeedback(feedback.filter((item) => item.id !== id))
        }
    
      }

    //values are any states or functions we want to pass
    return (
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;