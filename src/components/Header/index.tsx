import { CContainer, CHeader } from "@coreui/react";

import NavItems from "./NavItems";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <>
      <CHeader>
        <CContainer fluid>
          {/* <CHeaderBrand href="#">Header</CHeaderBrand> */}
          <Searchbar />
          <NavItems />
        </CContainer>
      </CHeader>
    </>
  );
};

export default Header;
