import React, { useCallback, Fragment } from 'react'
import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'
import { uniqueId } from 'lodash'
import filesize from 'filesize'

import { Wrapper } from '../styles/components/Uploader'

const Uploader = (props) => {
  const {
    width,
    height,
    isDragAcceptColor,
    isDragNotAcceptColor,
    isDragRejectColor,
    handleSetImagesArray,
    multipleFiles
  } = props

  const createImageObj = (file) => {
    return {
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }
  }

  const onDrop = useCallback(
    (acceptedFiles) => {
      const blobArray = []
      if (multipleFiles) {
        acceptedFiles.forEach((file) => {
          blobArray.push(createImageObj(file))
        })
      } else {
        blobArray.push(createImageObj(acceptedFiles[0]))
      }
      handleSetImagesArray(blobArray)
    },
    [handleSetImagesArray, multipleFiles]
  )

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ onDrop })

  return (
    <Fragment>
      <Wrapper
        isDragAccept={isDragAccept}
        isDragReject={isDragReject}
        isDragAcceptColor={isDragAcceptColor}
        isDragNotAcceptColor={isDragNotAcceptColor}
        isDragRejectColor={isDragRejectColor}
        width={width}
        height={height}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the images / videos here ...</p>
        ) : (
          <p>
            Drag 'n' drop some images / videos here, or click to select images /
            videos
          </p>
        )}
        {props.children}
      </Wrapper>
    </Fragment>
  )
}

Uploader.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  handleSetImagesArray: PropTypes.func.isRequired,
  multipleFiles: PropTypes.bool.isRequired
}

export default Uploader
