import React from "react";
import LoadingGIF from '../images/Loading2.apng';
import { LoadingImg, LoadingWrapper } from "../Styled/Loading";

export default function Loanding() {

    return (
        <LoadingWrapper>
            <LoadingImg src={LoadingGIF} alt="Loading-GIF"></LoadingImg>
        </LoadingWrapper>
    )
}
