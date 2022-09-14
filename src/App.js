import styled from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router-dom";  
import Profile from "./comp/Feed/Profile";
import Header from "./comp/Header/StyledHeader";
import Footer from "./comp/StyledFooter";
import { StyledSectionFeed } from "./comp/Feed/StyledSectionFeed";
import StyledNav from "./comp/Nav/StyledNav";
import Dialogs from "./comp/Dialogs/StyledDialogs";
const StyledMainContainer = styled.div`
  width: 80%;
  margin: 0 auto 5vh;
  display: grid;
  grid-template-columns: 2.5fr 7fr;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid transparent;
  min-height: calc(98vh - 150px);
  gap: 3ex;
`;

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <StyledMainContainer>
        <StyledNav />

        <StyledSectionFeed className="section_profile">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/Messages" element={<Dialogs/>} />
          </Routes>
        </StyledSectionFeed>
      </StyledMainContainer>

      <Footer />
    </BrowserRouter>
  );
}
