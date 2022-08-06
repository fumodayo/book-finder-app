import React from 'react'
import {
  Stack,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Grid
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const BookList = props => {
  const { bookData } = props

  return (
    <Stack textAlign="left">
      {bookData.map(item => {
        // define item in book list data
        const bookThumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail
        const bookTitle = item.volumeInfo.title
        const bookAuthor = item.volumeInfo.authors
        const bookLanguage = item.volumeInfo.language
        const bookCategory = item.volumeInfo.categories
        const bookPublisher = item.volumeInfo.publisher
        const bookPublisherDate = item.volumeInfo.publishedDate
        const bookPageCount = item.volumeInfo.pageCount + ` pages`
        const bookRating = item.volumeInfo.averageRating || '5.0/5.0'
        const bookDescription = item.volumeInfo.description
        const checkReaderLink = item.accessInfo.viewability
        const readerLinkBook = item.accessInfo.webReaderLink
        const saleLinkBook = item.saleInfo.buyLink

        if (bookThumbnail !== undefined) {
          return (
            <Accordion
            key={item.id}
              style={{
                minWidth: '1200px',
                backgroundColor: '#464657 ',
                margin: '5px'
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{
                  padding: '20px'
                }}
              >
                <img
                  style={{ width: '120px' }}
                  src={bookThumbnail}
                  alt="book"
                />
                <Box sx={{ margin: '2px 0 0 20px' }}>
                  <Typography
                    fontFamily="Catamaran,san-serif"
                    fontSize="24px"
                    color="#c4c4c4"
                  >
                    {bookTitle}
                  </Typography>
                  <Typography
                    fontFamily="Catamaran,san-serif"
                    fontSize="18px"
                    color="#fff"
                  >
                    {bookAuthor}
                  </Typography>
                  <Typography
                    fontFamily="Catamaran,san-serif"
                    fontSize="18px"
                    color="#fff"
                    textTransform="uppercase"
                  >
                    {bookLanguage}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails
                style={{ backgroundColor: '#2d2d3b', padding: '30px' }}
              >
                <Grid container>
                  <Grid item xs={4}>
                    <Box>
                      <Typography
                        fontFamily="Catamaran,san-serif"
                        fontSize="24px"
                        color="#fff"
                      >
                        {bookTitle}
                      </Typography>
                      <img
                        style={{ width: '130px', marginLeft: '5px' }}
                        src={bookThumbnail}
                        alt="book"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack
                      direction="column"
                      style={{
                        fontSize: '18px',
                        color: '#d5d5d5',
                        marginTop: '50px'
                      }}
                    >
                      <Stack direction="row" spacing={1}>
                        <Typography fontWeight={500}>Categories:</Typography>
                        <Typography>{bookCategory}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography fontWeight={500}>Author(s):</Typography>
                        <Typography>{bookAuthor}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography fontWeight={500}>Publisher:</Typography>
                        <Typography>{bookPublisher}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography fontWeight={500}>Publish Date:</Typography>
                        <Typography>{bookPublisherDate}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography fontWeight={500}>Page Count:</Typography>
                        <Typography>{bookPageCount}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography fontWeight={500}>
                          Average Rating:
                        </Typography>
                        <Typography>{bookRating}</Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>

                <Stack style={{ maxWidth: '1000px', margin: '20px 0 20px 0' }}>
                  <Typography
                    style={{
                      fontSize: '24px',
                      fontWeight: 500,
                      color: '#d0d0d0'
                    }}
                  >
                    Book description:
                  </Typography>
                  <Typography
                    style={{
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#d0d0d0',
                      marginTop: '10px'
                    }}
                  >
                    {bookDescription}
                  </Typography>
                </Stack>
                <Stack spacing={2} direction="row">
                  <Button
                    href={readerLinkBook}
                    variant="contained"
                    disabled={checkReaderLink === 'NO_PAGES'}
                  >
                    Read a sample
                  </Button>
                  <Button
                    href={saleLinkBook}
                    variant="outlined"
                    disabled={saleLinkBook === undefined}
                  >
                    Buy this book
                  </Button>
                </Stack>
              </AccordionDetails>
            </Accordion>
          )
        }
      })}
    </Stack>
  )
}

export default BookList
