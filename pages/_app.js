import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";
import Chakra from "../components/chakra";
import { orientedImg } from "/public/orientation-img.svg";
import { Image } from "@chakra-ui/react";
import { useMobileOrientation } from "react-device-detect";
import dynamic from "next/dynamic";

// const DynamicComponentWithNoSSR = dynamic(() => import(Website), {
//   ssr: false,
// });

const Website = ({ Component, pageProps, router }) => {
  const { isLandscape } = useMobileOrientation();
  return (
    // <DynamicComponentWithNoSSR>
    <Chakra cookies={pageProps.cookies}>
      {isLandscape && alert("102030")}
      {/* just for test git is support commit fetch */}
      {/* just for test git is support commit fetch */}
      {/* just for test git is support commit fetch */}
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
    // </DynamicComponentWithNoSSR>
  );
};

export default dynamic(() => Promise.resolve(Website), {
  ssr: false,
});
