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
    <form onSubmit={handleSearch} className='mb-4'>
        <input type='text' placeholder='Enter City' onChange={handleInputChange} className='form-control' ></input>
        <button type='submit' className='btn btn-primary mt-3'>Search</button>
    </form>
)
}

export default CitySearch 