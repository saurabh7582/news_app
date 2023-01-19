import { Stack , Heading, SimpleGrid, Spinner} from '@chakra-ui/react'
import React from 'react'
import CardList from './CardList';

export default class BussinessCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data : null
    };
  }

  componentWillMount() {
      this.renderMyData();
  }

  renderMyData(){
      fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=987d9b29043b46279353bf1d19cde8b7")
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({ data : responseJson })
            console.log(responseJson)
          })
          .catch((error) => {
            console.error(error);
          });
  }

  render() {
    return (
     <Stack   w="100%">
        <Stack align="center">
          <Heading fontSize={["20","24","24"]} fontWeight="bold" fontStyle="normal" lineHeight="29px" letterSpacing="0.1em" textDecoration="underline">
              Latest Updates
          </Heading>
        </Stack>
        <Stack direction={["column","row","row"]} w="100%">
          <SimpleGrid columns={[1, 2, 3]} spacing='40px' p="10">
                    {this.state.data ? <>
                      {this.state.data.articles.map((item, i) => (
                                               
                            <CardList
                              key={i}
                              image={item.urlToImage}
                              title={item.title}
                              description={item.description}
                              url={item.url}
                            />  
                      ))}
                      </> : 
                      // if no data spinner
                      <Stack w="100%" align={"center"}>
                        
                        <Spinner
                          thickness='4px'
                          speed='0.65s'
                          emptyColor='gray.200'
                          color='blue.500'
                          size='xl'
                          alignSelf="center"
                        />
                      </Stack>
                      }
            </SimpleGrid>
                </Stack>
                
     </Stack>
    )
  }
}

