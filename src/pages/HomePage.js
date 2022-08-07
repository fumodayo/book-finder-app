import React, { useState } from 'react'
import axios from 'axios'
import { Stack, Typography, Input, Button } from '@mui/material'
import BookList from '../components/BookList'
import styled from 'styled-components'

const ButtonSearch = styled.button`
  font-size: 16px;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:after {
    content: '';
    background-color: #cf5bc7;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  &:hover:after {
    top: 0px;
    left: 0px;
  }

  @media (min-width: 768px) {
    button {
      padding: 13px 50px 13px;
    }
  }
`

const InputSearch = styled(Input)({
  '& .MuiInput-underline:before': {
    borderBottomColor: '#fff' // Semi-transparent underline
  },
  '& .MuiInput-underline:hover:before': {
    borderBottomColor: '#fff' // Solid underline on hover
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff' // Solid underline on focus
  }
})

const Homepage = () => {
  const [bookData, setBookData] = useState([])
  const [search, setSearch] = useState('')

  // Call API
  const getBooksData = async () => {
    await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_KEY}&maxResults=40`
      )
      .then(res => {
        const data = res.data.items
        setBookData(data)
      })
      .catch(err => console.log(err))
  }

  return (
    <Stack
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      padding="100px 200px 100px 200px"
    >
      <Stack>
        <Typography
          color="#cf5bc7"
          fontSize="50px"
          fontWeight={700}
          textTransform="uppercase"
        >
          bookfinder
        </Typography>
      </Stack>
      <Stack maxWidth="700px" padding="50px 0 50px 0">
        <Typography fontFamily="Catamaran,san-serif" fontSize="22px">
          Whether you're an avid bookworm or a holiday e-book browser
        </Typography>
        <Typography fontFamily="Catamaran,san-serif" fontSize="22px">
          <span style={{ fontWeight: 'bold', color: '#cf5bc7' }}>
            bookfinder
          </span>{' '}
          can help you to find your next favorite! Enter your favorite author
          into the search box down below to find some other reads!
        </Typography>
      </Stack>
      <Stack direction="row" pb="90px" spacing={1}>
        <InputSearch
          style={{ width: '450px', color: '#fff', fontSize: '18px' }}
          type="text"
          placeholder="Choose your favorite book..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <ButtonSearch onClick={getBooksData}>Search</ButtonSearch>
      </Stack>
      <BookList bookData={bookData} />
    </Stack>
  )
}

export default Homepage
