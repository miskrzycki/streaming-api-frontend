import React, { useState, useEffect, Component} from 'react'
import { Typography, Button, Form, message, Input } from 'antd';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { ImageOutlined, LineAxisOutlined } from '@mui/icons-material';


const UploadVideo = () => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState('');
  const [imageFile, setImageFile] = useState('');

   const handleChangeTitle = ( event ) => {
        setTitle(event.currentTarget.value)
    }

    const handleChangeDescription = (event) => {
        setDescription(event.currentTarget.value)
    }

    const handleChangeName = (event) => {
        setName(event.currentTarget.value)
    }

    const handleVideoFileSelect = (event) => {
        setVideoFile(event.target.files[0]);
        console.log(event.target.files[0]);
    }

    const handleImageFileSelect = (event) => {
        setImageFile(event.target.files[0]);
        console.log(event.target.files[0]);
    }

    const onSubmit = async(event) => {
        event.preventDefault()
        const formData = new FormData();

        formData.append("content", videoFile);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("thumbnail", imageFile);
        formData.append("title", title);
        try {
        const response = await axios({
            method: "post",
            url: "http://localhost:8080/streaming-api/video",
            data: formData,
        });
        } catch(error) {
            console.log(error);
            window.alert("Make sure that video file is a mp.4 file, image is .jpg file and title is unique");
        }
    }

    const axios = require('axios');

    axios.get("http://localhost:8080/video-details").then(resp => {

        //console.log(resp.data);
    });

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2> Upload Form</h2>
        </div>

        <Form onSubmit={onSubmit}>
            
            <br /><br />
             <label>Name</label>
            <Input
                onChange={handleChangeName}
                value={name}
            />
            <br /><br />

            <label>Title</label>
            <Input
                onChange={handleChangeTitle}
                value={title}
            />
            <br /><br />

            <label>Description</label>
             <Input
                onChange={handleChangeDescription}
                value={description}
            />
            <br /><br />

            <label>Video file</label>
            <br />
             <Input
                type="file"
                onChange={handleVideoFileSelect}
            />
            <br /><br />

             <label>Thumbnail file</label>
             <br />
             <Input
                type="file"
                onChange={handleImageFileSelect}
            />
            <br /><br />



            <Button type="primary" size="large" onClick={onSubmit}>
                Submit
            </Button>

        </Form>
    </div>
    )
}

export default UploadVideo