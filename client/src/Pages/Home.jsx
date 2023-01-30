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
        <Text fontSize={"4xl"} color={"red.400"}>Recipes</Text>
    <Grid 
  templateColumns='repeat(3, 1fr)'
  gap="2rem"
  >
    { //box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        data.map(el=>(
            <GridItem key={el._id} border={"1px solid yellow"} onClick={()=>navigate(`/recipe/${el._id}`)}
            margin={"auto"}
            padding={"2rem"}
            boxShadow ='rgba(0, 0, 0, 0.24) 0px 3px 8px'
            >
            <Image src={el.image} boxSize={"200px"} m={"auto"}/>
            <Box>
            <Text as="b">{el.name}</Text>
            <br/>
            <Text as="b" noOfLines={'1'}>{`${el.description}`}</Text>
            <Text color={"red.400"}>{`creator: ${el.creatorId.name}`}</Text>
            </Box>

            </GridItem>
        ))
    }
    </Grid>
    </Box>
  )
}

export default Home