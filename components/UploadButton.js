import React from 'react'

const styles = {
    uploadButton:`bg-green-500 mr-10 px-3 py-1.5 cursor-pointer rounded-full hover:scale-95 transition`
}

const UploadButton = ({setShowUploadMusic}) => {
    const uploadClick=()=>{
        setShowUploadMusic(true)
    }
  return (
    <div>
        <div className={styles.uploadButton} onClick={uploadClick}>
            Upload Music
        </div>
    </div>
  )
}

export default UploadButton