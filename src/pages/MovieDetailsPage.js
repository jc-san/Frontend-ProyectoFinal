import { Typography } from '@mui/material'
import React from 'react'
// import { Box, Card, CardContent, CardHeader, CardMedia, Rating, Typography, } from '@mui/material'
import { useParams } from 'react-router-dom'
import ShowMovieDetails from '../components/ShowMovieDetails'

function MovieDetailsPage() {
  const { id } = useParams()

  return (
    <>
      <Typography variant="h3" align="center" sx={{ pt: 10, pb: 7 }}>
        Detalle película
      </Typography>
      <ShowMovieDetails id={id} />
    </>
  )
}

export default MovieDetailsPage
