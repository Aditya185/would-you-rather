import React from 'react';
import { Card, Button, CardTitle, Row, Col, Label,Input } from 'reactstrap';

const QuestionPoll = () => {
  return (
    <div  style={{border: '2px solid #A9A9A9',margin:'auto',marginTop: '40px', width:'600px' }}>
    <Card body >
        <CardTitle><strong>Aditya asks:</strong></CardTitle>
    <Row>
      <Col sm="3">
            <Row style={{marginLeft:2, marginTop:25}}>
               <img className="avatar" src='user.png' height="100" width="100" alt='Sign in' ></img>
            </Row>
          
              
      </Col>
      <Col sm="9" >
         
        <Card body>
         <CardTitle><strong>Would You Rather</strong></CardTitle>
         <Label check style={{marginLeft:10}}>
            <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
          <Label check style={{marginLeft:10}}>
            <Input type="radio" name="radio2" />{' '}
            Option two is this and that—be sure to include why it's great
          </Label>
         <Button style={{display: 'block',width: '100%',border: 'none', backgroundColor: '#4CAF50', padding: '14px 28px',fontSize: '16px', cursor: 'pointer', textAlign: 'center',marginBottom:'20px',marginTop:'30px'}}>Submit</Button>
        </Card>
      </Col>
    </Row>
    </Card>
    </div>
  );
};

export default QuestionPoll;