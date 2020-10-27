import Main from '../components/Main'
import Footer from '../components/Footer'
import Description from '../components/Description'
import Picture from '../components/Picture'

export default function Home() {
  return (
    <>
      <Main description={<Description />} image={<Picture />} footer={<Footer />} />
    </>
  )
}
