import React from 'react'
import { Box, Text } from '@primer/react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Box bg="gray.8" p={4} backgroundColor="black" color="white" textAlign="center">
      <Text fontSize={2}>
        &copy; {currentYear} SPJ. All rights reserved.
      </Text>
    </Box>
  )
}

export default Footer
