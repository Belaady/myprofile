import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;


  class AppContact extends React.Component {
    constructor(props){
      super(props)

      this.handleSubmit= this.handleSubmit.bind(this);
      this.verifyCallback= this.verifyCallback.bind(this)
    }

    handleSubmit(){
        alert('You have successfully submitted!');
  
    }

    verifyCallback(response){
      if(response){
        this.setState({
          isVerified:true
        })
      }
    }

    

    render(){
    return (
      <div id="contact" className="block contactBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Get in Touch</h2>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="fullname"
              rules={[
                { 
                  required: true,
                  message: 'Please enter your full name!' 
                }]
              }
            >
              <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input placeholder="Email Address"/>
            </Form.Item>
            <Form.Item
              name="telephone"
            >
              <Input placeholder="Telephone" />
            </Form.Item>
            <Form.Item
              name="subject"
            >
              <Input placeholder="Subject" />
            </Form.Item>
            <Form.Item
              name="message"
            >
              <TextArea placeholder="Message" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.handleSubmit} className="login-form-button">
                Submit
              </Button>
              
            </Form.Item>
          

          </Form>

        </div>
      </div>  
    );
  }
}


export default AppContact;