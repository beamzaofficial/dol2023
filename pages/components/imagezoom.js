import React, { useState } from "react";
import Image from 'next/image'
import { Box, Card, Grid } from "@mui/material";
import styles from '../../styles/Home.module.css'
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION,
} from 'react-image-magnifiers'

export default function Imagezoom({ src }) {
    return (
        <Box>
            <SideBySideMagnifier
                imageSrc={src}
                // switchSides
                // overlayBoxImageSize={500}
                // largeImageSrc={src}
                // mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
                // touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
            />
        </Box>
    );
}
