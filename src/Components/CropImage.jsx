import React from "react";

import Cropper from "react-easy-crop";
// import Slider from "@material-ui/core/Slider";
// import Button from "@material-ui/core/Button";
import { Button } from "@mui/material";


const CropImage = () => {
    const inputRef = React.useRef();

    const triggerFileSelectPopup = () => inputRef.current.click();

    const [image, setImage] = React.useState(null);
    const [croppedArea, setCroppedArea] = React.useState(null);
    const [crop, setCrop] = React.useState({ x: 0, y: 0 });
    const [zoom, setZoom] = React.useState(1);

    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    };

    console.log('crop area', croppedArea)

    const onSelectFile = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.addEventListener("load", () => {
                setImage(reader.result);
            });
        }
    };

    const onDownload = () => {
        generateDownload(image, croppedArea);
    };
    return (
        <div className='container'>
            {/* <div className='container-cropper'> */}
            <div style={{ width: "80%", height: '70%' }}>
                {image ? (
                    <>
                        {/* <div className='cropper'> */}
                        <div style={{ height: '40%', position: 'relative' }}>
                            <Cropper
                                image={image}
                                crop={crop}
                                zoom={zoom}
                                aspect={2 / 3}
                                onCropChange={setCrop}
                                onZoomChange={setZoom}
                                onCropComplete={onCropComplete}
                                showGrid={true}
                            />
                        </div>

                        {/* <div className='slider'>
                            <Slider
                                min={1}
                                max={3}
                                step={0.1}
                                value={zoom}
                                onChange={(e, zoom) => setZoom(zoom)}
                            />
                        </div> */}
                    </>
                ) : null}
            </div>

            <div className='container-buttons'>
                <input
                    type='file'
                    accept='image/*'
                    ref={inputRef}
                    onChange={onSelectFile}
                    style={{ display: "none" }}
                />
                <Button
                    variant='contained'
                    color='primary'
                    onClick={triggerFileSelectPopup}
                    style={{ marginRight: "10px" }}
                >
                    Choose
                </Button>
                <Button variant='contained' color='secondary' onClick={onDownload}>
                    Download
                </Button>
            </div>
        </div>
    )
}

export default CropImage