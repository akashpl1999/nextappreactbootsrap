import React from 'react'
import { Collapse, Button, Container, Form, Row, Col, Card } from 'react-bootstrap'

export default function Profile() {
  return (


    

    <div>

      <Container  size="lg" className='d-flex justify-content-center align-items-start     m-1' style={{ maxwidth: "100%" }}>



        <div>

          <div className='text-center align-items-center mt-5' style={{ width: '18rem', margin: '10px' , backgroundColor:'inherit', color:'black'}}>

            <img src="https://freefrontend.com/assets/img/bootstrap-profiles/single-advisor-profile.png" style={{ borderRadius: "50%", height: '100px', width:'100px' }} />

            <div>
              <title>Name</title>
            
              <p>
                Email

              </p>

              <p>
                phone number

              </p>


              <Button variant="primary">Edit</Button>
            </div>
          </div>


        </div>



        <div style={{ width: '2px', backgroundColor: 'white', marginLeft: '10px' , height:'300px'}} />




        <div style={{ width: '50%' }} >


          <Form className='p-4 text-dark' >

            <h1 className='m-2'>Profile</h1>
         

            <Row>

              <Form.Group size="sm" as={Col} className='mb-3'>
                <Form.Label> First Name</Form.Label>
                <Form.Control  type="text" placeholder='Entaer name' required />
              </Form.Group>

              <Form.Group size="sm" as={Col} className='mb-3'>
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder='Entaer name' />
              </Form.Group>


            </Row>


            <Form.Group size="sm" className='mb-3'>
              <Form.Label> Mobile</Form.Label>
              <Form.Control type="text" placeholder='Entaer name' />
            </Form.Group>

            <Form.Group size="sm" className='mb-3'>
              <Form.Label>Address1</Form.Label>
              <Form.Control type="text" placeholder='Entaer name' />
            </Form.Group>
            <Form.Group size="sm" className='mb-3'>
              <Form.Label>Address2</Form.Label>
              <Form.Control type="text" placeholder='Entaer name' />
            </Form.Group>
            <Row size="sm">
              <Form.Group as={Col} className='mb-3'>
                <Form.Label>Country</Form.Label>
                <Form.Select>
                  <option >Select State</option>

                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} className='mb-3'>
                <Form.Label>State</Form.Label>
                <Form.Select>
                  <option >Select State</option>

                  <option >Select State</option>
                  <option >Select State</option>

                </Form.Select>


              </Form.Group>

              <Form.Group size="sm" as={Col} className='mb-3'>
                <Form.Label>Pincode</Form.Label>
                <Form.Control type="number" placeholder='Entaer name' />
              </Form.Group>


            </Row>


            <Form.Group size="sm" className='mb-3'>
              <Form.Label>profile image</Form.Label>
              <Form.Control type='file' />
            </Form.Group>

            <Button variant="outline-warning mb-3" size="lg" onClick={() => console.log("Warning")}>
              submit
            </Button>



          </Form>



        </div>








      </Container>







    </div>


  )
}
