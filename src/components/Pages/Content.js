import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { TextInput, Box, FormControl, Spinner, Pagination } from '@primer/react'
import { Button } from '@primer/react'
import { SearchIcon } from '@primer/octicons-react'
import List from './List'
import '../../assets/styles/content.css'

const Content = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [videosData, setVideosData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    if (!searchTerm) {
      alert('Please enter a search term.')
      return
    }

    const options = {
      method: 'GET',
      url: 'https://youtube-v2.p.rapidapi.com/search/',
      params: {
        query: searchTerm,
        lang: 'en',
        order_by: 'this_month',
        country: 'in',
      },
      headers: {
        'X-RapidAPI-Key': '3d14d4999bmsh57d6b86c6fa9797p109968jsn5796d7f96ef9',
        'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com',
      },
    }

    try {
      setLoading(true)
      const response = await axios.request(options)
      setVideosData(response.data.videos)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      fetchData()
    }
  }

  return (
    <Box>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '1%',
        }}
      >
        <FormControl flex="auto">
          <TextInput
            placeholder="Search videos..."
            value={searchTerm}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            style={{ width: '30vw', margin: '1%' }}
          />
        </FormControl>
        <Button
          onClick={fetchData}
          trailingVisual={SearchIcon}
          sx={{ mt: 2 }}
          style={{ backgroundColor: 'transparent', marginBottom: '1rem' }}
        >
          Search
        </Button>
      </div>

      {loading ? (
        <div className="loader">
          <Spinner size={20} />
          <p>Loading...</p>
        </div>
      ) : videosData.length === 0 ? (
        <div className="empty-search-result">
          <p>No search results found.</p>
        </div>
      ) : (
        <div className="list">
          {videosData.map((video) => (
            <List key={video.id} video={video} />
          ))}
        </div>
      )}
    </Box>
  )
}

export default Content
