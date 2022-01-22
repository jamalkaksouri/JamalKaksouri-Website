import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/coming-soon.jpg'
import thumbWalknote from '../public/images/coming-soon.jpg'
import thumbFourPainters from '../public/images/coming-soon.jpg'
import thumbMenkiki from '../public/images/coming-soon.jpg'
import thumbModeTokyo from '../public/images/coming-soon.jpg'
import thumbStyly from '../public/images/coming-soon.jpg'
import thumbPichu2 from '../public/images/coming-soon.jpg'
import thumbFreeDBTagger from '../public/images/coming-soon.jpg'
import thumbAmembo from '../public/images/coming-soon.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="Coming-soon"
            title="Coming-soon"
            thumbnail={thumbInkdrop}
          >
            Coming-soon
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Coming-soon"
            title="Coming-soon"
            thumbnail={thumbWalknote}
          >
            Coming-soon
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="Coming-soon"
            title="Coming-soon"
            thumbnail={thumbFourPainters}
          >
            Coming-soon
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="Coming-soon"
            thumbnail={thumbMenkiki}
            title="Coming-soon"
          >
            Coming-soon
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Coming-soon
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="Coming-soon"
            thumbnail={thumbModeTokyo}
            title="Coming-soon"
          >
            Coming-soon
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="Coming-soon"
            thumbnail={thumbStyly}
            title="Coming-soon"
          >
            Coming-soon
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Coming-soon
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id="Coming-soon"
            thumbnail={thumbPichu2}
            title="Coming-soon"
          >
            Coming-soon
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="Coming-soon"
            thumbnail={thumbFreeDBTagger}
            title="Coming-soon"
          >
            Coming-soon
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="Coming-soon"
            thumbnail={thumbAmembo}
            title="Coming-soon"
          >
            Coming-soon
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
