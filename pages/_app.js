import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import { useMobileOrientation, isMobileOnly } from 'react-device-detect'
import dynamic from 'next/dynamic'
import '/pages/_app.css'

const Website = ({ Component, pageProps, router }) => {
  const { isLandscape } = useMobileOrientation()
  const getElm = document.getElementById('lock-orientation')
  return (
    <Chakra cookies={pageProps.cookies}>
      {isMobileOnly && isLandscape
        ? getElm.classList.add('isMobilePhone')
        : getElm.classList.remove('isMobilePhone')}
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default dynamic(() => Promise.resolve(Website), {
  ssr: false
})
