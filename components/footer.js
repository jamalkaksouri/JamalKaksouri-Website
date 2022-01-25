import { Box } from '@chakra-ui/react'
import * as rdd from 'react-device-detect'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Footer = () => {
  const getUserIpAddress = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    setIP(res.data.IPv4)
  }

  useEffect(() => {
    getUserIpAddress()
  }, [])

  const [ip, setIP] = useState('')
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Jamal Kaksouri. All Rights Reserved.
      <p>
        Your device: {rdd.isMobileOnly && rdd.mobileVendor}-{rdd.osName}(
        {rdd.osVersion})
      </p>
      <p>Your ip: {ip}</p>
    </Box>
  )
}

export default Footer
