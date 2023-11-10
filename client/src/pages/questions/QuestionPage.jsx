import React from 'react'
import Questions from '../../components/Questions/Questions'
import QuestionPageInfo from '../../components/questionPageInfo/QuestionPageInfo'
import './questionPage.css'
const QuestionPage = () => {
  return (
    <div className='questionPage'>
        <div className='questionPageComponents'>
            <QuestionPageInfo></QuestionPageInfo>
            <Questions></Questions>
        </div>
    </div>
  )
}

export default QuestionPage