import { graphql, useStaticQuery } from 'gatsby';
import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { NavbarContext } from '../context/NavbarContext';
import '../__generated__/gatsby-types';

export default function DonatePage() {
  const { setThemeDark, setThemeLight } = useContext(NavbarContext);
  useEffect(() => {
    setThemeDark();
    return setThemeLight;
  }, []);
  const donatePageData = useStaticQuery<GatsbyTypes.DonatePageQuery>(graphql`
    query DonatePage {
      strapiDonatePage {
        title
        content
        moneroAddress
        moneroQr {
          formats {
            thumbnail {
              url
            }
          }
        }
      }
    }
  `).strapiDonatePage;
  console.log(donatePageData);
  return (
    <>
      <Helmet>
        <title>{donatePageData.title}</title>
      </Helmet>
      <div>
        <h1>{donatePageData.title}</h1>
        <div>
          {donatePageData.content}
        </div>
        <span>{donatePageData.moneroAddress}</span>
      </div>
    </>
  );
}
