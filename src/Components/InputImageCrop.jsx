import React from 'react'
import { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'


import Modal from 'react-modal';




const InputImageCrop = () => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    const [image, setImage] = useState()

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
    }, [])

    const getImage = (e) => {
        setImage(e.target.files[0])
    }

    //modal
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


    const style = {
        width: '100px'
    }


    return (
        <div>
            <input type="file" onChange={getImage} />

            <Modal
                isOpen={image}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <div>
                    {
                        image && <Cropper
                            image={URL.createObjectURL(image)}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            showGrid={false}
                            cropShape='round'
                        // disableAutomaticStylesInjection={true}
                        />
                    }
                </div>

                <button style={{ zIndex: '100' }}>Crop</button>

            </Modal>
        </div>

    )
}

export default InputImageCrop