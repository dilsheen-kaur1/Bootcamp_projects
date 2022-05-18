import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FeedbackProvider } from './context/FeedbackContext';
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './Pages/AboutPage';
import Post from './components/Post';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    //to add new feedback with old feedback
    setFeedback([newFeedback, ...feedback])
  }
  return (
    <FeedbackProvider>
    <Router>
      <Header text="Feedback UI" bgColor='red' textColor='red' />
      <div className="container">
        <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm handleAdd={addFeedback} />
              <FeedbackStats />
              <FeedbackList />
            </>
          }>

          </Route>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/post*' element={<Post />} />
          {/* Asterisck is used if we wanna show something at a parricular url. In this case post/show shows h1 tag */}
        </Routes>
        <AboutIconLink />
      </div>

      {/* <Header text="Feedback"/> text will be received as a prop
          <Header text={true}/> if we have to pass a number or boolean value for props we pass it in curly braces*/ }

    </Router>
    </FeedbackProvider>

  )
}

export default App