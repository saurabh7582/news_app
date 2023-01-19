import React,{useState} from 'react'
import { Flex, IconButton, VStack, Spacer, Tooltip, Link, Button, Box, Icon, Divider, Text, Stack, Heading } from "@chakra-ui/react";
import {FaGithub, FaMoon, FaSun } from 'react-icons/fa'
import {useColorMode, useColorModeValue} from "@chakra-ui/color-mode"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
// SlLogout

function Head() {

    const {colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === "dark";
    const [display,changeDisplay] = useState('none')
    const color = useColorModeValue('white', 'gray.800')
    const bgColor =useColorModeValue('primary','gray.800')

    return (
     <VStack p={3} bg={bgColor} >
       <Flex w="100%" >
        <Stack p="10" align="flex-start">
            <Heading fontFamily='"Fraunces", serif' letterSpacing="112" lineHeight="1" fontSize="30">
                TOP10NEWS
            </Heading>
            <Divider  alignSelf="center" w="50%"  border="1px solid red "  />
            <Heading alignSelf="center" fontFamily='"Fraunces", serif' letterSpacing="112" lineHeight="1" fontSize="30" >
                DAILY
            </Heading>
          </Stack>
        <Spacer></Spacer>
        
        {/* Desktop navigation  */}
        <Flex alignSelf="center" display={["none","flex","flex"]}>
          <Link href='/' _focus="none" >
              <Button as="a"  variant='ghost'  >
                Bussiness
              </Button>
          </Link>
          <Link href='/tech' _focus="none" >
              <Button as="a"  variant='ghost'  >
                TechCrunch
              </Button>
          </Link>
          <Link href='/journal' _focus="none" >
              <Button as="a"  variant='ghost' >
                Journalist
              </Button>
            </Link>
            <Link href='/tesla' _focus="none" >
              <Button as="a"  variant='ghost' >
                Tesla
              </Button>
            </Link>
            <Link href='/apple' _focus="none" >
              <Button as="a"  variant='ghost' >
                Apple
              </Button>
            </Link>
            <Tooltip label='Github' >
                <Link href='https://github.com/saurabh7582' _focus="none" isExternal>
                <IconButton ml={2} icon={<FaGithub />} isRound='true' ></IconButton>
                </Link>
            </Tooltip>
            <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
        </Flex>
       </Flex>

       {/* Mobile Navigation */}
       <Flex alignSelf="end" >
        <IconButton 
          as={HamburgerIcon}
          mt={5} mr={["0","2","none","none"]}
          size="md"
          display={["flex","none","none"]}
          onClick={()=> changeDisplay('flex')}  
        />
       </Flex>
       {/* <Icon as={HamburgerIcon}  boxSize={14} /> */}
       
       {/* hamburgercloseIcon */}
       <Flex
        w="100vw"
        display={display}
        bgColor={color}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
       >  
          <Flex justifyContent="flex-end" >
            <Box
              mt="10"
              borderRadius="50%"
              bg={"#20BC7E"}
              mr={10}
              p="25"
            >
              <Icon
                size="sm"
                as={CloseIcon}
                color={["dark","white"]}
                onClick={()=> changeDisplay('none')}
              >
              </Icon>
            </Box>
          </Flex>

          {/* navigation divder */}
          <Flex ml="5">
            <Text fontWeight="450" fontStyle="normal" fontFamily="Dennis Sans', sans-serif" fontSize='xs' >Navigation</Text> 
          </Flex>
          <Flex pt="5">
            <Divider ml="5" mr="5" orientation='horizontal' />
          </Flex>
          <Flex
            flexDirection="column"
            align="left"
            mt="5"
            ml="5"
          >
          <Link href='/' _focus="none" >
              <Button as="a"  variant='ghost'  >
                Bussiness
              </Button>
          </Link>
          <Link href='/tech' _focus="none" >
              <Button as="a"  variant='ghost'  >
                TechCrunch
              </Button>
          </Link>
          <Link href='/journal' _focus="none" >
              <Button as="a"  variant='ghost' >
                Journalist
              </Button>
            </Link>
            <Link href='/tesla' _focus="none" >
              <Button as="a"  variant='ghost' >
                Tesla
              </Button>
            </Link>
            <Link href='/apple' _focus="none" >
              <Button as="a"  variant='ghost' >
                Apple
              </Button>
            </Link>
          </Flex>
       </Flex>
    </VStack>
)}

export default Head
