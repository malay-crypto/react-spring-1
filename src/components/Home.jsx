import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import fetchProducts, {setSelectedRecord} from "./slice.js";
import {Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

let Home=()=>{


                let dispatch=  useDispatch()
               let state=  useSelector((state)=>state)
        let navigate=  useNavigate()


    useEffect(()=>{


            dispatch(fetchProducts())


    },[])


    let deleteProduct=async (item)=>{

                   // await axios.delete("http://localhost:8080/delete/"+item.id)

        await axios.delete("https://spring-boot-1-u2qc.onrender.com/"+item.id)

        //https://spring-boot-1-u2qc.onrender.com
                toast.success("Product deleted successfully")
               dispatch(fetchProducts())
    }

    let editProduct=async (item)=>{

       dispatch(setSelectedRecord(item))
        navigate("/add")


    }


    return (


        <>

            <div className="container">
                <div className="row">
                    {
                        state.searchedRecords.map((item) =>


                            <div className="col-lg-4">
                                <Card  sx={{width:300,marginBottom:10}} key={item.id}>
                                    <CardContent  >
                                        <CardMedia
                                            component="img"

                                           // image={`http://localhost:8080/upload/${item.imageName}`}
                                            image={`https://spring-boot-1-u2qc.onrender.com/upload/${item.imageName}`}
                                            //https://spring-boot-1-u2qc.onrender.com
                                            alt="not available"
                                            sx={{
                                                objectFit:"contain",
                                                height:200
                                            }}
                                        />
                                        <Typography variant="h6" sx={{ color: 'text.secondary' }} className={'text-truncate'}>
                                            {item.name}<br/>
                                        {item.category}<br/>
                                        {item.price}<br/>
                                        </Typography>
                                    </CardContent>

                                    <EditIcon sx={{color:'green',cursor:'pointer'}} onClick={()=>editProduct(item)} />
                                    <DeleteIcon sx={{color:'red',cursor:'pointer'}} onClick={()=>deleteProduct(item)}/>
                                    <Button>Add To Cart</Button>
                                </Card>
                            </div>

                        )
                    }

                </div>
            </div>





        </>


    )


}

export default Home