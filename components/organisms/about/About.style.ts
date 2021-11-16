import styled from "styled-components";

export const AboutWrapper = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.font.em_40};
    color: ${({ theme }) => theme.colors.textWhite};
  }
`;
