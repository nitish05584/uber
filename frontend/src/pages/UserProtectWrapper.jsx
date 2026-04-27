import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_BASE_URL } from '../config/api'

const UserProtectWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserDataContext)
    const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    if (!token) {
        navigate('/login')
        return;
    }

    const fetchProfile = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/users/profile`, {
                withCredentials: true
            })
              
            if (response.status === 200) {
                setUser(response.data)
                setIsLoading(false)
            }
        } catch (err) {
            console.log(err)
            localStorage.removeItem('token')
            navigate('/login')
        }
    }

    fetchProfile()
}, [token, navigate, setUser])

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <>
            {children}
        </>
    )
}

export default UserProtectWrapper