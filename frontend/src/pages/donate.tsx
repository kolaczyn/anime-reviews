import { graphql, useStaticQuery } from 'gatsby';
import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import { NavbarContext } from '../context/NavbarContext';
import { DonatePageQuery } from '../graphql/query/__generated__/DonatePageQuery';

export default function DonatePage() {
  const { setThemeDark, setThemeLight } = useContext(NavbarContext);
  useEffect(() => {
    setThemeDark();
    return setThemeLight;
  }, []);
  const donatePageData = useStaticQuery<DonatePageQuery>(graphql`
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
  return (
    <>
      <Helmet>
        <title>{donatePageData.title}</title>
      </Helmet>
      <div>
        <h1>{donatePageData.title}</h1>
        <div>
          <ReactMarkdown>{donatePageData.content}</ReactMarkdown>
        </div>
        <span>{donatePageData.moneroAddress}</span>
      </div>
    </>
  );
}
