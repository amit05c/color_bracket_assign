import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RecipeData } from '../Api'
import { Box, Container, Image, Text } from '@chakra-ui/react'
const Recipe = () => {
    const [data,setData]= useState()
const {_id}= useParams()
console.log(_id)

useEffect(()=>{
    RecipeData(`recipe/single/${_id}`)
    .then(res=>setData(res.data.data))
},[])
console.log(data)
  return (
    <Box>
        <Container p={"2rem"} border={"1px solid red"}>
        <Image src={data?.image} boxSize={"300px"} m={"auto"}/>
        <Box>
            <Text as={"b"}>{data?.Ingredients[0]?.item}</Text>
            <Text>{data?.Ingredients[0]?.amount}</Text>
            <Text>{data?.description}</Text>
            <Text>{`Recipe: ${data?.name}`}</Text>
            <Text>{data?.creatorId?.name}</Text>
        </Box>
        </Container>
    </Box>
  )
}

export default Recipe