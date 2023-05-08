import React, { useEffect, useState } from 'react'
import { Collapse, Button, Container, Form, Row, Col, Card, ListGroup, Accordion, Dropdown, InputGroup } from 'react-bootstrap'
//import CountryStatePicker from 'country-state-picker';


import { Country, State, City } from 'country-state-city';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import axios from 'axios';
import { useRouter } from 'next/router'


import Allauth from '../Allauth'


const Profile = () => {



  //pass ^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$


  const [file, setFile] = useState(null);

  const [data, setdata] = useState([])

  const router = useRouter()

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [prodata, setprodata] = useState(null)
  const [open, setOpen] = useState(false);

  const [order, setorder]= useState(false)

  const [profile, setprofile] = useState(false)


  const handleprofile = () => {
    setprofile(!profile)
  }

  const handleoder=()=>{
    setorder(!order)
  }

  const profileschema = Yup.object().shape({

    name: Yup.string().min(3, 'too short').max(50, 'to long').required(),
    phone: Yup.string().matches(/^[6-9]\d{9}$/, "mutch match the phone").required(),
    add1: Yup.string().min(20, 'too short').max(100, 'to long').required('need to filel this'),
    add2: Yup.string().min(20, 'too short').max(100, 'to long').required('need to filel this'),
    pincode: Yup.string().matches(/^[1-9]\d{5}$/, "must match").required()

  })



  const profilefunction = () => {

    const loginid = JSON.parse(localStorage.getItem("login"))

    console.log(loginid)


    axios.get(`http://localhost:3000/api/Profile/${loginid}`)

      .then(response => {

        console.log(response.data)

        if (response.data.err == 0) {

          localStorage.setItem('profile', JSON.stringify(response.data.result))


          console.log(response.data.result)

        } else {
          console.log(response.data.msg)
        }



      })

  }





  useEffect(() => {

    // let token = JSON.parse(localStorage.getItem('token'))

    setprodata(JSON.parse(localStorage.getItem('profile')))

    const loginid = JSON.parse(localStorage.getItem("login"))

    axios.get(`http://localhost:3000/api/Profile/${loginid}`)
      .then((res) => {
        console.log(res.data.result)

        setdata(res.data.result)


      })


  }, [])




  console.log(data)

  const formik = useFormik({


    initialValues: {

      name: "",
      phone: '',
      add1: '',
      add2: '',
      pincode: ''

    },

    validationSchema: profileschema,

    onSubmit: values => {


      console.log(values)

      console.log(file)

      const loginid = JSON.parse(localStorage.getItem("login"))


      const formData = new FormData();
      formData.append('email', loginid);
      formData.append('phone', values.phone);
      formData.append('add1', values.add1);
      formData.append('add2', values.add2);
      formData.append('country', selectedCountry);
      formData.append('state', selectedState);
      formData.append('img', file); // Append the file to FormData
      formData.append('pincode', values.pincode); // Append the file to FormData



      console.log(formData)


      axios.post('http://localhost:3000/api/PostProfile', formData, {

        headers: {

          'Content-Type': 'multipart/form-data',

        },
      })

        .then(response => {
          console.log(response.data.msg)
          alert(response.data.msg)
          if (response.data.err == 0) {
            profilefunction()
            window.location.reload()

          }
          console.log(prodata)
        })
    },


  })






  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    console.log(event.target.files[0])
  };





  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };


  // console.log(selectedCountry)

  // console.log(selectedState)


  const countryOptions = Country.getAllCountries()?.map((country) => (

    <option key={country.value} value={country.flag}>

      {country.name}
    </option>
  ));


  const stateOptions = selectedCountry

    ? State.getStatesOfCountry('IN')?.map((state) => (
      <option key={state.value} value={state.name}>
        {state.name}
      </option>
    ))
    : [];


  // console.log(Country.getAllCountries())

  // console.log(State.getStatesOfCountry(`${selectedCountry}`))





  return (






    <div>

      <Container size="lg" className='d-flex justify-content-bettwen align-items-start m-1' >




        <div className=' d-flex flex-column  text-center ' style={{ margin: '10px', backgroundColor: 'inherit', color: 'black', width: "35%" }}>


          <div className='d-flex justify-content-around p-4 m-4 shadow-lg' style={{ width: "400px", backgroundColor: 'white' }}>

            <img src={data.img ? data?.img : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACNCAMAAAC9gAmXAAAAMFBMVEXk5ueutLfp6+yyuLqrsbTb3t+7wMPQ09Xh4+TJzc+4vsDGysymrbC2u77U19nX2tyoH4rmAAADJklEQVR4nO2a27KrIAxAJVxELvL/f3to7cU9tZKgwZ4Z1sOe3bc1IUBMGIZOp9PpdDqdTqfT6XQ6/xFWpzEzW3uxCNjRRBWCyoQgnE8Al8kkky3EivzL60t8QLu/Kk8hY5v7ZJfwqbL4BN9aZhQbcXn5RN3Uxuy43H3GdqtlXUEm6/hWOhCLMllnaqSDkWkVHSjlzEtnbCAzIWWyDv/OSmgZIST7zRXxMuypA54QGiEC81qRZIQwnC7E0OS1Sow2luaSiXyZAyMxNKy7HCQ5NoqvutDk0OSlYrPBH8NvAtsJiL2h1qiJy4bukjFMu8p+q4R34UocyoW5gidxCLXEH3hOHPK1sMB0OYCpCo2af8qGpyDtNufbMOVN3Z4STAUXvbq5w1Th6Kqbge0zpu6e4qpFKd9SL9i+qWrSmGlLZeYaGy6ZmnJL8X3foZslKxvGtklFvcUnMwyOGhrWLgU1j3k7OEANDacM9XNTMTciSRc538n34nfW6QZ+rfgaAm/wTZw2ow+kTqM5DCqTG7SunzqI6KSGAzwtd32Uazv/tWanLA1sHaRvwBy/+FwxZh1gGOXncFMJx9mw3vVJXoSVkApyumYc/kRPJkYpo4zRj1e/XcgRArBWW3v752KPwWqdUprnOf/V2ekqJZsm4+LS6789p7jlT14x48emo3kAPXuT03f7AFQqKJeVmgTJJi/F3rOFh5IQZs65xGgCkEz8EpINgnAjn4/2eJNnjIJJLELJFddn00fJ048hmGVV82YREtOpN9e8X0AgfE4r2EHvVQ9YH3nSixx/3OXuE49fqHB0kVY6x5tuJwXm4eMOhcfiHv7gdUT9tzCkU1UWn9oHVBUvAzA6dVNXHpnKXkHtFBOhUxEdpsgsOtTIVE6bkTrEg6fm/QZFh7az6E9biDqE2rmiZ06F0LqtmW4QIWwsdheBf0JQO00lguxR2iYyyAfRDVL4ASo0jVxwoyu2++kDTOZwH3xvEG9a60bwVZSvq0bbe6G8VNRZ4SFKS6XbpQ1ifsVa13zYlIpSxpJvA1dI45ZJnCnZCNmQkg20pZA3nU6n0+n8Ev8ADFslviJAY+gAAAAASUVORK5CYII="} style={{ borderRadius: "50%", height: '50px', width: '100px' }} />

            <div>

              <h4>Hello</h4>

              <h3>{data.name}</h3>

            </div>

          </div>




          <div className='d-flex justify-content-around p-4 m-4 shadow-lg' style={{ width: "400px", backgroundColor: 'white' }}>




            <ListGroup defaultActiveKey="#link1" style={{ width: '100%' }}>
              <ListGroup.Item action  onClick={handleoder} className='d-flex justify-content-evenly  border-0 m-2 ' >

                <img className='mt-2 ' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjY5NCAtMTEpIj48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjxwYXRoIGZpbGw9IiMyODc0RjEiIGQ9Ik05IDExdjE3LjEwOGMwIC40OTMuNDEuODkyLjkxOC44OTJoNC45M3YtNS4yNTdoLTMuMDMzbDQuOTEyLTQuNzcgNC45NzIgNC44M2gtMy4wMzVWMjloMTIuNDE3Yy41MDcgMCAuOTE4LS40LjkxOC0uODkyVjExSDl6Ii8+PC9nPjwvc3ZnPg==' />
                <h5>MY ORDERS</h5>
              </ListGroup.Item>

              <ListGroup.Item action onClick={() => setOpen(!open)} className='d-flex justify-content-evenly border-0  m-2 ' >

                <img className='mt-2 ' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIyIDIxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtMTApIj48cGF0aCBmaWxsPSIjMjg3NEYwIiBkPSJNMTQuMjc1IDIyLjcwNGMyLjI3Mi0uNDEyIDQuMzQ3LS42MTggNi4yMjUtLjYxOCAxLjg3OCAwIDMuOTUzLjIwNiA2LjIyNS42MThhNS4xNSA1LjE1IDAgMCAxIDQuMjMgNS4wNjhWMzFoLTIwLjkxdi0zLjIyOGE1LjE1IDUuMTUgMCAwIDEgNC4yMy01LjA2OHptMS4yNzQtNy43MjRjMC0yLjU4IDIuMTYzLTQuNjczIDQuODMyLTQuNjczIDIuNjY3IDAgNC44MyAyLjA5MiA0LjgzIDQuNjczIDAgMi41OC0yLjE2MyA0LjY3My00LjgzIDQuNjczLTIuNjcgMC00LjgzMy0yLjA5Mi00LjgzMy00LjY3M3oiLz48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjwvZz48L3N2Zz4=" />
                <h5>ACCOUNT SETTINGS</h5>

              </ListGroup.Item>

              <Collapse className='m-3' in={open} >

                <ListGroup>

                  <ListGroup.Item action className='m-2 p-3 border-0' onClick={handleprofile}  >

                    <h5>

                      Profile information

                    </h5>
                  </ListGroup.Item>

                  <ListGroup.Item action className='m-2 p-3 border-0'>
                    <h5>

                      Manage address information

                    </h5>


                  </ListGroup.Item>

                </ListGroup>



              </Collapse>



              <ListGroup.Item action className='d-flex justify-content-evenly m-2 ' >

                <img className='mt-2 ' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIyIDIxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtMTApIj48cGF0aCBmaWxsPSIjMjg3NEYwIiBkPSJNMTQuMjc1IDIyLjcwNGMyLjI3Mi0uNDEyIDQuMzQ3LS42MTggNi4yMjUtLjYxOCAxLjg3OCAwIDMuOTUzLjIwNiA2LjIyNS42MThhNS4xNSA1LjE1IDAgMCAxIDQuMjMgNS4wNjhWMzFoLTIwLjkxdi0zLjIyOGE1LjE1IDUuMTUgMCAwIDEgNC4yMy01LjA2OHptMS4yNzQtNy43MjRjMC0yLjU4IDIuMTYzLTQuNjczIDQuODMyLTQuNjczIDIuNjY3IDAgNC44MyAyLjA5MiA0LjgzIDQuNjczIDAgMi41OC0yLjE2MyA0LjY3My00LjgzIDQuNjczLTIuNjcgMC00LjgzMy0yLjA5Mi00LjgzMy00LjY3M3oiLz48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjwvZz48L3N2Zz4=" />
                <h5>PAYMENTS</h5>

              </ListGroup.Item>

              <ListGroup.Item action className='d-flex justify-content-evenly m-2 ' >

                <img className='mt-2 ' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIyIDIxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtMTApIj48cGF0aCBmaWxsPSIjMjg3NEYwIiBkPSJNMTQuMjc1IDIyLjcwNGMyLjI3Mi0uNDEyIDQuMzQ3LS42MTggNi4yMjUtLjYxOCAxLjg3OCAwIDMuOTUzLjIwNiA2LjIyNS42MThhNS4xNSA1LjE1IDAgMCAxIDQuMjMgNS4wNjhWMzFoLTIwLjkxdi0zLjIyOGE1LjE1IDUuMTUgMCAwIDEgNC4yMy01LjA2OHptMS4yNzQtNy43MjRjMC0yLjU4IDIuMTYzLTQuNjczIDQuODMyLTQuNjczIDIuNjY3IDAgNC44MyAyLjA5MiA0LjgzIDQuNjczIDAgMi41OC0yLjE2MyA0LjY3My00LjgzIDQuNjczLTIuNjcgMC00LjgzMy0yLjA5Mi00LjgzMy00LjY3M3oiLz48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjwvZz48L3N2Zz4=" />

                <h5>MY STUFF</h5>


              </ListGroup.Item>



            </ListGroup>



          </div>

        </div>







        <div className='mt-5' style={{ width: "70%", backgroundColor: 'white' }}>

          {profile &&


            <Form onSubmit={formik.handleSubmit} className='p-4  text-dark shadow-lg' encType='multipart/form-data' >

              <h1 className='m-2'>Profile</h1>

              <Form.Group size="sm" as={Col} className='mb-3'>

                <Form.Label>{data.name} First Name</Form.Label>

                <Form.Control type="text" placeholder='Entaer name' required name="name" defaultValue={data.name ? data.name : formik.values.name} />

                {formik.touched.name && formik.errors.name ? (

                  <div style={{ color: "red" }}>{formik.errors.name}</div>

                ) : null}


              </Form.Group>


              <Form.Group size="sm" className='mb-3'>
                <Form.Label> Mobile</Form.Label>

                <Form.Control type="text" placeholder='Entaer name' name="phone" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={formik.values.name} required />

                {formik.touched.phone && formik.errors.phone ? (

                  <div style={{ color: "red" }}>{formik.errors.phone}</div>

                ) : null}

              </Form.Group>



              <Form.Group size="sm" className='mb-3'>
                <Form.Label>Address1</Form.Label>
                <Form.Control type="text" placeholder='Entaer name' name="add1" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={formik.values.name} required />

                {formik.touched.add1 && formik.errors.add1 ? (

                  <div style={{ color: "red" }}>{formik.errors.add1}</div>

                ) : null}
              </Form.Group>


              <Form.Group size="sm" className='mb-3'>

                <Form.Label>Address2</Form.Label>
                <Form.Control type="text" placeholder='Entaer name' name="add2" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={formik.values.name} required />

                {formik.touched.add2 && formik.errors.add2 ? (

                  <div style={{ color: "red" }}>{formik.errors.add2}</div>

                ) : null}


              </Form.Group>


              <Row size="sm">


                <Form.Group as={Col} className='mb-3'>

                  <Form.Label>Country</Form.Label>

                  <Form.Select value={selectedCountry} onChange={handleCountryChange} required >

                    <option value=''>select</option>
                    <option value='INDIA'>India</option>

                  </Form.Select>

                </Form.Group>


                <Form.Group as={Col} className='mb-3'>

                  <Form.Label>State</Form.Label>

                  <Form.Select value={selectedState} onChange={handleStateChange} disabled={!selectedCountry} required  >


                    <option value=''>select</option>

                    {stateOptions}

                  </Form.Select>

                </Form.Group>

                <Form.Group size="sm" as={Col} className='mb-3'>

                  <Form.Label>Pincode</Form.Label>

                  <Form.Control type="text" placeholder='Entaer name' name="pincode" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={formik.values.name} required />

                  {formik.touched.pincode && formik.errors.pincode ? (<div style={{ color: "red" }}>{formik.errors.pincode}</div>) : null}

                </Form.Group>

              </Row>

              <Form.Group size="sm" className='mb-3'>

                <Form.Label>profile image</Form.Label>

                <Form.Control type='file' name="img" onChange={handleFileChange} required />

              </Form.Group>

              <Button type="submit" variant="outline-warning mb-3" size="lg">  submit  </Button>

            </Form>

          }


          {
            order && (
              <>
                <div className='d-flex flex-column shadow-lg' style={{ width: '100%' }} >

                  <InputGroup className="mb-3">
                    <Form.Control type='search' className='p-2 m-2'
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                      Button
                    </Button>
                  </InputGroup>



                </div>

                <div className=' d-flex flex-column mt-4'>

                  <div className='d-flex m-2 p-3  justify-content-between shadow-lg'>

                    <img src="https://rukminim1.flixcart.com/image/xif0q/vitamin-supplement/c/2/o/60-biotin-maximum-strength-for-hair-skin-nails-10000-mcg-for-60-original-imagp6tgqezqcnrx.jpeg" style={{ width: "200px", height: "100px" }} />




                    <span>the title of product </span>


                    <span>the title of product </span>


                    <div className='d-inline'>
                      <div style={{ backgroundColor: 'green', borderRadius: "50%", height: '20px', width: '20px', }} />
                      <span d-inline>Delivered on martch 29 </span>
                    </div>
                  </div>

                  <div className='d-flex m-2 p-3  justify-content-between shadow-lg'>

                    <img src="https://rukminim1.flixcart.com/image/xif0q/vitamin-supplement/c/2/o/60-biotin-maximum-strength-for-hair-skin-nails-10000-mcg-for-60-original-imagp6tgqezqcnrx.jpeg" style={{ width: "200px", height: "100px" }} />




                    <span>the title of product </span>


                    <span>the title of product </span>


                    <div className='d-inline'>
                      <div style={{ backgroundColor: 'green', borderRadius: "50%", height: '20px', width: '20px', }} />
                      <span d-inline>Delivered on martch 29 </span>
                    </div>
                  </div>


                  <div className='d-flex m-2 p-3  justify-content-between shadow-lg'>

                    <img src="https://rukminim1.flixcart.com/image/xif0q/vitamin-supplement/c/2/o/60-biotin-maximum-strength-for-hair-skin-nails-10000-mcg-for-60-original-imagp6tgqezqcnrx.jpeg" style={{ width: "200px", height: "100px" }} />




                    <span>the title of product </span>


                    <span>the title of product </span>


                    <div className='d-inline'>
                      <div style={{ backgroundColor: 'green', borderRadius: "50%", height: '20px', width: '20px', }} />
                      <span d-inline>Delivered on martch 29 </span>
                    </div>

                  </div>


                </div>



              </>
            )
          }




        </div>

      </Container>

    </div>


  )
}

export default Profile


