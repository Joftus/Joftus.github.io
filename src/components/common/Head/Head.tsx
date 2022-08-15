import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../../../config.json'

interface IHeadProps {
  title?: string
}

export default class Head extends React.Component<IHeadProps> {

  render = () => {
    return (
      <Helmet>
        <title key="title">{this.props.title ? `${config.titleTemplate.replace(/%s/g, this.props.title)}` : config.title}</title>
        <meta
          key="description"
          name="description"
          content={config.description}
        />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Helmet>
    )
  }
}