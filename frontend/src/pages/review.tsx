import React, { useContext, useEffect } from 'react';
import ContainerSmall from '../components/layout/container/ContainerSmall';
import deathNoteImg from '../images/death-note.jpg';
import { NavbarContext } from '../context/NavbarContext';

type Props = {};

const ReviewPage: React.FC<Props> = ({}) => {
  const { setThemeDark, setThemeLight } = useContext(NavbarContext);
  useEffect(() => {
    setThemeDark();
    return setThemeLight;
  }, []);
  return (
    <div
      className="bg-center bg-no-repeat bg-cover min-h-screen"
      style={{ backgroundImage: `url("${deathNoteImg}")` }}
    >
      <ContainerSmall>
        <section className="bg-white text-ink">
          <h1>Death Note</h1>
        </section>
      </ContainerSmall>
    </div>
  );
};
export default ReviewPage;
