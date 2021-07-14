import { graphql, useStaticQuery } from 'gatsby';
import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import ContainerMedium from '../components/layout/container/ContainerMedium';
import ButtonStyle from '../components/ui/ButtonStyle';
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
      <ContainerMedium>
        <div>
          <h1>{donatePageData.title}</h1>
          <div>
            <ReactMarkdown>{donatePageData.content}</ReactMarkdown>
          </div>
          <div className="grid grid-cols-3 grid-rows-3 justify-items-start items-start gap-3">
            <ButtonStyle>Primary</ButtonStyle>
            <ButtonStyle type="danger">Danger</ButtonStyle>
            <ButtonStyle type="success">Success</ButtonStyle>

            <ButtonStyle outline>Primary</ButtonStyle>
            <ButtonStyle outline type="danger">
              Danger
            </ButtonStyle>
            <ButtonStyle outline type="success">
              Success
            </ButtonStyle>
          </div>
          {/* <span>{donatePageData.moneroAddress}</span> */}
        </div>
      </ContainerMedium>
    </>
  );
}
