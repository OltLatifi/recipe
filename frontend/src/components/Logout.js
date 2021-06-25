import React, { useState, useEffect  } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import Post from './Post';

import { withRouter } from 'react-router';
import axios from 'axios';

const axiosInstance = axios.create({
    baseUrl: 'http://127.0.0.1:8000/',
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token')
        ? 'JWT' + localStorage.getItem('access_token')
        : null,
        'Content-Type': 'application/json',
        accept: 'application/json'
    },
})


function Logout(props) {


    useEffect(()=>{
        getData();

        }, []
    );

    function getData(){
        console.log('is axios working')

        axiosInstance.post(`http://127.0.0.1:8000/api/logout/`, {
            refresh_token: localStorage.getItem('refresh_token'),
                }
            );
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            axiosInstance.defaults.headers['Authorization'] = null;
            props.history.push('/')

        
    }

    

    
    return (
        <>
        <center>
        <div  style={{display:'flex', flexDirection:'row'}}>
                <Typography variant="h2" component="h2">
                    Logged out
                </Typography><br/>
                
        </div>
        </center>
        
        </>
        );

  }

export default Logout;
  