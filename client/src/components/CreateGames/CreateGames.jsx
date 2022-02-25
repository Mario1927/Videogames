import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPlatforms } from "../../actions";
import { CreateGamesForm, CreateGamesWrapper, CreateGamesInput, CreateGamesFormWrapper, CreateGamesCheckboxWrapper, CreateGamesItemsWrapper, CreateGamesPairItemsWrapper, CreateGamesFormErrors } from "../Styled/CreateGames";

export default function CreateGame() {

    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);
    const platforms = useSelector(state => state.platforms);

    const [input, setInput] = useState({
        name: '',
        description: '',
        image: '',
        releaseDate: '',
        rating: '',
        platforms: [],
        genres: []
    })

    const [error, setError] = useState({
        name: '',
        description: '',
        image: '',
        releaseDate: '',
        rating: '',
        platforms: '',
        genres: ''
    })

    function onChange(event) {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });

        validate(event.target.name, event.target.value);
    }

    function onSelect(event) {
        var selected = input[event.target.name];

        event.target.checked ? selected.push(event.target.value) : selected = selected.filter(select => select !== event.target.value)

        setInput({
            ...input,
            [event.target.name]: selected
        })
        
    }

    function validate(input, value) {
        
        switch (input) {
            case 'name':
                if(!/.*\S.*/.test(value)){
                    return setError({...error, name: 'Not special characters or leading spaces'})
                } else {
                    return setError({...error, name: ''})
                };
            case 'description':
                if(value.length < 10) {
                    return setError({...error, description: 'At least ten characters required'})
                }
                else {
                    return setError({...error, description: ''})
                }
            case 'rating':
                if(!/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/.test(value)){
                    return setError({...error, rating: 'Should only be numeric characters'})
                }else if(parseFloat(value) < 1 || parseFloat(value) > 5){
                    return setError({...error, rating: 'Should be between 1-5'})
                }
                else {
                    return setError({...error, rating: ''})
                }
            default :
                return error;
        }
    }

    function validateSubmit(){

        var asignErrors = {};

        if(!input.platforms.length){
            asignErrors = {...asignErrors,  platforms: 'Must select at least one platform'}
        }
        if(!input.genres.length){
            asignErrors = {...asignErrors, genres: 'Must select at least one genre'}
        }
        if(!input.name){
           asignErrors = {...asignErrors, name: 'Must add a name'}
        }
        if(!input.description){
           asignErrors = {...asignErrors, description: 'Must add a description'}
        }

        setError({...error, ...asignErrors});

        return Object.values({...error, ...asignErrors}).filter(value => value !== '');
    }
    const refForm = useRef(null);

    async function onSubmit(event) {
        event.preventDefault();
        const flag = validateSubmit();

        if(!flag.length){
            try {
                await axios.post('http://localhost:3001/videogames/create', input)
                alert('Game created sucesfully')
                refForm.current.reset()
            } catch (error) {
                console.log(error)
            } 
        }else {
            alert('Missing or invalid values')
        }
    }

    useEffect(() => {
        dispatch(getGenres())
        dispatch(getPlatforms())
    }, [dispatch])

    return (
        <CreateGamesWrapper>
            <CreateGamesFormWrapper>
                <CreateGamesForm ref={refForm} onSubmit={onSubmit}>
                    <CreateGamesItemsWrapper>
                        <label>Name: </label>
                        <CreateGamesInput type={'text'} onChange={onChange} name={'name'} value={input.name}/>
                        <CreateGamesFormErrors>{error.name}</CreateGamesFormErrors>
                    </CreateGamesItemsWrapper>

                    <CreateGamesItemsWrapper>
                        <label>Description: </label>
                        <CreateGamesInput type={'text'} onChange={onChange} name={'description'} value={input.description}/>
                        <CreateGamesFormErrors>{error.description}</CreateGamesFormErrors>
                    </CreateGamesItemsWrapper>

                    <CreateGamesItemsWrapper>
                        <label>Image: </label>
                        <CreateGamesInput type="text" onChange={onChange} name="image" value={input.image}/>
                    </CreateGamesItemsWrapper>
                    
                    <CreateGamesPairItemsWrapper>
                        <CreateGamesItemsWrapper>
                            <label>Released: </label>
                            <input type={'date'} onChange={onChange} name={'releaseDate'} value={input.releaseDate}/>
                        </CreateGamesItemsWrapper>

                        <CreateGamesItemsWrapper>
                            <label>Rating: </label>
                            <input type="number" min='1.0' max='5.0' step='.1' onChange={onChange} name="rating" value={input.rating}/>
                            <CreateGamesFormErrors>{error.rating}</CreateGamesFormErrors>
                        </CreateGamesItemsWrapper>
                    </CreateGamesPairItemsWrapper>

                    <CreateGamesItemsWrapper>
                        <label>Platforms: </label>
                        <CreateGamesCheckboxWrapper>
                            {platforms.map(platform => {
                                return (
                                    <React.Fragment key={platform.name}>
                                        <label key={platform.name}> {platform.name}</label>
                                        <input type={'checkbox'} onChange={onSelect} name={'platforms'} key={platform.id} value={platform.name}></input>
                                    </React.Fragment>
                                )
                            })}
                        </CreateGamesCheckboxWrapper>
                        <CreateGamesFormErrors>{error.platforms}</CreateGamesFormErrors>
                    </CreateGamesItemsWrapper>

                    <CreateGamesItemsWrapper>
                        <label>Genres: </label>
                        <CreateGamesCheckboxWrapper>
                            {genres.map(genre => {
                                return (
                                    <React.Fragment key={genre.name}>
                                        <label key={genre.name}> {genre.name}</label>
                                        <input type={'checkbox'} onChange={onSelect} name={'genres'} key={genre.id} value={genre.name}></input>
                                    </React.Fragment>
                                )
                            })}
                        </CreateGamesCheckboxWrapper>
                        <CreateGamesFormErrors>{error.genres}</CreateGamesFormErrors>
                    </CreateGamesItemsWrapper>

                    <button type="submit">Submit</button>
                </CreateGamesForm>
            </CreateGamesFormWrapper>
        </CreateGamesWrapper>
    )
}
