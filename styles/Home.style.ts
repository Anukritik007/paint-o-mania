import styled from "styled-components";
import { devices } from "../constants";

export const AppContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  background-image: linear-gradient(
    to left bottom,
    #f694cb,
    #e78dcf,
    #d687d3,
    #c182d7,
    #aa7eda,
    #928bea,
    #7297f5,
    #48a2fc,
    #00bdff,
    #00d5ff,
    #28eafe,
    #70fef5
  );
`;

export const Main = styled.main`
  padding: 5rem 0 2rem;

  @media ${devices.mobile} {
    padding: 4rem 0 2rem;
  }
`;
