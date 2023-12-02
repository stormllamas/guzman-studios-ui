import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";

const UserMenu = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle color="secondary">User</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Profile</CDropdownItem>
        <CDropdownItem href="#">Settings</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Logout</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default UserMenu;
