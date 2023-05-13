import { signIn, signOut, useSession } from "next-auth/react"

export default function Header() {
    const { data: session, status } = useSession()
    const loading = status === "loading"

    return (
        <header className="h-20 flex flex-row justify-between  align-middle bg-black text-white">
            <div className={`flex flex-column justify-between bg-gray-800 w-full`}>
             
                    {!session && (
                        <>
                            <span className={`flex flex-column  align-center justify-between`}>
                                You are not signed in
                            </span>
                            <a
                                href={`/api/auth/signin`}
                                className={``}
                                onClick={(e) => {
                                    e.preventDefault()
                                    signIn()
                                }}
                            >
                                Sign in
                            </a>
                        </>
                    )}
                    {session?.user && (
                        <>
                            {session.user.image && (
                                <span
                                    style={{ backgroundImage: `url('${session.user.image}')` }}
                                    className={`h-16 w-16 bg-cover rounded-full flex flex-row justify-between  align-middle`}
                                />
                            )}
                            <span className={`flex  align-middle flex-row justify-between  w-full`}>
                                <small>Signed in as</small>
                                <br />
                                <strong>{session.user.email ?? session.user.name}</strong>
                            </span>
                            <a
                                href={`/api/auth/signout`}
                                className={``}
                                onClick={(e) => {
                                    e.preventDefault()
                                    signOut()
                                }}
                            >
                                Sign out
                            </a>
                        </>
                    )}
   
            </div>
        </header>
    )
}