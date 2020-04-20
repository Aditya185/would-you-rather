import React from 'react';
import { Card, Button, CardTitle, Row, Col, CardSubtitle } from 'reactstrap';

const Question = () => {
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
         <CardSubtitle>become a superhero..</CardSubtitle>
         <Button style={{display: 'block',width: '100%',border: 'none', backgroundColor: '#4CAF50', padding: '14px 28px',fontSize: '16px', cursor: 'pointer', textAlign: 'center',marginBottom:'20px',marginTop:'30px'}}>View Poll</Button>
        </Card>
      </Col>
    </Row>
    </Card>
    </div>
  );
};

export default Question;