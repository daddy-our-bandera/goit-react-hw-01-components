import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 0 auto;
  width: 270px;
  text-align: center;
  font-size: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const Description = styled.div`
  padding: 20px;
`;

export const Avatar = styled.img`
  width: 120px;
  padding: 4px;
  border-radius: 50%;
  border: 1px solid darkgrey;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0 0 0;
`;

export const Tag = styled.p`
  margin: 10px 0 0 0;
  color: #717171;
`;

export const Location = styled.p`
  margin: 10px 0 0 0;
  color: #717171;
`;

export const Stats = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  background-color: #e7ecf2;
  li {
    width: 100px;
    padding: 20px 0;
    border-right: 1px solid #adbdd2;
    border-top: 1px solid #adbdd2;
  }
  li:last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  display: block;
  font-size: 16px;
  color: #717171;
`;

export const Quantity = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 700;
`;
