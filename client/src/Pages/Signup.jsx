
import { Box, BreadcrumbLink, Divider, FormControl, FormLabel, Heading, Input, InputGroup, InputRightElement, Link, Stack, Breadcrumb, BreadcrumbItem, Button, useToast  } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';
import { SignupApi } from '../Api';
const initialState = {
     name: "",
    userId: "",
    password: ""
  };
const Signup = () => {
   const [data,setData]= useState(initialState)
   const [showPassword,setShowPassword]= useState(false)
   // const state= useSelector((state)=>state.AuthReducer)
   const toast = useToast()
   // const dispatch= useDispatch()
   const navigate= useNavigate()
   // console.log(state)
   const handleSignup= (e)=>{
     const {name,value}= e.target
     setData({
       ...data,
       [name]:value
     })
   }
 
   const signupHandler= async()=>{
      console.log(data)
     if(data.email !="" && data.password !== ""){
        SignupApi("user/register",data)
       .then(res=>{
    
         if(res.status==200){
           toast({
             title: 'Account created.',
             description: "Your account has been successfully created",
             status: 'success',
             duration: 5000,
             isClosable: true,
           })
           navigate("/login")
         }
         else{
           toast({
             description: "Already registered",
             status: 'error',
             duration: 4000,
             isClosable: true,
           })
         }

       })
       .catch(err=>{
        console.log(err)
        toast({
            description: err.response.data.Error,
            status: 'error',
            duration: 4000,
            isClosable: true,
          })
       })
     }else{
       toast({
         description: "Please enter all the details",
         status: 'error',
         duration: 4000,
         isClosable: true,
       })
     }
    
   }
   return (
     <Box bg="#ffffff" mt={"7rem"}>
     <Divider orientation="horizontal" />
     <Box
       // width="1150px"
       position="center"
       margin="auto"
       padding="20px 0px 80px 0px"
       // height="900px"
     >
       <Box width="20%" textAlign="left">
         <Breadcrumb fontWeight="light" fontSize="sm">
           <BreadcrumbItem>
             <BreadcrumbLink href="/">Home</BreadcrumbLink>
           </BreadcrumbItem>
           <BreadcrumbItem>
             <BreadcrumbLink href="/login">Login</BreadcrumbLink>
           </BreadcrumbItem>
         </Breadcrumb>
       </Box>
       <Box width="100%" padding="20px 0px 20px">
         <Heading as="h3" size="lg" fontWeight="medium" textAlign="center">
           Sign Up
         </Heading>
       </Box>
       {/* <Divider orientation="horizontal" /> */}
       <Box w={['60%','50%','30%']} margin="auto" padding={['0.5rem','1rem','2rem']}
       shadow={"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"}>
         <Stack spacing={4}>
           <Box background="none" color="none">
             <FormControl isRequired>
               <FormLabel fontWeight="hairline">User ID</FormLabel>
               <Input
                 focusBorderColor="#353535"
                 errorBorderColor="red.300"
                 type="text"
                 size="lg"
                 borderRadius="0px"
                 name="userId"
                 value={data.userId}
                 onChange={handleSignup}
               />
             </FormControl>
           </Box>
           <Box>
             <FormControl isRequired>
               <FormLabel fontWeight="hairline">Name</FormLabel>
               <Input
                 focusBorderColor="black"
                 errorBorderColor="red.300"
                 type="text"
                 value={data.name}
                 name={"name"}
                 onChange={handleSignup}
                 size="lg"
                 borderRadius="0px"
               />
             </FormControl>
           </Box>
           {/* <Box>
             <FormControl isRequired>
               <FormLabel fontWeight="hairline">Phone</FormLabel>
               <Input
                 focusBorderColor="black"
                 errorBorderColor="red.300"
                 type="number"
                 // value={state.mobile}
                 // onChange={(e) =>
                 //   setter({ type: "phone", payload: e.target.value })
                 // }
                 size="lg"
                 borderRadius="0px"
               />
             </FormControl>
           </Box> */}
           <Box>
             <FormControl isRequired>
               <FormLabel fontWeight="hairline">Password</FormLabel>
               <InputGroup>
               <Input
                  type={showPassword ? "text" : "password"}
                 value={data.password}
                 
                 name="password"
                 onChange={handleSignup}
               />
               <InputRightElement h={"full"}>
                 <Button
                   variant={"ghost"}
                   onClick={() =>
                     setShowPassword((showPassword) => !showPassword)
                   }
                 >
                   {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                 </Button>
               </InputRightElement>
             </InputGroup>
             </FormControl>
           </Box>
         </Stack>
         <Box paddingTop="26px">
           Already a user?{" "}
           <Link color="teal.500" href="/login">
             Login
           </Link>
         </Box>
         <Button
           borderRadius="0px"
           width="180px"
           color="white"
           onClick={signupHandler}
           background="#302C26"
           padding="20px"
           marginTop="20px"
           _hover={{
             color: "#302C26",
             background: "#ffffff",
             border: "1px solid black",
           }}
         >
           Sign up
         </Button>
       </Box>
     </Box>
   </Box>
   )
}

export default Signup