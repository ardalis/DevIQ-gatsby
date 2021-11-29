import styled from '@emotion/styled';

export const NimbleSidebar = styled.div`
  padding-top: 72px;
  width: 100%;
  display: block;
  text-align: center;
  max-width: 300px;
`;

export const NimbleContent = styled.div`
  a { border: 0px;}
`;

export const NimbleText = styled.div`
  margin-top: 1em;
  font-weight: normal;

  a { 
    font-weight: normal;
    font-size: 0.8em;

    
    &:hover {
      text-decoration: none;
    }
  }
  span { display: block; }
`;

export const NimbleCallout = styled.div`
  padding-top: 1em;
`;
