import {CardBody, Form} from "react-bootstrap";
import {Button, Card, CardContent, CardMedia} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedRecord} from "./slice.js";

let AddRecord=()=>{


    let [obj,setObj]=useState({name:"", category:'',price:''});
     let navigate= useNavigate()
     let dispatch= useDispatch()
      let state= useSelector(state=>state)

    let addClick=async ()=>{


         if(!state.selectedRecord){

             let fd=new FormData();
             fd.append("name",obj.name);
             fd.append("category",obj.category);
             fd.append("price",obj.price);
             fd.append("image",obj.image);

             let headers={
                 'content-type': 'multipart/form-data',
             }
             await axios.post("http://localhost:8080/add",fd,{headers});
             toast.success("Add Record Successfully!");
             setObj({name:"", category:'',price:'',image:''});



         }
         else{
            let id=state.selectedRecord.id;

             let fd=new FormData();
             fd.append('id',id);
             fd.append("name",obj.name);
             fd.append("category",obj.category);
             fd.append("price",obj.price);
             fd.append("image",obj.image);

             let headers={
                 'content-type': 'multipart/form-data',
             }
             await axios.put("http://localhost:8080/edit",fd,{headers});
             toast.success("Record  modified Successfully!");
             setObj({name:"", category:'',price:'',image:''});

         }

         dispatch(setSelectedRecord(''))

    }

    useEffect(()=>{

            let {name,category,price}=state.selectedRecord;
            setObj({name,category,price});


    },[state.selectedRecord])

    return (


        <>

            <Card sx={{width:400,height:400}}>
                <CardMedia

                    height="194"

                />

               <CardContent>
                   <Form.Group className="mb-3" >

                       <Form.Control type="text" value={obj.name} placeholder="enter name" onChange={(e)=>setObj({...obj,name:e.target.value})}/>
                   </Form.Group>

                   <Form.Group className="mb-3" >

                       <Form.Control type="text"  value={obj.category} placeholder="enter category" onChange={(e)=>setObj({...obj,category:e.target.value})} />
                   </Form.Group>

                   <Form.Group className="mb-3" >

                       <Form.Control type="text"  value={obj.price} placeholder="enter price" onChange={(e)=>setObj({...obj,price:e.target.value})} />
                   </Form.Group>


                   <Form.Group className="mb-3" >

                       <Form.Control type="file"    onChange={(e)=>setObj({...obj,image:e.target.files[0]})} />
                   </Form.Group>



               </CardContent>

                <Button onClick={addClick}>Add Record</Button>

            </Card>



        </>

    )



}

export default AddRecord;