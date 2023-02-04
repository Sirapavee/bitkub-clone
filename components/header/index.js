import Head from 'next/head'
import PropTypes from 'prop-types'

const CustomHead = ({ title }) => {
  return (
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}

CustomHead.defaultProps = {
  title: 'Homepage',
}

CustomHead.PropTypes = {
  title: PropTypes.string,
}

export default CustomHead