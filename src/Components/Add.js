import React, { useState } from 'react'
import {Button, Form, Toast} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import std from './Student';
import {v4 as uuid} from 'uuid';
import {Link, useNavigate} from 'react-router-dom';
import toast from 'toast-me'
import '../Components/edit.css';

function Add(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [mobile, setMobile] = useState('');
 const[validated,setvalidated] =useState(false)

    let history = useNavigate();

    const handleSubmit = (e) =>{
            const form = e.currentTarget;
        if (form.checkValidity() === false) {
              e.preventDefault();
              e.stopPropagation();
              setvalidated(true);
        }else{
     
            e.preventDefault();
            const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name;
        let b = email;
        let c = gender;
        let d = hobbies;
        let f = mobile;

        std.push({id: uniqueId, name : a, email : b, gender: c, hobbies: d, mobile: f});
            toast('Student Added successfully')
        history('/');
        }
     

        
        
    }

    const handleCancel = (e) => {
        e.preventDefault();
        history('/');
    }

    return <div>
        <span style={{fontSize:'30px',fontWeight:'700',color:'lightblue'}}>Add Student</span>
        <Form className='d-grid gap-2' style={{margin: '3rem'}} noValidate validated={validated}>
            
            <p class="form-p">Name</p>
            <Form.Group className='mb-3' controlId='formName'>
            <Form.Control type='text' placeholder='Enter Name' required onChange={(e) => {setName(e.target.value)}} controlId="validationCustom01" aria-describedby="inputGroupPrepend">
            </Form.Control >
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <p class="form-p">Email</p>
            <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Control type='text' placeholder='Enter Email' required onChange={(e) => {setEmail(e.target.value)} }>
            </Form.Control>
            </Form.Group>
            
            <p class="form-p">Gender</p>
            <Form.Group className='mb-3' controlId='formGender'>
            <Form.Control type='text' placeholder='Enter Gender' required onChange={(e) => {setGender(e.target.value)} }>
            </Form.Control>
            </Form.Group>

            <p class="form-p">Hobbies</p>
            <Form.Group className='mb-3' controlId='formHobbies'>
            <Form.Control type='text' placeholder='Enter Hobbies' required onChange={(e) => {setHobbies(e.target.value)} }>
            </Form.Control>
            </Form.Group>

            <p class="form-p">Mobile</p>
            <Form.Group className='mb-3' controlId='formMobile'>
            <Form.Control type='text' placeholder='Enter Mobile' required onChange={(e) => {setMobile(e.target.value)} }>
            </Form.Control>
            </Form.Group>

            <div>
            <Button className='mx-3' onClick={(e) => {handleCancel(e)}} type='button'> Cancel </Button>
            <Button onClick={(e) => {handleSubmit(e)}} type='submit'> Submit </Button>
            </div>
        </Form>
    </div>
}



export default Add