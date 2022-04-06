import React, { useState} from 'react'
import { Button, Input } from 'antd';
import axios from 'axios';
import './styles/UploadPage.css';

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
    }

    const handleImageFileSelect = (event) => {
        setImageFile(event.target.files[0]);
    }

    function clearAll() {
        setTitle("");
        setDescription("");
        setName("");
        setVideoFile("");
        setImageFile("");
    }

    function SubmitVideo() {

        const formData = new FormData();
        formData.append("content", videoFile);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("thumbnail", imageFile);
        formData.append("title", title);
        try {
        axios({
            method: "post",
            url: "http://localhost:8080/streaming-api/video",
            data: formData,
        });
        clearAll();
        } catch(error) {
            console.log(error);
            window.alert("Make sure that video file is a mp.4 file, image is .jpg file and title is unique");
        }
    }


    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2> Upload Form</h2>
        </div>

        <div>
            
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

            <Button className="buttonSubmit" onClick={() => SubmitVideo()}>
                Submit
            </Button>

        </div>
    </div>
    )
}

export default UploadVideo