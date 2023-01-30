import { Box, Container, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { RecipeData } from '../Api'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const [data,setData]= useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        RecipeData('recipe/all')
        .then(res=>setData(res.data.data))
    },[])
    console.log(data)
  return (
    <Box border={"1px solid red"}>
    <Grid 
  templateColumns='repeat(3, 1fr)'
  gap="2rem"
  >
    { 
        data.map(el=>(
            <GridItem key={el._id} border={"1px solid red"} onClick={()=>navigate(`/recipe/${el._id}`)}
            margin={"auto"}
            padding={"2rem"}
            >
            <Image src={el.image} boxSize={"200px"} m={"auto"}/>
            <Text>{el.name}</Text>
            <Text>{el.description}</Text>
            <Text>{`creator: ${el.creatorId.name}`}</Text>

            </GridItem>
        ))
    }
    </Grid>
    </Box>
  )
}

export default Home