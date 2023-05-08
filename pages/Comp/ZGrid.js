import React, { useState , useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import {Button}  from 'react-bootstrap'


export default function Grid() {

      const [row , setrow]=useState([])


      const [col , setcol]=useState([])


      const [flag, setflag]=useState(false)

      const [flag1, setflag1]=useState(false)

      
      const handleflag=()=>{

        setflag(!flag)
        

      }
      const handleflag1=()=>{

        setflag1(!flag1)
        

      }




   
      
     useEffect(()=>{

        if (flag) {


        axios.get('http://localhost:4000/data')
        .then(response => {
            console.log(response.data)
            setrow(response.data)
        })

        
        axios.get('http://localhost:4000/col')
        .then(response => {
            console.log(response.data)
            setcol(response.data)
        })

    }
     },[flag])
  
     useEffect(()=>{

        if (flag1) {


        axios.get('http://localhost:4000/row1')
        .then(response => {
            console.log(response.data)
            setrow(response.data)
        })

        
        axios.get('http://localhost:4000/col1')
        .then(response => {
            console.log(response.data)
            setcol(response.data)
        })

    }
     },[flag1])




   
      

  





//autoHeight disableColumnFilter
    //   disableColumnMenu
    //   disableDensitySelector
     

      


  return (

    <div style={{ height: 400,width:"80%" , margin:"auto"}}>
      
        <Button onClick={handleflag} >get grid data</Button>
        
        <Button onClick={handleflag1} >New grid</Button>

    <DataGrid

      rows={row}
      columns={col}
      pageSize={5}
      autoPageSize
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
   
     />
  </div>


  )
}
