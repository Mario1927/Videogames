import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CreateGame() {

    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);
    const platforms = useSelector(state => state.platforms);

}
