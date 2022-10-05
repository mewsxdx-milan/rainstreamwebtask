import React, { useState } from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Student from './Student';
import {Link, useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Paginate from 'react-paginate';

function Home() {

    const [search, setSearch] = useState('');

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const handleSearch = (event) => {
      setSearch(event.target.value);
    };

    const data = {
        nodes: Student.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) 
        || item.email.toLowerCase().includes(search.toLowerCase())
        || item.mobile.toLowerCase().includes(search.toLowerCase())
        ),
      };

    let history = useNavigate();

    const handleEdit = (id, name, email, gender, hobbies, mobile) => {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('gender', gender);
        localStorage.setItem('hobbies', hobbies);
        localStorage.setItem('mobile', mobile);
    }

    const handleDelete = (id) => {
        let index = Student.map(function(e){
            return e.id;
        }).indexOf(id);

        Student.splice(index, 1);

        history('/');
    }

    return(
        <>
        <h1><span style={{color:'lightblue',fontWeight:'700'}}>Students</span></h1>
        <div className='outer' style={{display:'flex',justifyContent:'center'}}>
        <Form className="d-flex mt-5 w-50">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleSearch}
            />
          </Form>
        </div>
        <div style={{ margin: '10rem'}}>
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            gender
                        </th>
                        <th>
                            Hobbies
                        </th>
                        <th>
                            Mobile
                        </th> 
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.nodes && data.nodes.length > 0
                     ?
                     data.nodes.map((item) => {
                        return(
                            <>
                            <tr>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>
                                    {item.gender}
                                </td>
                                <td>
                                    {item.hobbies}
                                </td>
                                <td>
                                    {item.mobile}
                                </td>
                                <td>
                                    <Link to={`/edit`}>
                                    <Button onClick={() => handleEdit(item.id, item.name, item.email, item.gender, item.hobbies, item.mobile)}> Edit </Button>
                                    </Link>
                                    &nbsp;
                                    <Button onClick={() => handleDelete(item.id)}> Delete </Button>
                                </td>
                            </tr>
                            </>
                        ) 
                     }) 
                     : 'No Data Available'
                    }
                </tbody>
            </Table>
            <br>
            </br>
            <Link className='d-grid gap-2' to='/create'>
                <Button size='lg'> Create </Button>
            </Link>
        </div>
        </>
    )
}

export default Home;
