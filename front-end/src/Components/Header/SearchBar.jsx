import React from 'react'
import {DivSearch, Form,InputSelect,ButtonSearch} from "../../Styles/SearchBarComponent.js"


const SearchBar = () => {

    return(
    <DivSearch>
        <h1>¿Listo para vivir algo nuevo?</h1>

        <Form action="">
            <InputSelect name="" id="">
                <option value="" disabled="">¿A dónde vamos?</option>
            </InputSelect>
            <input type="date" />
                <ButtonSearch type="submit">Buscar</ButtonSearch>

        </Form>
    </DivSearch>
)
}

export default SearchBar