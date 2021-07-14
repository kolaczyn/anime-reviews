import { graphql, useStaticQuery } from 'gatsby';
import copy from 'copy-to-clipboard';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import ContainerMedium from '../components/layout/container/ContainerMedium';
import ButtonStyle from '../components/ui/ButtonStyle';
import { NavbarContext } from '../context/NavbarContext';
import { DonatePageQuery } from '../graphql/query/__generated__/DonatePageQuery';
import strapiUrl from '../utils/strapiUrl';

export default function DonatePage() {
  const { setThemeDark, setThemeLight } = useContext(NavbarContext);
  const [copyMessage, setCopyMessage] = useState<
    'Monero Address' | 'Copied To Clipboard'
  >('Monero Address');
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

  const copyAddressToClipboard = () => {
    copy(donatePageData.moneroAddress);
    setCopyMessage('Copied To Clipboard');
  };
  return (
    <>
      <Helmet>
        <title>{donatePageData.title}</title>
      </Helmet>
      <ContainerMedium>
        <div className="pt-8">
          <h1>{donatePageData.title}</h1>
          <div>
            <ReactMarkdown>{donatePageData.content}</ReactMarkdown>
          </div>
          <div className="space-x-4">
            <button onClick={copyAddressToClipboard}>
              <ButtonStyle type="success">{copyMessage}</ButtonStyle>
            </button>
            <a
              href={strapiUrl(donatePageData.moneroQr.formats.thumbnail.url)}
              target="_blank"
            >
              <ButtonStyle type="success" outline>
                QR Code
              </ButtonStyle>
            </a>
          </div>
        </div>
      </ContainerMedium>
    </>
  );
}
