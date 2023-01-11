import PropTypes from 'prop-types';
import { ContainerWrap, ContainerTitle } from './Container.styled';

export function Container({ title, children }) {
  return (
    <ContainerWrap>
      {<ContainerTitle>{title}</ContainerTitle>}
      {children}
    </ContainerWrap>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
