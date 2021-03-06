import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '@/components/layout'
import { Button, Stack } from "@chakra-ui/react"
import utilStyles from '@/styles/utils.module.css'
import { useAuth } from '@/lib/auth'

export default function Index() {
    const auth = useAuth()
    console.log(auth.user);
    console.log(auth.loading);
  return auth.user ? (
    <Layout>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <p>Email: {auth.user.email}</p>
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
    </Layout>
  ) : (
    <Layout>
      <Stack direction="row" spacing={4}>
          <Button isLoading={auth.loading} loadingText="Connecting" colorScheme="blue" onClick={(e) => auth.signinWithGitHub()}>Sign In With GitHub</Button>
          <Button isLoading={auth.loading} loadingText="Connecting" colorScheme="green" onClick={(e) => auth.signinWithGoogle()}>Sign In With Google</Button>
      </Stack>
    </Layout>
  )
}