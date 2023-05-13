import '@/styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'next-themes'
import { ExampleProvider, UserProvider } from '../context'

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <UserProvider>
      <ExampleProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ThemeProvider attribute="class" defaultTheme='light'>
              <SessionProvider session={pageProps.session}>
                <Component {...pageProps} />
              </SessionProvider>
            </ThemeProvider>
          </Hydrate>
        </QueryClientProvider>
      </ExampleProvider>
    </UserProvider>
  )
}

export default appWithTranslation(App)