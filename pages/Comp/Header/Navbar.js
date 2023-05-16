
import React, { useEffect, useState } from 'react'

import { Badge, Button, Container, Form, FormControl, Modal, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'
import Cart from '../Cart'
import styles1 from '../Cart.module.css'
import Fuse from 'fuse.js';

import { loginstaus } from '../../../Redux/Action'

import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'


const Navbar1 = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [searchResults, setSearchResults] = useState([]);

  const [showProductList, setShowProductList] = useState(false);


  const [cart,setcart] =useState()



  const [pdata, setpdata] = useState([])


  const toggleSidebar = () => {

    setIsSidebarOpen(!isSidebarOpen);

    console.log(isSidebarOpen, "hi")


  };

  function handleSearchBarFocus() {
    setShowProductList(true);
  }

  function handleSearchBarBlur() {
    //setShowProductList(false);
  }



  const dispatch = useDispatch()

  const [show, setshow] = useState(false)

  const [query, setquery] = useState('')

  const router = useRouter()

  const handleclose = () => setshow(false)

  const handleopen = () => setshow(true)


  const handlelogout = () => {
    alert('loginout ')
    dispatch(loginstaus())
    localStorage.removeItem('userdata')
    localStorage.removeItem('login')
    localStorage.removeItem('token')
    localStorage.removeItem('profile')
    router.push('/Comp/Login')
    window.location.reload()


  }


  const items = useSelector((data) => data?.cart?.cartitems.reduce((total, item) => total + item.count, 0))


  const islogin = useSelector((data) => data.cart.login)
  console.log(islogin)

  const fuse = new Fuse(pdata, {
    keys: ['name', 'description'],
    threshold: 0.3,
    distance: 3,
    includeScore: true,
    minMatchCharLength: 1,

  });


  const handleQueryChange = (event) => {
    const newQuery = event.target.value;
    setquery(newQuery);
    const newResults = fuse.search(newQuery);
    console.log(newResults)

    // const newdata= pdata.filter((data)=>data.name.toLowerCase().includes(newQuery.toLowerCase()))
    setSearchResults(newResults);
  };
  console.log(searchResults)

  useEffect(() => {
    axios.get('http://localhost:3000/api/Item/Itemget')

      .then(res => {
        console.log(res.data.result)
        setpdata(res.data.result)

      })


  }, [])

  console.log(pdata)

  useEffect(() => {

    let userid = JSON.parse(localStorage.getItem('userdata'))

    console.log({ userid })

    axios.post('http://localhost:3000/api/Cart/cartget', { userid })

        .then(res => {

            console.log(res.data.result)
            setcart(res.data.result)
        })

}, [cart])









  return (





    <div>



      <Navbar bg="dark" variant='dark' collapseOnSelect expand="lg" className='d-flex justify-content-bettwen' style={{ marginBottom: "20px" }} >

        <Container>

          <Navbar.Brand className='fw-bolder fs-5'>

            <Button onClick={() => { router.push('/Comp/Home/Main') }} style={{ backgroundColor: 'transparent', border: "none" }}>

              <span style={{ fontWeight: '1000', fontSize: '40px', color: 'pink' }}>Order<span style={{ fontWeight: '1000', fontSize: '40px', color: 'yellow' }}>It</span></span>

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

                    <Button className='m-2'  >

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

                <Form className='d-flex'>


                  <Form.Control
                    type="search"
                    placeholder="Search"
                    onFocus={handleSearchBarFocus}
                    onBlur={handleSearchBarBlur}
                    className={styles.searchbar}
                    value={query}
                    onChange={handleQueryChange}
                    aria-label="Search"

                  />


                </Form>





              </Nav.Link>

              <Button variant='danger'>

                <NavDropdown title="Register/Login" id="basic-nav-dropdown">

                  {


                    !islogin ? (
                      <>
                        <NavDropdown.Item>

                          <Button onClick={() => { router.push('/Comp/Register') }}>

                            Register</Button>

                        </NavDropdown.Item>


                        <NavDropdown.Item >

                          <Button onClick={() => { router.push('/Comp/Login') }}>

                            Login

                          </Button>

                        </NavDropdown.Item>



                      </>
                    ) : (
                      <>
                        <NavDropdown.Item>

                          <Button onClick={() => { router.push('/Comp/Profile') }}>

                            Profile

                          </Button>
                        </NavDropdown.Item>


                      </>
                    )
                  }
                </NavDropdown>
              </Button>




            </Nav>



            <div className="d-flex" >



          
            
                    <Badge>

                     
                     {cart?.totalCount}
                    </Badge>

                    <Button onClick={()=>{router.push('/Comp/Order')}} className='ml-2' style={{ backgroundColor: "orangered", text: 'white' }}>
                      Cart
                    </Button>



                    <Button className='ml-2' style={{ backgroundColor: "orangered", text: 'white' }} onClick={handlelogout}>
                     
                        
                        
                          logout
                 
                 
                    </Button>





            </div>


          </Navbar.Collapse>

        </Container>

      </Navbar>



      <Cart isSidebarOpen={isSidebarOpen} />


      {

        showProductList && searchResults?.map((data) => {
          
          const pid = data.item._id


          return (
            <>
              <div className='shadow-lg position-absolute' style={{ width: '400px', maxHeight: "500px", overflowY: 'auto', zIndex: 1, top: "100px", left: "300px", backgroundColor: "white" }}>

              <Link href={`../Header/${pid}`}>

                <div className='d-flex justify-content-start m-3 ' >
              
                    <img src={data.item?.image} style={{ height: "100px" }} />

                    <span>{data.item?.name}</span>

                </div>


                </Link>


              </div>
            </>

          )
        })
      }



    </div>


  )
}

export default Navbar1