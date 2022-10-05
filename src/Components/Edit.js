import React, { useEffect, useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Student from './Student';
import {v4 as uuid} from 'uuid';
import {Link, useNavigate} from 'react-router-dom';
import './edit.css'
function Edit() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [mobile, setMobile] = useState('');

    let history = useNavigate();

    var index = Student.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

       let a = Student[index];
       a.name = name;
       a.email = email;
       a.gender = gender;
       a.hobbies = hobbies;
       a.mobile = mobile;

        history('/');
    }

    const handleCancel = (e) => {
        e.preventDefault();
        history('/');
    }

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setGender(localStorage.getItem('gender'));
        setHobbies(localStorage.getItem('hobbies'));
        setMobile(localStorage.getItem('mobile'));
    },[])

    return (
        <div>
            <span style={{fontSize:'30px',fontWeight:'700',color:'lightblue'}}>Edit Student</span>
        <Form className='d-grid gap-2' style={{margin: '3rem'}}>
        <Form.Group className='mb-3' controlId='formName'>
        <p class="form-p">Name</p>
            <Form.Control type='text' placeholder='Enter Name' required value={name} onChange={(e) => {setName(e.target.value)} }>
            </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formEmail'>
        <p class="form-p">Email</p>
            <Form.Control type='text' placeholder='Enter Email' required value={email} onChange={(e) => {setEmail(e.target.value)} }>
            </Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formGender'>
        <p class="form-p">Gender</p>
            <Form.Control type='text' placeholder='Enter Gender' required value={gender} onChange={(e) => {setGender(e.target.value)} }>
            </Form.Control>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formHobbies'>
            <p class="form-p">Hobbies</p>
            <Form.Control type='text' placeholder='Enter Hobbies' required value={hobbies} onChange={(e) => {setHobbies(e.target.value)} }>
            </Form.Control>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formMobile'>
            <p class="form-p">Number</p>
            <Form.Control type='text' placeholder='Enter Mobile' required value={mobile} onChange={(e) => {setMobile(e.target.value)} }>
            </Form.Control>
            </Form.Group>
            <div>
            <Button className='mx-3' onClick={(e) => {handleCancel(e)}} type='button'> Cancel </Button>
            <Button onClick={(e) => {handleSubmit(e)}} type='submit'> Update </Button>
            </div>
        </Form>
        </div>
    )
}

export default Edit