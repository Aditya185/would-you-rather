import React from 'react';
import { Button, Form, FormGroup,  Input } from 'reactstrap';

export default class NewQuestion extends React.Component{

    render(){
        return(
            <div className ="container" style={{border: '2px solid #A9A9A9',marginTop: '40px', width:'600px' }}>
     <Form>
     <FormGroup tag="fieldset" >
        <legend className="center" style={{fontStyle:'italic',fontSize:'30px'}}>Create New Question</legend>
        </FormGroup>
        <FormGroup tag="fieldset" >
        <normal  style={{fontStyle:'bold' ,fontSize:'15px'}}>Complete the Question:</normal>
        </FormGroup>
        <FormGroup tag="fieldset" >
        <strong  style={{fontStyle:'bold' ,fontSize:'25px'}}>Would you Rather..</strong>
        </FormGroup>
      <FormGroup>
        <Input type="text" name="option1" id="option1" placeholder="Enter Option 1 Text Here" />
      </FormGroup>
      <FormGroup tag="fieldset" >
        <legend className="center" style={{fontStyle:'italic',fontSize:'30px'}}>OR</legend>
        </FormGroup>
      <FormGroup>
        <Input type="text" name="option2" id="option2" placeholder="Enter Option 2 Text Here" />
      </FormGroup>
     
      <Button style={{display: 'block',width: '100%',border: 'none', backgroundColor: '#4CAF50', padding: '14px 28px',fontSize: '16px', cursor: 'pointer', textAlign: 'center',marginBottom:'20px'}}>Submit</Button>
    </Form>
    </div>

        )
    }

}