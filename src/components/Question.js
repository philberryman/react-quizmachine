import React from 'react';

class Question extends React.Component {

    componentDidMount() {
        console.log('Step 1: calling fetchQuestion')
        this.props.fetchQuestion()
    }

  render(){

    //   console.log(this.props.question.incorrect_answers)
    //   if (this.props.question.incorrect_answers) {
    //     const answers = this.props.question.incorrect_answers.push(this.props.question.correct_answer)
    //     console.log(answers)
    //   }

    return (
      <div>
          <p>{this.props.question.length>0?this.props.question:''}</p>
      </div>
    )
  }
}

export default Question;
