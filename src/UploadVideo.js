import React, { useState, useEffect} from 'react'
import { Typography, Button, Form, message, Input } from 'antd';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { ImageOutlined, LineAxisOutlined } from '@mui/icons-material';

const UploadVideo = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videos, setVideos] = useState([]);

   const handleChangeTitle = ( event ) => {
        setTitle(event.currentTarget.value)
    }

    const handleChangeAuthor = (event) => {
        setAuthor(event.currentTarget.value)
    }

    const handleChangeImageUrl = (event) => {
        setImageUrl(event.currentTarget.value)
    }

    const onSubmit = () => {
        
    }

    const onDrop = ( files ) => {

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        console.log(files)
        formData.append("file", files[0])

        axios.post('/api/video/uploadfiles', formData, config)
        .then(response=> {
            if(response.data.success){

                let variable = {
                    filePath: response.data.filePath,
                    fileName: response.data.fileName
                }
                //setFilePath(response.data.filePath)

                //gerenate thumbnail with this filepath ! 
                
            } else {
                alert('failed to save the video in server')
            }
        })

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2> Upload Video</h2>
        </div>

        <Form onSubmit={onSubmit}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Dropzone 
                    onDrop={onDrop}
                    multiple={false}
                    maxSize={800000000}>
                    {({ getRootProps, getInputProps }) => (
                        <div style={{ width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                        </div>
                    )}
                </Dropzone>

                {/* {thumbnail !== "" &&
                    <div>
                        <img src={`http://localhost:5000/${thumbnail}`} alt="haha" />
                    </div>
                } */}
            </div>

            <br /><br />
            <label>Title</label>
            <Input
                 onChange={handleChangeTitle}
                 value={title}
            />
            <br /><br />

            <label>Author</label>
             <Input
                 onChange={handleChangeAuthor}
                 value={author}
            />
            <br /><br />

            <label>Image URL</label>
             <Input
                 onChange={handleChangeImageUrl}
                 value={imageUrl}
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