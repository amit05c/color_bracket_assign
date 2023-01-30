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
         <Text fontSize={"4xl"} color={"red.400"}>Details</Text>
        <Container p={"2rem"} border={"1px solid yellow"}  boxShadow ='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
        <Image src={data?.image} boxSize={"300px"} m={"auto"}/>
        <Box>
            <Text  as={"b"}>{`Recipe: ${data?.name}`}</Text>
            <br/>
        
            <Text>{`Amount ${data?.Ingredients[0]?.amount} ${data?.Ingredients[0]?.item}`}</Text>
            <Text>{data?.description}</Text>
            <Text>{`Creator: ${data?.creatorId?.name}`}</Text>
        </Box>
        </Container>
    </Box>
  )
}

export default Recipe