import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class Alumnos extends Component {
    
    constructor(props){
        super(props);
        this.state=({
            alumnos:[],
            nombre:'',
            email:''
        })
        this.cambioNombre = this.cambioNombre.bind(this);
        this.cambioEmail = this.cambioEmail.bind(this);
        this.mostrar = this.mostrar.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    cambioNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }

    cambioEmail(e){
        this.setState({
            email:e.target.value
        })
    }

    componentDidMount(){
        this.mostrar();
    }

    mostrar(){
        axios.get('http://localhost:5000/alumnos')
        .then(res =>{
            //console.log(res.data);
            this.setState({alumnos:res.data})
        })
    }

    guardar(e){
        e.preventDefault();
        axios.post('http://localhost:5000/alumnos',{
            nombre: this.state.nombre,
            email: this.state.email
        })
        this.setState({
            nombre:'',
            email:''
        })
        this.mostrar();
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={8}></Col>
                        <Col sm={12}>
                        <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.alumnos.map((alu,index) => {
                                            return(
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{alu.nombre}</td>
                                                    <td>{alu.email}</td>
                                                </tr>
                                            )})
                                    }
                                      
                                </tbody>
                            </Table>
                        </Col>
                        <Col sm={8}></Col>
                    </Row>
                    <Row>
                        <Form onSubmit={this.guardar}>
                            
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Nombre" onChange={this.cambioNombre} />
                            </Form.Group>
                            

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" onChange={this.cambioEmail} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Insertar
                            </Button>
                        </Form>       
                    </Row>
                </Container>
            </div>
        )
    }
}
