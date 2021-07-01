import React from 'react';
import classnames from 'classnames';
import Container from './Container';

type Props = { className?: string };

const ContainerMedium: React.FC<Props> = ({ className, children }) => {
  return (
    <Container className={classnames('max-w-5xl', className)}>
      {children}
    </Container>
  );
};
export default ContainerMedium;

ContainerMedium.defaultProps = {
  className: '',
};
