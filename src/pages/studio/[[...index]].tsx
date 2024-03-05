import Head from 'next/head'
import { metadata } from 'next-sanity/studio/metadata'
import config from 'sanity.config'
import { StudioProvider, StudioLayout } from 'sanity'
import { NextStudio } from 'next-sanity/studio'

export default function StudioPage() {
  return (
    <>
      <Head>
        {Object.entries(metadata).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}
      </Head>
      <NextStudio config={config} unstable_globalStyles>
        <StudioProvider config={config}>
          <StudioLayout />
        </StudioProvider>
      </NextStudio>
    </>
  )
}
