import Header from "../components/molecules/header/Header";
import { AppContainer, Main } from "../styles/Home.style";
import About from "../components/organisms/about/About";

export default function Home() {
  return (
    <AppContainer>
      <Header />
      <Main>
        <About />
      </Main>
      {/* <Footer /> */}
    </AppContainer>
  );
}
