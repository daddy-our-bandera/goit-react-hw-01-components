import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  gap: 30px;
  padding: 0;
  margin: 15px auto 0 auto;
  width: 400px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 10px;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
export const Avatar = styled.img`
  display: block;
  border-radius: 4px;
  padding: 8px;
`;
export const Name = styled.p`
  font-size: 30px;
  font-weight: 500;
`;
