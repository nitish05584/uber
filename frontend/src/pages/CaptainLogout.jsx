import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const CaptainLogout = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const logoutCaptain = async () => {
            const token = localStorage.getItem('captain-token')

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/captains/logout`,
                    {},{withCredentials:true}
                )

                if (response.status === 200) {
                    localStorage.removeItem('captain-token')
                    navigate('/captain-login')
                }

            } catch (error) {
                console.error('Logout failed:', error)

                
                localStorage.removeItem('captain-token')
                navigate('/captain-login')
            }
        }

        logoutCaptain()
    }, [navigate])

    return (
        <div>Logging out...</div>
    )
}

export default CaptainLogout