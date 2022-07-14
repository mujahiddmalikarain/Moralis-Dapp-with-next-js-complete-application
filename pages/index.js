import { Flex, Text, Button, Tabs, TabList, Tab, TabPanels, TabPanel, Box, Link } from "@chakra-ui/react"
import Head from "next/head"
import { useMoralis } from "react-moralis"
import Header from "../components/Header";
import Profile from "../components/profile";
import Balance from "../components/Balance";
import NFTs from "../components/NFTS";
import Transactions from "../components/Transaction";
import SendEth from "../components/SendEth";

export default function Home() {
  const {isAuthenticated, authenticate,user,logout,isLoggingOut,isAuthenticating} = useMoralis();
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Login | LyoTrade</title>
        </Head>
        <Flex 
          direction="column" 
          justifyContent="center" 
          alignItems="center"
          width="100vw" 
          height="100vh" 
          bgGradient="linear(to-br, teal.400, purple.300)"
          >
          <Text fontSize="5xl" fontWeight="bold" color="white">LyoTrade Dashboard</Text>
          <Button colorScheme="purple" size="lg" mt="6" 
            onClick={() => authenticate({
              signingMessage:"Sign in to Loyotrade Dashboard"
            })}
            >Login with Metamask</Button>
        </Flex>
      </>
    )
  } else {
    return (
     <>
      <Head>
        <title>LyoTrade</title>
      </Head>
      <Flex direction="column" width="100vw" height="100vh">
      <Header isAuthenticated={isAuthenticated} isAuthenticating={isAuthenticating} user={user} authenticate={authenticate} logout={logout} isLoggingOut={isLoggingOut} />
      <Box flex="1" bg="purple.100" px="52" py="20">
      <Link fontSize="3xl" fontWeight="bold" color="black" href="http://crypto-loan.lyotrade.com/" target="_blank">
</Link>
        <Tabs size="lg" colorScheme="purple" align="center" variant="enclosed">
          <TabList>
            <Tab fontWeight="bold">Profile</Tab>
            <Tab fontWeight="bold">Balance</Tab>
            <Tab fontWeight="bold">Transactions</Tab>
            <Tab fontWeight="bold">NFTs</Tab>
            <Tab fontWeight="bold">Send ETH</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
          <Profile user={user}/>
            </TabPanel>
            <TabPanel>
            <Balance user={user}/>
            </TabPanel>
            <TabPanel>
            <Transactions user={user}/> 
            </TabPanel>
            <TabPanel>
            <NFTs/>
            </TabPanel>
            <TabPanel>
            <SendEth/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
      </>
    )
  }
}
