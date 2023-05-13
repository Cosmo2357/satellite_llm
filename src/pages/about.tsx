import { useContext } from 'react'
import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import {
  useQuery,
} from '@tanstack/react-query'
import axios from 'axios';
import { ExampleContext } from '../context'

export default function About() {

  const { data, isSuccess, isLoading, error } = useQuery({
    queryKey: ['example'],
    queryFn: () => axios(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/hello`).then(res => res.data),
    staleTime: 300000, // 5 分間
    onError: (error) => {
      console.log(error)
    }
  })

  const { counter, incrementCounter } = useContext(ExampleContext);

  const onClickHandler = () => incrementCounter()

  const { locale } = useRouter()

  const { t } = useTranslation('about')

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error

  return (<>


    <div>about</div>
    <h1>{t('hello world')}</h1>
    <Link href="/mypage">
      Go to mypage
    </Link>
    {isSuccess && data.map((item: any, index: number) => {
      return (
        <div key={index}>
          <h1>{item.name}</h1>
          <p></p>

        </div>
      )
    })

    }
    <button onClick={() => {
      onClickHandler()
    }}>click</button>
    <h1>{counter}</h1>
  </>

  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about'])),
      // Will be passed to the page component as props
    },
  }
}