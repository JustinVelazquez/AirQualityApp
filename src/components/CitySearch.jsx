import {useState} from 'react'

// eslint-disable-next-line react/prop-types
const CitySearch = ({getAirQuality}) => {

const [inputValue, setInputValue] = useState('')

const handleInputChange = (e) =>{
    setInputValue(e.target.value)
}

const handleSearch = (e) => {
    e.preventDefault()
    const formatedCity = inputValue.replace(/ /g, '-')
    getAirQuality(formatedCity)
}

return (
    <form onSubmit={handleSearch}>
        <input type='text' placeholder='Enter City' onChange={handleInputChange} ></input>
        <button type='submit'>Search</button>
    </form>
)
}

export default CitySearch 