import styled from 'styled-components';
export const StatisticsSection = styled.section`
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  height: auto;
  border: 1px solid rgba(205, 204, 204, 0.5);
  border-radius: 4px;
  padding: 0px;
  margin: 0px;
`;
export const StatTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  height: 40px;
  margin: 0px auto;
  padding: 20px;
  font-size: 30px;
  font-weight: 500;
  color: rgb(109, 116, 130);
  text-shadow: rgb(177 164 164) 2px 3px 5px;
`;
export const ListStat = styled.ul`
  display: flex;
  // justify-content: space-evenly;
  list-style: none;
  margin: auto;
  padding: 0px;
  width: 100%;
  max-width: 400px;
  color: white;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  border-right: 1px solid rgba(205, 204, 204, 0.5);
  padding: 20px;
  gap: 5px;
  width: 20%
  color: rgb(255, 255, 255);

`;
export const StatLabel = styled.span`
  font-size: 18px;
  -webkit-box-align: center;
  align-items: center;
  text-shadow: rgb(0 0 0 / 53%) 0px 0px 2px;
`;
export const StatPercentage = styled.span`
  font-size: 22px;
  font-weight: 500;
  -webkit-box-align: center;
  align-items: center;
  text-shadow: rgb(15 14 15 / 70%) 0px 0px 3px;
`;
