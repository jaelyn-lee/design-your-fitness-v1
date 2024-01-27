import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserData } from '../models/users'
import { supabase } from '../supabase-client'
// import { number, z } from 'zod'

export default function UserForm() {
  const navigate = useNavigate()

  //Use ZOD to validate type
  // const invalid_type_error = 'Invalid type provided for this field'
  // const required_error = 'This field cannot be blank'
  // const UserSchema = z.object({
  //   first_name: z
  //     .string({ invalid_type_error, required_error })
  //     .min(1, { message: required_error }),
  //   last_name: z
  //     .string({ invalid_type_error, required_error })
  //     .min(1, { message: required_error }),
  //   age: number({ invalid_type_error, required_error }).positive(),
  //   height: number({ invalid_type_error, required_error }).positive(),
  //   weight: number({ invalid_type_error, required_error }).positive(),
  //   target_weight: number({ invalid_type_error, required_error }).positive(),
  // })
  // type User = z.infer<typeof UserSchema>

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

  //add alert when user adds undefined data
  function validForm(formData: UserData) {
    if (
      formData.first_name.length > 0 &&
      formData.last_name.length > 0 &&
      formData.age > 10 &&
      formData.height > 100 &&
      formData.weight > 20 &&
      formData.target_weight > 20
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
      <h1 className="font-semibold text-4xl sm:text-7xl mt-24 sm:mt-36 text-center">
        CHOOSE YOUR PERFECT BODY
      </h1>
      <form
        action="/user-form"
        method="POST"
        className="grid place-content-center w-full m-auto gap-4 mt-10"
      >
        <div className="flex justify-between">
          <label htmlFor="first_name" className="user-form-label">
            FIRST NAME:{' '}
          </label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="user-form-input"
            required
          ></input>
        </div>
        <div className="flex justify-between">
          <label htmlFor="last_name" className="user-form-label">
            LAST NAME:{' '}
          </label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="user-form-input"
          ></input>
        </div>
        <div className="flex justify-between">
          <label htmlFor="age" className="user-form-label">
            AGE:{' '}
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="user-form-input"
          ></input>
        </div>
        <div className="flex justify-between">
          <label htmlFor="height" className="user-form-label">
            HEIGHT:{' '}
          </label>
          <input
            type="float"
            placeholder="cm"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="user-form-input"
          ></input>
        </div>
        <div className="flex justify-between">
          <label htmlFor="weight" className="user-form-label">
            WEIGHT:{' '}
          </label>
          <input
            type="float"
            placeholder="kg"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="user-form-input"
          ></input>
        </div>
        <div className="flex justify-between">
          <label htmlFor="target_weight" className="user-form-label">
            TARGET WEIGHT:{' '}
          </label>
          <input
            type="float"
            placeholder="kg"
            name="target_weight"
            value={formData.target_weight}
            onChange={handleChange}
            className="user-form-input"
          ></input>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className={`bg-red text-white py-2 px-14 rounded-3xl text-xl mt-5 sm:text-4xl sm:py-4 sm:px-20 ${
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
