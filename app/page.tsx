
'use client'
//import { ChakraProvider } from '@chakra-ui/react'
import { ChakraProvider , Heading, Text} from '@chakra-ui/react';
import Features from './Features';
import Header from './Header';
import Pricing from './Pricing';

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( <ChakraProvider>
    <Header />
    <Pricing />
    <Features />
    </ChakraProvider>
    
   
  );
}
