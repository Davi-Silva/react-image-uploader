import React, { Fragment } from 'react'

import { ImagesList, Sep } from '../styles/components/FilesList'

const FilesList = (props) => {
  const { imagesArray, width, height } = props

  console.log('imagesArray[0]:', imagesArray[0].data)

  return (
    <ImagesList width={width} height={height}>
      {imagesArray.length > 0 && (
        <>
          {imagesArray.map((image, index) => (
            <Fragment key={image.id}>
              {image.data === undefined ? (
                <>
                  <img src={image.preview} alt={image.name} />
                  {!(imagesArray.length === index + 1) && <Sep />}
                </>
              ) : (
                <>
                  <img src={image.data.url} alt={image.data.name} />
                  {!(imagesArray.length === index + 1) && <Sep />}
                </>
              )}
            </Fragment>
          ))}
        </>
      )}
    </ImagesList>
  )
}

export default FilesList
