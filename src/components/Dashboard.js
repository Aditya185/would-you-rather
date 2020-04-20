import React from 'react';
import {  Button,  Row, Col } from 'reactstrap';

const Dashboard = () => {
  return (
      <div>
    <div className ="container" style={{border: '2px solid #A9A9A9',marginTop: '40px', width:'600px' }}>
    <Row style={{margin:'auto'}}>
      <Col sm="6">
      <Button style={{display: 'block',width: '100%',border: 'none', backgroundColor: '#4CAF50', padding: '14px 28px',fontSize: '16px', cursor: 'pointer', textAlign: 'center',marginBottom:'20px',marginTop:'30px'}}>Answered Questions</Button>  
              
      </Col>
     
      <Col sm="6" >
      <Button style={{display: 'block',width: '100%',border: 'none', backgroundColor: '#4CAF50', padding: '14px 28px',fontSize: '16px', cursor: 'pointer', textAlign: 'center',marginBottom:'20px',marginTop:'30px'}}>Unanswered Questions</Button>
        
      </Col>
    </Row>
    </div>
    <div className ="container" style={{border: '2px solid #A9A9A9', width:'600px' }}>
        hello
    </div>
    </div>

  );
};

export default Dashboard;