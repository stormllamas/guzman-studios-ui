import { cilHamburgerMenu } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CContainer, CHeader, CHeaderToggler } from "@coreui/react";

import useLayoutStore from "store/layout/layoutStore";

import NavItems from "./NavItems";
import Searchbar from "./Searchbar";

const Header = () => {
  const sidebarOpen = useLayoutStore((state) => state.sidebarOpen);
  const updateSidebarOpen = useLayoutStore((state) => state.updateSidebarOpen);

  return (
    <CHeader>
      <CContainer fluid>
        <div className="d-flex left-header">
          <CHeaderToggler className="me-md-3" onClick={() => updateSidebarOpen(!sidebarOpen)}>
            <CIcon icon={cilHamburgerMenu} />
          </CHeaderToggler>
          <Searchbar />
        </div>
        <div className="right-header">
          <NavItems />
        </div>
      </CContainer>
    </CHeader>
  );
};

export default Header;
