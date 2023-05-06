import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import ContainerMedium from '../components/layout/container/ContainerMedium';
import ButtonStyle from '../components/ui/ButtonStyle';
import { Helmet } from 'react-helmet';

const ERROR_MESSAGE = '404 Page Not Found';

// markup
const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>{ERROR_MESSAGE} | Anime Reviews</title>
      </Helmet>
      <main>
        <ContainerMedium>
          <div className="space-y-2">
            <h1>{ERROR_MESSAGE}</h1>
            <GatsbyLink className="inline-block" to="/">
              <ButtonStyle>Back to Home Page</ButtonStyle>
            </GatsbyLink>
          </div>
        </ContainerMedium>
      </main>
    </>
  );
};

export default NotFoundPage;
