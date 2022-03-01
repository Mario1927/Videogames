import React from "react";
import { NotFoundImg, NotFoundWrapper } from "../Styled/NotFound";
import NotFoundPNG from "../images/NotFound.png";

export default function NotFound() {
    return (
        <NotFoundWrapper>
            <NotFoundImg src={NotFoundPNG} alt="Not-Found"></NotFoundImg>
        </NotFoundWrapper>
    )
}