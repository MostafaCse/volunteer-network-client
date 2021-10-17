import React from 'react';
import './Register.css';
import brandLogo from '../../Images/BrandLogo.png';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Navbarr from '../Shared/Navbarr/Navbarr';
import { useParams } from 'react-router';

const Register = () => {
   const {eventTitle} = useParams();
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        const baseUrl = 'https://murmuring-shelf-27420.herokuapp.com/registerInfo';
        axios.post(baseUrl,data)
        .then(response=>{
            alert(`${response.data}`)
            reset();
        })
        .catch((err)=>alert(`${err}`))
    }
    return (
        < Container className="containerHighlight">
            <Navbarr/>
            <div style={{ textAlign: 'center' }}>
                <img className="imgHandling img-fluid" src={brandLogo} alt=""></img>
            </div>

            <div className="elementsCenter" >
                <div>

                    <div className="formHighlight">
                        <h4>Register as a volunteer</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '35ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField  {...register("FullName", { required: true })}  label="Full Name" variant="standard" /><br />
                                <TextField {...register("Email", { required: true })} label="Username or Email" variant="standard" /><br />
                                <TextField {...register("date", { required: true })} label="" variant="standard" type="date" /><br />
                                <TextField {...register("Description", { required: true })} label="Description" variant="standard" /><br />
                                <TextField {...register("Organize", { required: true })} defaultValue={eventTitle} label="Organize books at the library" variant="standard" /><br />
                            </Box>
                            <input id="buttonHighlight" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Register;