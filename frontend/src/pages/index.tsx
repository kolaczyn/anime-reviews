import * as React from 'react';
import ContainerMedium from '../components/layout/container/ContainerMedium';
import GeneralLayout from '../components/layout/GeneralLayout';

const IndexPage = () => {
  return (
    <GeneralLayout>
      <ContainerMedium>
      <h1 className="text-blue">Hello world</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam libero, molestias facere tempora debitis voluptate quod numquam vitae tempore itaque.</p>

      </ContainerMedium>
    </GeneralLayout>
  );
};

export default IndexPage;
