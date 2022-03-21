import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

function Login({ providers }) {
  return (
    <div className="">
      <Image
        src="https://rb.gy/ogau5a"
        width={150}
        height={150}
        objectFit="contain"
      />
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}></div>
        ))}
      </div>
    </div>
  )
}
export default Login
