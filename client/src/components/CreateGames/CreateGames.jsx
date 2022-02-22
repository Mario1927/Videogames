import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPlatforms } from "../../actions";

export default function CreateGame() {

    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);
    const platforms = useSelector(state => state.platforms);

    const [input, setInput] = useState({
        name: '',
        description: '',
        image: '',
        date: '',
        platforms: [],
        genres: []
    })

    function onChange(event) {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    function onSelect(event) {
        var selected = input[event.target.name];

        event.target.checked ? selected.push(event.target.value) : selected = selected.filter(select => select !== event.target.value)

        setInput({
            ...input,
            [event.target.name]: selected
        })
        
    }

    async function onSubmit(event) {
        event.preventDefault();
        try {
            await axios.post('http://localhost:3001/videogames/create', input)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        dispatch(getGenres())
        dispatch(getPlatforms())
    }, [dispatch])

    return (
        <form onSubmit={onSubmit}>
            <label>Name: </label>
            <input type={'text'} onChange={onChange} name={'name'} value={input.name}/>

            <label>Description: </label>
            <input type={'text'} onChange={onChange} name={'description'} value={input.description}/>

            <label>Platforms: </label>
            {platforms.map(platform => {
                return (
                    <React.Fragment key={platform.name}>
                        <label key={platform.name}> {platform.name}</label>
                        <input type={'checkbox'} onChange={onSelect} name={'platforms'} key={platform.id} value={platform.name}></input>
                    </React.Fragment>
                )
            })}

            <label>Genres: </label>
            {genres.map(genre => {
                return (
                    <React.Fragment key={genre.name}>
                        <label key={genre.name}> {genre.name}</label>
                        <input type={'checkbox'} onChange={onSelect} name={'genres'} key={genre.id} value={genre.name}></input>
                    </React.Fragment>
                )
            })}
            
            <label>Image: </label>
            <input type="text" onChange={onChange} name="image" value={input.image}/>

            <label>Released: </label>
            <input type={'date'} onChange={onChange} name={'releasedDate'} value={input.releasedDate}/>

            <button type="submit">Submit</button>
        </form>
    )
}
