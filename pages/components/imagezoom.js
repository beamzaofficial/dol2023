import React, { useState } from "react";
import Image from 'next/image'
import { Card, Grid } from "@mui/material";
import styles from '../../styles/Home.module.css'
import ReactImageMagnify from "react-image-magnify"

export default function Imagezoom({ src }) {
    return (
        <Grid >
            <ReactImageMagnify {...{
                smallImage: {
                    src: src
                },
                largeImage: {
                    src: src,
                    width: 800,
                    height: 800
                },
            }} />
        </Grid>
    );
}
