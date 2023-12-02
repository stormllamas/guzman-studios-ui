import { cilBell, cilEnvelopeOpen, cilList } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CHeaderNav, CNavItem, CNavLink } from "@coreui/react";

import UserMenu from "./UserMenu";

const NavItems = () => {
  return (
    <CHeaderNav>
      <CNavItem>
        <CNavLink href="#" active>
          <CIcon className="text-disabled" size="lg" icon={cilBell} />
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" active>
          <CIcon className="text-disabled" size="lg" icon={cilList} />
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" active>
          <CIcon className="text-disabled" size="lg" icon={cilEnvelopeOpen} />
        </CNavLink>
      </CNavItem>
      <UserMenu />
    </CHeaderNav>
  );
};

export default NavItems;
