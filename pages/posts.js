import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/coming-soon.jpg'
import thumbMyDeskSetup from '../public/images/coming-soon.jpg'
import thumb500PaidUsers from '../public/images/coming-soon.jpg'
import thumbFinancialGoal from '../public/images/coming-soon.jpg'
import thumbHowToPriceYourself from '../public/images/coming-soon.jpg'
import thumb50xFaster from '../public/images/coming-soon.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Coming-soon"
            thumbnail={thumbFishWorkflow}
            href="#"
          />
          <GridItem title="Coming-soon" thumbnail={thumbMyDeskSetup} href="#" />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Coming-soon"
            thumbnail={thumb500PaidUsers}
            href="#"
          />
          <GridItem
            title="Coming-soon"
            thumbnail={thumbFinancialGoal}
            href="#"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Coming-soon"
            thumbnail={thumbHowToPriceYourself}
            href="#"
          />
          <GridItem title="Coming-soon" thumbnail={thumb50xFaster} href="#" />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
