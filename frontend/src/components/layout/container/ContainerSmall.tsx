import React from 'react';
import classnames from 'classnames';
import Container from './Container';

type Props = { className?: string };

const ContainerSmall: React.FC<Props> = ({ className, children }) => {
  return (
    <Container className={classnames('max-w-xl', className)}>
      {children}
    </Container>
  );
};
export default ContainerSmall;

ContainerSmall.defaultProps = {
  className: '',
};
