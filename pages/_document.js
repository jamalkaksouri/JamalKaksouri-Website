import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'
import { Image } from '@chakra-ui/react'

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="lock-orientation">
          <div className="_wrapper">
            <Image className="thumb" src="/orientation-img.svg" alt="thumb" />
            <div className="message">
              Please return your phone to portrait mode
            </div>
          </div>
        </div>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
