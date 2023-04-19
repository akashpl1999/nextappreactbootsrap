import React,{useState,useEffect} from 'react'
import { Button, Container,Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Footer() {

  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    setFooterHeight(document.querySelector('footer').offsetHeight);
  }, []);



    return (


        <footer className="bg-dark text-white py-2  w-100" style={{ marginTop: "100px" }}>

        <Container className='text-start' >
     
        <Row>

        <Col xs={4}>

              <h2>Logo</h2>
              <span>company address add here near to biled 4567878</span>
              <p>Copyright &copy; 2023</p>


        </Col>

        <Col>

           <h3>MENU</h3>
           <p>About as</p>
           <p>contact as</p>
           <p>Privicy policy</p>
        
        
        
        </Col>

        <Col>
        <h3>Follow as</h3>
           <p>Facebook</p>
           <p>Instagram</p>
           <p> Twiter</p>
           <p> Linkdin</p>
    
        </Col>

        <Col xs={4}>

            <h3>News Letter</h3>
            <p>subscribe know</p>

            <Form.Control type="email" placeholder="name@example.com" />

            <Button variant="outline-success" onClick={() => console.log("Success")}>
                Success
            </Button>


        </Col>
     
      </Row>
      
        </Container>
      </footer>
  

    )
}
