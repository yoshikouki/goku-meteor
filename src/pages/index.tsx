import type { NextPage } from 'next'
import { DefaultLayout } from '../layouts/default'
import GokuMeteor from '../components/GokuMeteor'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <GokuMeteor/>
    </DefaultLayout>
  )
}

export default Home
