import React, { useState, useEffect  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import FilledInput from '@material-ui/core/FilledInput';

import Post from './Post';

import { withRouter } from 'react-router';

import axios from 'axios';


// change this later with data from the api
const Kategori = [
    {
        value: 'Humbje',
    },
    {
        value: 'Gjetje',
    },
    {
        value: 'Adoptim',
    },
  ];


const Raca = [
    {
        value: 'Belgian Malinois',
    },
    {
        value: 'German Shephard',
    },
];


const Qyteti = [
    {
        value: 'Gjilan',
    },
    {
        value: 'Prishtine',
    },
    {
        value: 'Prizren',
    },
    {
        value: 'Peje',
    },
    {
        value: 'Ferizaj',
    },
    {
        value: 'Mitrovice',
    },
    {
        value: 'Gjakove',
    },
];


console.log('the update one');





const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          }},
  }));

function UpdatePost(props) {
    const[details, setDetails] = useState('');
    
    const id = props.match.params.id;

    const[category, setCategory] = useState('Humbje');
    const[animalName, setAnimalName] = useState('');
    const[features, setFeatures] = useState('');
    const[reward, setReward] = useState('');
    const[description, setDescription] = useState('');
    const[breed, setBreed] = useState('');
    const[city, setCity] = useState('');
    const[phone, setPhone] = useState('');
    const[image, setImage] = useState(null);



    function categoryInputHandler(e){
        setCategory(e.target.value);
    }

    function nameInputHandler(e){
        setAnimalName(e.target.value);
    }

    function featuresInputHandler(e){
        setFeatures(e.target.value);
    }

    function rewardInputHandler(e){
        setReward(e.target.value);
    }

    function breedInputHandler(e){
        setBreed(e.target.value);
    }

    function descriptionInputHandler(e){
        setDescription(e.target.value);
    }

    function cityInputHandler(e){
        setCity(e.target.value);
    }

    function phoneInputHandler(e){
        setPhone(e.target.value);
    }

    function imageInputHandler(e){
        setImage(e.target.files);
    }

    function buttonPressed(){
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "multipart/form-data",}
        }
        //     body: JSON.stringify({
        //         category: category,
        //         name: animalName,
        //         description: description,
        //         features: features,
        //         breed: breed,
        //         city: city,
        //         // user: 1,
        //         reward: reward,
        //         phone: phone,
        //     })
        // };

        let formData = new FormData();

        formData.append('category', category);
        formData.append('name', animalName);
        formData.append('description', description);
        formData.append('features', features);
        formData.append('breed', breed);
        formData.append('city', city);
        formData.append('reward', reward);
        formData.append('phone', phone);
        formData.append('photo', image[0]);

        axios.post("/api/create-post/", formData, requestOptions)
        .then((response) =>console.log(response))
        .then((response) => props.history.push('/'));
    }
    
    const classes = useStyles();


    function getData() {
        fetch(`/api/posts/${id}/`)
        .then((response) =>{
            return response.json();
        })
        .then(json =>setDetails(json))
        .catch((error) =>console.log(error));
        setCategory(details.category);

    }
    
    useEffect(()=>{
        getData();
    
        }, []
    );

    
    return (
        <>

        <div  style={{display:'flex', flexDirection:'row'}}>
            <form className={classes.root} style={{margin:'4%'}} method="post">
                <Typography variant="h2" component="h2">
                    Ndrysho postimin
                </Typography><br/>
                <div>
                    <div>
                        <TextField value={details.name} autoFocus='false' style={{width: '52ch'}} id="outlined-basic" onChange={nameInputHandler} label="Emri" variant="outlined" />
                    </div>
                    <div>
                        <TextField style={{width: '52ch'}} id="outlined-basic" onChange={featuresInputHandler} label="Tiparet dalluese" variant="outlined" />
                    </div>
                    <div>
                        <TextField select id="outlined-basic"
                                    onChange={categoryInputHandler}
                                    label="Kategori" variant="outlined">
                                    {Kategori.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.value}
                                        </MenuItem>))}
                        </TextField>
                        <TextField select id="outlined-basic"
                                    onChange={breedInputHandler}
                                    label="Raca" variant="outlined">
                                    {Raca.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.value}
                                        </MenuItem>))}
                        </TextField>
                </div>
                <div style={{display: 'flex', flexDirection:'row'}}>
                    <div style={{display: 'flex', flexDirection:'column'}}>
                        <TextField select id="outlined-basic" onChange={cityInputHandler} label="Qyteti" variant="outlined" >
                            {Qyteti.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.value}
                                            </MenuItem>))}
                        </TextField>
                        <TextField id="outlined-basic" onChange={rewardInputHandler} type="number" label="Shperblimi" variant="outlined" />
                    </div>
                    <TextField id="outlined-basic" onChange={descriptionInputHandler} label="Pershkrimi" variant="outlined" multiline rows={5}/>
                </div>
                <div style={{display: 'flex', flexDirection:'row'}}>
                    
                    <TextField id="outlined-basic" onChange={phoneInputHandler} type="number" label="Numri i telefonit" variant="outlined" />
                    
                    

                    <div style={{margin:'2%'}}>
                    <input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={imageInputHandler}
                        style={{display: 'none'}}
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="default" component="span">
                        Shto Foto
                        </Button>
                    </label>
                    <input accept="image/*" id="icon-button-file" type="file" style={{display: 'none'}}/>
                    <label htmlFor="icon-button-file">
                        <IconButton color="default" aria-label="upload picture" component="span">
                        <PhotoCamera />
                        </IconButton>
                    </label>
                    </div>

                </div>
                <div>
                    <Button style={{margin:'1ch', width:'55ch'}} variant="contained" color="primary" onClick={buttonPressed}>Posto</Button>
                </div>
                
            </div>
            </form>

            <div style={{width:'50%', marginTop:'4%'}}>
            <Typography variant="h2" component="h3">
                Pamje paraprake
            </Typography><br/>
            <Post
                name={animalName}
                description={description}
                features={features}
                city={city}
                reward={reward}
            />
            </div>
        </div>
        </>
        );

  }

export default UpdatePost;
  