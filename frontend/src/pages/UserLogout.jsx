import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const UserLogout = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const logoutUser = async () => {
            const token = localStorage.getItem('token')

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/users/logout`,{},
                    {withCredentials:true }
                )

                if (response.status === 200) {
                    localStorage.removeItem('token')
                    navigate('/login')
                }

            } catch (error) {
                console.error('Logout failed:', error)

                // Still log out on error (optional but common)
                localStorage.removeItem('token')
                navigate('/login')
            }
        }

        logoutUser()
    }, [navigate])

    return (
        <div>Logging out...</div>
    )
}

export default UserLogout
