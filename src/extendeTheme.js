import { extendTheme } from "@chakra-ui/react"
import "@fontsource/sen";
import { headingStyle as Heading } from "./Component/headingStyle";


const theme = extendTheme({
  colors: {
    primary: "#F8F3EB",
    secondary: "#EDEDED",
    black: "000000",
  },
  components:{
      Heading 
  }
})

export default theme