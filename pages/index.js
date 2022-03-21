import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Login from '../components/Login'
import { getProviders, getSession, useSession } from 'next-auth/react'
function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession()
  if (!session) return <Login providers={providers} />
  return (
    <div className="">
      <Head>
        <title>Twitter 2.0</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main
        className="mx-auto
       flex min-h-screen max-w-[1500px] bg-black"
      >
        <Sidebar />

        <Feed />
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch('https://jsonkeeper.com/b/NKEV').then(
    (res) => res.json()
  )
  const followResults = await fetch('https://jsonkeeper.com/b/WWMJ').then(
    (res) => res.json()
  )
  const providers = await getProviders(context)
  const session = await getSession()
  return {
    props: {
      trendingResults,
      followResults,
      providers,
      //session,
    },
  }
}
export default Home