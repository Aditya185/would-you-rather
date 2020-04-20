import React from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';

const Results = () => {
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
         <CardTitle><strong>Results</strong></CardTitle>
            <Row>
                <Card body>
                    <CardTitle>Would you rather</CardTitle>
                </Card>
            </Row>
        </Card>
      </Col>
    </Row>
    </Card>
    </div>
  );
};

export default Results;