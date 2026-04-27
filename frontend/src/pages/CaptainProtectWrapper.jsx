import React, { useContext, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'
import { API_BASE_URL } from '../config/api'

const CaptainProtectWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [ isLoading, setIsLoading ] = useState(true)

useEffect(() => {
    if (!token) {
        navigate('/captain-login')
        setIsLoading(false)
        return
    }

    const fetchProfile = async () => {
        try {
            const response = await axios.get(
                `${API_BASE_URL}/captains/profile`,
                { withCredentials: true }
            )

            if (response.status === 200) {
                setCaptain(response.data)
            }

        } catch (err) {
            console.log(err)
            localStorage.removeItem('token')
            navigate('/captain-login')
        } finally {
            setIsLoading(false)
        }
    }

    fetchProfile()

}, [token, navigate, setCaptain])
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

export default CaptainProtectWrapper