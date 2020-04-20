import React from 'react';
import { Card, CardText, Row, Col } from 'reactstrap';

const LeaderBoard = () => {
  return (
    <div className ="container" style={{border: '2px solid #A9A9A9',marginTop: '40px', width:'600px' }}>
    <Row>
      <Col sm="3">
            <Row style={{marginLeft:2, marginTop:25}}>
               <img className="avatar" src='user.png' height="100" width="100" alt='Sign in' ></img>
            </Row>
            <Row style={{marginLeft:3,marginTop:10}}>
            <Card body >
            <CardText className="center"><strong style={{fontSize:'20px'}}>Rank-1</strong></CardText>
            </Card>
            </Row>
              
      </Col>
      <Col sm="9" >
         
        <Card body>
         <Row>
             <Col sm="8"  >
             <Row style={{marginRight:1}}>
                 <Card body>

                    <CardText className="center"><strong style={{fontSize:'20px'}}>Aditya Prakash</strong></CardText>
                    </Card>
                 </Row>
                 <Row style={{marginRight:1}}>
                 <Card body >

                     <CardText className="mr-auto"><strong>Answered Questions:        7</strong></CardText>
                  
                     </Card>
                 </Row>
                 <Row style={{marginRight:1}}>
                 <Card body >

                     <CardText className="mr-auto"><strong>Unanswered Questions:   3</strong></CardText>
                     </Card>
                 </Row>

             </Col>
             <Col sm="4">
                 <Row>
                 <Card body style={{background:'gray'}}>

                     <CardText className="center"><strong>Score</strong></CardText>
                     </Card>
                 </Row>
                 <Row>
                 <Card body style={{background:'skyBlue'}}>
                   <CardText className="center"><strong>10</strong></CardText> 
                     
                  </Card>

                 </Row>
                

             </Col>
         </Row>
        </Card>
      </Col>
    </Row>
    </div>
  );
};

export default LeaderBoard;