import type { FC } from 'react'
import { Helmet } from 'react-helmet';

const Head: FC = () => {
  return (
    <Helmet>
      <title key="title">
        TEST!
      </title>
      {/* <title key="title">
        {title ? `${config.titleTemplate.replace(/%s/g, title)}` : config.title}
      </title>
      <meta
        key="description"
        name="description"
        content={description || config.description}
      /> */}
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
    </Helmet>
  )
}

export default Head