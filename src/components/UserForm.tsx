import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserData } from '../models/users'
import { supabase } from '../supabase-client'

export default function UserForm() {
  const navigate = useNavigate()
  const initialState: UserData = {
    first_name: '',
    last_name: '',
    age: 0,
    height: 0,
    weight: 0,
    target_weight: 0,
  }

  const [formData, setFormData] = useState(initialState)
  const [isFormValid, setIsFormValid] = useState(false)

  //Use ZOD to validate type
  function validForm(formData: UserData) {
    if (
      formData.first_name.length > 0 &&
      formData.last_name.length > 0 &&
      formData.age > 0 &&
      formData.height > 0 &&
      formData.weight > 0 &&
      formData.target_weight > 0
    ) {
      return true
    } else {
      return false
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const updatedFormData = { ...formData, [e.target.name]: e.target.value }
    setFormData(updatedFormData)
    setIsFormValid(validForm(updatedFormData))
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    const newUser = await supabase.from('users').insert(formData)

    localStorage.setItem('userData', JSON.stringify(newUser))
    navigate('/workout-goals', { state: { user: newUser } })
  }

  return (
    <>
      <h1 className="userInfo-heading">CHOOSE YOUR PERFECT BODY</h1>
      <form
        action="/user-form"
        method="POST"
        className="grid place-content-center w-full m-auto gap-4"
      >
        <div className="flex justify-between">
          <label htmlFor="first_name" className="py-1 px-3 box-border">
            FIRST NAME:{' '}
          </label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="rounded-sm bg-zinc-800 text-white w-44 py-1 px-3 box-border"
            required
          ></input>
        </div>
        <div className="flex justify-between">
          <label htmlFor="last_name" className="py-1 px-3 box-border">
            LAST NAME:{' '}
          </label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="rounded-sm bg-zinc-800 text-white w-44 py-1 px-3 box-border"
          ></input>
        </div>
        <div className="flex justify-between">
          <label htmlFor="age" className="py-1 px-3 box-border">
            AGE:{' '}
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="rounded-sm bg-zinc-800 text-white w-44 py-1 px-3 box-border"
          ></input>
        </div>
        <div className="flex justify-between">
          <label htmlFor="height" className="py-1 px-3 box-border">
            HEIGHT:{' '}
          </label>
          <input
            type="float"
            placeholder="cm"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="rounded-sm bg-zinc-800 text-white w-44 py-1 px-3 box-border"
          ></input>
        </div>
        <div className="flex justify-between">
          <label htmlFor="weight" className="py-1 px-3 box-border">
            WEIGHT:{' '}
          </label>
          <input
            type="float"
            placeholder="kg"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="rounded-sm bg-zinc-800 text-white w-44 py-1 px-3 box-border"
          ></input>
        </div>
        <div className="flex justify-between">
          <label htmlFor="target_weight" className="py-1 px-3 box-border">
            TARGET WEIGHT:{' '}
          </label>
          <input
            type="float"
            placeholder="kg"
            name="target_weight"
            value={formData.target_weight}
            onChange={handleChange}
            className="rounded-sm bg-zinc-800 text-white w-44 py-1 px-3 box-border"
          ></input>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className={`bg-red text-white py-2 px-14 rounded-3xl text-xl ${
            isFormValid ? '' : ' opacity-50 cursor-not-allowed'
          }`}
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>
    </>
  )
}
