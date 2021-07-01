import React from 'react';
import classnames from 'classnames';
import Container from './Container';

type Props = { className?: string };

const ContainerBig: React.FC<Props> = ({ className, children }) => {
  return (
    <Container className={classnames('max-w-6xl', className)}>
      {children}
    </Container>
  );
};
export default ContainerBig;

ContainerBig.defaultProps = {
  className: '',
};
