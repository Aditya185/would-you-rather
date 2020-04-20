import React from 'react';
import { Card, Button, CardTitle, Row, Col, Label,Input } from 'reactstrap';
import {handleAddQuestionAnswer} from '../actions/shared';
import {Redirect} from "react-router-dom";
import PageNotFound from "./Page404";
import {connect} from 'react-redux';




class QuestionPoll extends React.Component{

      state = {
        selectedOption: '',
        submittedAnswer: false
    };

    handleSubmit(e, questionId) {
        e.preventDefault();

        const {dispatch} = this.props;
        const {selectedOption} = this.state;

        dispatch(handleAddQuestionAnswer(questionId, selectedOption));

        this.setState(() => ({
          selectedOption: '',
          submittedAnswer: true
        }));
    }

    handleInputChange = (e) => {
        const text = e.target.value;

        this.setState(() => ({
          selectedOption: text
        }));
    };

  render(){
    const {selectedOption, submittedAnswer} = this.state;
    const {id, question, author, pageNotFound} = this.props;

    if (pageNotFound === true) {
        return <PageNotFound/>;
    }

    const redirectTo = `/question/${id}/results`;

    if (submittedAnswer === true) {
        return <Redirect to={redirectTo}/>;
    }
  return (
    <div  style={{border: '2px solid #A9A9A9',margin:'auto',marginTop: '40px', width:'600px' }}>
    <form onSubmit={(e) => this.handleSubmit(e, id)} >
    <Card body >
        <CardTitle><strong>{author.name} asks:</strong></CardTitle>
    <Row>
      <Col sm="3">
            <Row style={{marginLeft:2, marginTop:25}}>
               <img className="avatar" src={author.avatarURL} height="100" width="100" alt='Sign in' ></img>
            </Row>
          
              
      </Col>
      <Col sm="9" >
         
        <Card body>
         <CardTitle><strong>Would You Rather</strong></CardTitle>
         <Label check style={{marginLeft:10}}>
            <Input type="radio" name="radio1"   id="optionOne" value="optionOne"
                                 onChange={this.handleInputChange}/>{' '}
             {question.optionOne.text}
          </Label>
          <Label check style={{marginLeft:10}}>
            <Input type="radio" name="radio2" id="optionTwo"
                                               value="optionTwo"
                                               onChange={this.handleInputChange}/>{' '}
             {question.optionTwo.text}
          </Label>
         <Button type = "submit"style={{display: 'block',width: '100%',border: 'none', backgroundColor: '#4CAF50', padding: '14px 28px',fontSize: '16px', cursor: 'pointer', textAlign: 'center',marginBottom:'20px',marginTop:'30px'}}>Submit</Button>
        </Card>
      </Col>
    </Row>
    </Card>
    </form>
    </div>
  );
  }
};

function mapStateToProps({auth, questions, users, match}, props) {
  const {id} = props.match.params;

  let pageNotFound = true;
  let author = "";
  let specificQuestion = "";

  if (questions[id] !== undefined) {
      pageNotFound = false;
      specificQuestion = questions[id];
      author = users[specificQuestion['author']];
  }

  return {
      id,
      question: specificQuestion,
      author: author,
      authedUser: auth.loggedInUser.id,
      pageNotFound: pageNotFound
  }
}

export default connect(mapStateToProps)(QuestionPoll);