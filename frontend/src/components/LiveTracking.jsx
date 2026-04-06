import React, { useEffect, useState } from 'react'

const defaultCenter = {
	lat: 12.9716,
	lng: 77.5946,
}

const buildMapUrl = (position) => {
	const lat = Number(position?.lat ?? defaultCenter.lat)
	const lng = Number(position?.lng ?? defaultCenter.lng)
	return `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`
}

const LiveTracking = () => {
	const [currentPosition, setCurrentPosition] = useState(defaultCenter)

	useEffect(() => {
		const updatePosition = () => {
			if (!navigator.geolocation) return

			navigator.geolocation.getCurrentPosition((position) => {
				setCurrentPosition({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				})
			})
		}

		updatePosition()
		const intervalId = setInterval(updatePosition, 10000)

		return () => clearInterval(intervalId)
	}, [])

	return (
		<iframe
			title='Live tracking map'
			src={buildMapUrl(currentPosition)}
			className='h-full w-full border-0'
			loading='lazy'
			referrerPolicy='no-referrer-when-downgrade'
		/>
	)
}

export default LiveTracking
