import { Stack , Heading, Card, Divider, CardBody, CardFooter, Image, Text, Button, Link,Box} from '@chakra-ui/react'

export default function CardList({
  id,
  image,
  title,
  description,
  url

}) {
  return (
    
    
    <Box w="full">
       <Card maxW='sm' mb="10" key={id}>
                      <CardBody>
                        <Image
                          src={image}
                          alt={id}
                          borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                          <Heading size='md'>{title}</Heading>
                          <Text>
                            {description}
                          </Text>
                        </Stack>
                      </CardBody>
                      <Divider />
                      <CardFooter alignSelf="center" >
                        <Link href={url} _focus="none" isExternal  >
                          <Button  variant='solid' colorScheme='red'>
                            Read More
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
    </Box>
    
  );
}
