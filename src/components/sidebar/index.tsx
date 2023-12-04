import { cibAlgolia, cilPuzzle, cilSpeedometer } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CBadge,
  CNavGroup,
  CNavItem,
  CNavTitle,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";

import useLayoutStore from "store/layout/layoutStore";

const Sidebar = () => {
  const sidebarOpen = useLayoutStore((state) => state.sidebarOpen);
  const sidebarNarrow = useLayoutStore((state) => state.sidebarNarrow);
  const updateSidebarNarrow = useLayoutStore(
    (state) => state.updateSidebarNarrow
  );

  return (
    <CSidebar unfoldable={sidebarNarrow} visible={sidebarOpen}>
      <CSidebarBrand className="sidebar-brand-full">
        <CIcon
          className="nav-icon text-white me-md-3"
          icon={cibAlgolia}
          height={35}
        />
        <strong>GUZMAN STUDIOS</strong>
        <CSidebarToggler onClick={() => updateSidebarNarrow(!sidebarNarrow)} />
      </CSidebarBrand>
      <CSidebarBrand className="sidebar-brand-narrow">
        <CIcon className="nav-icon text-white" icon={cibAlgolia} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <CNavTitle>Nav Title</CNavTitle>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          Nav item
        </CNavItem>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          With badge
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavItem>
        <CNavGroup
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown
            </>
          }
        >
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown
            item
          </CNavItem>
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown
            item
          </CNavItem>
        </CNavGroup>
      </CSidebarNav>
    </CSidebar>
  );
};

export default Sidebar;
