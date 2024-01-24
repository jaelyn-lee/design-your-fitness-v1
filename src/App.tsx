import { useEffect, useState } from 'react'
import './App.css'
import { supabase } from './supabase-client'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getCountries()
  }, [])

  async function getCountries() {
    const { data } = await supabase.from('exercises').select()
    console.log(data)

    if (data) {
      setCountries(data)
    }
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  )
}

export default App
