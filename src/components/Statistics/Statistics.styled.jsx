import styled from '@emotion/styled';

export const StatBox = styled.div`
  width: 400px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid darkgrey;
`;
export const Title = styled.h2`
  padding: 15px 0;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;

  li {
    width: 20%;
    padding: 15px 0;
    background-color: #e7ecf2;

    border-right: 1px solid #adbdd2;
    border-top: 1px solid #adbdd2;
  }
  li:last-child {
    border-right: none;
  }
`;
export const Item = styled.li`
  span:last-child {
    padding-top: 10px;
  }
`;
export const Label = styled.span`
  display: block;
  font-size: 20px;
`;
