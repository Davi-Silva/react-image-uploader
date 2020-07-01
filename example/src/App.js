import React, { useState, useRef, Fragment } from 'react'

import { ImageUploader } from 'react-image-uploader'
import 'react-image-uploader/dist/index.css'

const App = () => {
  const [imagesArray, setImagesArray] = useState([])

  const handleSetImagesArray = (images) => {
    setImagesArray(images)
  }

  const childRef = useRef()

  return (
    <Fragment>
      <ImageUploader
        ref={childRef}
        width='450px'
        height='450px'
        imagesArray={imagesArray}
        handleSetImagesArray={handleSetImagesArray}
        isDragNotAcceptColor='rgba(0, 0, 0, 0.3)'
        isDragAcceptColor='#18840f'
        isDragRejectColor='#ff0000'
        multipleFiles={true}
        apiEndpoint='http://localhost:5000/admin/products/publish/media'
      />
      <button
        onClick={() => {
          childRef.current.handleStartUploadingFiles()
        }}
      >
        Send
      </button>
    </Fragment>
  )
}

export default App
