import ProgressBar from "./ProgressBar";

import React, { useState } from "react";

//import { Upload, message } from 'antd';
//import { InboxOutlined } from '@ant-design/icons';

//const { Dragger } = Upload;
  
const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const types = ['image/jpeg', 'image/png']

    const changeHandler = (e) => {
        let selected = e.target.files[0]
        console.log(selected)

        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError('')
        } else {
            setFile(null)
            setError('Please select an image file (png or jpeg)')
        }
    }

    /*const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
          const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        onDrop(e) {
          console.log('Dropped files', e.dataTransfer.files);
        },
      };*/

    return (
        <form>
            {/*<Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
            </p>
            </Dragger>*/}

            <label>
                <input type="file" onChange={ changeHandler } />
                <span>+</span>
            </label>
            
            <div className="output">
                { error && <div className="error">{ error }</div> }
                { file && <div>{ file.name }</div>}
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}

export default UploadForm;