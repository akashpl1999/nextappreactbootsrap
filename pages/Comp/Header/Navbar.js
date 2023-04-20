
import React, { useState } from 'react'

import { Button, Container, Form, FormControl, Modal, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import Link from 'next/link'

import styles from './Navbar.module.css'

const Navbar1 = () => {


  const [show, setshow] = useState(false)

  const handleclose = () => setshow(false)
  const handleopen = () => setshow(true)



  return (


    <div>

      <Navbar bg="dark" variant='dark' collapseOnSelect expand="lg" className='d-flex justify-content-bettwen' >

        <Container>

          <Navbar.Brand className='fw-bolder fs-5'  >

            <Button href='Comp/Main' style={{ backgroundColor: 'transparent', border: "none" }}>

              Logo

            </Button>


          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse >



            <Nav className='me-auto'>

              <Nav.Link >


                <Button onClick={handleopen} style={{ backgroundColor: 'inherit' }}>

                  Select the location

                </Button>

                <Modal show={show} onHide={handleclose} backdrop="static" keyboard={false}>


                  <Modal.Header >

                    <Modal.Title>Modal heading</Modal.Title>

                  </Modal.Header>


                  <Modal.Body className='d-flex '>

                    <Button className='m-2' >

                      Select the location

                    </Button>

                    <FormControl className='p-1 h-4' size='sm' type='text' placeholder='enter addaress' />


                  </Modal.Body>

                  <Modal.Footer>

                    <Button variant="secondary" onClick={handleclose}>

                      Close

                    </Button>

                  </Modal.Footer>

                </Modal>



              </Nav.Link>



              <Nav.Link >

                <Form className='d-flex ' >


                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className={styles.searchbar}
                    aria-label="Search"

                  />

                  <Button className='mx-2' variant="outline-success">Search</Button>

                </Form>


              </Nav.Link>


              <NavDropdown title="Register/Login" id="basic-nav-dropdown">


                <NavDropdown.Item  >

                  <Link href="Register">Register</Link>

                </NavDropdown.Item>


                <NavDropdown.Item >

                  <Link href='Login'>

                    Login

                  </Link>

                </NavDropdown.Item>


                <NavDropdown.Item >

                  <Link href='Profile'>

                    Profile

                  </Link>

                </NavDropdown.Item>


                <NavDropdown.Item >

                  <Link href='Bootp1'>

                    profile2

                  </Link>

                </NavDropdown.Item>




              </NavDropdown>



            </Nav>

            <div className="d-flex" >

              {/* <Button className='mx-2' variant="outline-info">
                Login
              </Button> */}

              <Button className='ml-2' style={{ backgroundColor: "orangered", text: 'white' }}>
                Cart
              </Button>

            </div>




          </Navbar.Collapse>


        </Container>

      </Navbar>




    </div>


  )
}

export default Navbar1