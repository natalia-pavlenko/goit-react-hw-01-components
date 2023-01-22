import styled from 'styled-components'
export const ProfileContainer = styled.div`
// width: 250px;
// display: flex;
// justify-content: center;

// background-color: #FFFFFF;
display: flex;
justify-content: center;
flex-direction: column;

align-items: center;
font-size: 40px;
color: rgb(1, 1, 1);
`;
export const ProfileWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
max-width: 400px;
height: auto;
border: 1px solid rgba(205, 204, 204, 0.5);
box-shadow: rgb(15 14 15 / 70%) 0px 0px 3px;
border-radius: 4px;
background-color: #FFFFFF;
text-align: center;
`;
export const PofileImage = styled.img`
display: block;
width: 150px;
height: 150px;
padding: 15px;
border-radius: 50%;
margin: auto;
`;
export const ProfileName = styled.p`
margin: 0px;
padding: 5px;
font-size: 30px;
font-weight: 500;
-webkit-box-align: center;
align-items: center;
text-shadow: rgb(15 14 15 / 70%) 0px 0px 4px;
`;
export const ProfileTag = styled.p`
margin: 0px;
    padding: 5px;
    color: rgb(122, 108, 108);
    font-size: 22px;
    -webkit-box-align: center;
    align-items: center;
    text-shadow: rgb(0 0 0 / 53%) 0px 0px 4px;
`;
export const ProfileLocation = styled.p`
margin: 0px;
    padding: 5px;
    color: rgb(122, 108, 108);
    font-size: 24px;
    -webkit-box-align: center;
    align-items: center;
    text-shadow: rgb(0 0 0 / 53%) 0px 0px 4px;
`;
export const StatsList = styled.ul`
display: flex;
justify-content: space-evenly;
list-style: none;
background-color: rgba(138, 161, 184, 0.22);
margin: 0px;
padding: 0px;
width: 100%;
max-width: 400px;
`;
export const StatsItem = styled.li`
display: flex;
flex-direction: column;
-webkit-box-align: center;
align-items: center;
border-right: 1px solid rgba(205, 204, 204, 0.5);
padding: 20px;
gap: 5px;
width: 33%;
`;

export const StatsLabel = styled.span`
font-size: 18px;
color: rgb(122, 108, 108);
text-shadow: rgb(0 0 0 / 53%) 0px 0px 2px;
`;
export const StatsQuantity = styled.span`
font-size: 22px;
font-weight: 500;
text-shadow: rgb(15 14 15 / 70%) 0px 0px 3px;
`;
