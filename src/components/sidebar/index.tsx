import { Link } from "react-router-dom";

import {
  cibAlgolia,
  cilCalculator,
  cilClipboard,
  cilDollar,
  cilGift,
  cilApps,
  cilGroup,
  cilMoney,
  cilSpeedometer,
  cilSpreadsheet,
  cilUser,
} from "@coreui/icons";
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
        <Link to="/">
          <CNavItem to="/">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            Dashboard
          </CNavItem>
        </Link>
        <Link to="/transactions">
          <CNavItem to="/">
            <CIcon customClassName="nav-icon" icon={cilClipboard} />
            Transactions
            <CBadge color="danger ms-auto">3</CBadge>
          </CNavItem>
        </Link>
        <CNavTitle>Management</CNavTitle>
        <CNavGroup
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilDollar} /> Finances
            </>
          }
        >
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilCalculator} /> Accounting
          </CNavItem>
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilSpreadsheet} /> Stocks
          </CNavItem>
        </CNavGroup>
        <CNavGroup
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilApps} /> Categories
            </>
          }
        >
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilMoney} /> Expenses
          </CNavItem>
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilGift} /> Packages
          </CNavItem>
        </CNavGroup>
        <CNavTitle>Network</CNavTitle>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilUser} /> Users
        </CNavItem>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilGroup} /> Suppliers
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
};

export default Sidebar;
