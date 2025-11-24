import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'


type GreetingContainerPropsType = {
  users: UserType[]
  addUserCallback: (name: UserType["name"]) => void
}

export const pureAddUser = (name: UserType["name"], setError: (errorMessage: string) => void, setName: (newName: string) => void, addUserCallback: (userName: string) => void) => {
  // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
  if (name.trim()) {
    addUserCallback(name.trim())
    setName("")
  } else {
    setError("Error: name is required")
  }
}

export const pureOnBlur = (name: UserType["name"], setError: (e: string) => void) => { // если имя пустое - показать ошибку
  if (!name.trim()) {
    setError("Error: name is required")
  }
}

export const pureOnEnter = (
  e: KeyboardEvent<HTMLInputElement>,
  addUser: () => void
) => {
  if (e.key === "Enter") addUser()
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                   users,
                                                                   addUserCallback,
                                                                 }) => {
  // деструктуризация пропсов
  const [name, setName] = useState<UserType["name"]>("") //fixed
  const [error, setError] = useState<string>('') //fixed

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value) //fixed
    error && setError("")
  }
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback)
  }

  const onBlur = () => {
    pureOnBlur(name, setError)
  }

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    pureOnEnter(e, addUser)
  }

  const totalUsers = users.length //fixed
  const lastUserName = totalUsers > 0 ? users[totalUsers - 1].name : ""//fixed

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  )
}

export default GreetingContainer
