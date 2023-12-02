import { cilSearch } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CFormInput, CInputGroup, CInputGroupText } from "@coreui/react";

const Searchbar = () => {

  return (
    <CInputGroup id="search-bar">
      <CInputGroupText className="border-0 bg-light">
        <CIcon className="text-disabled" size="lg" icon={cilSearch} />
      </CInputGroupText>
      <CFormInput
        aria-label="Recipient's username with two button addons"
        className="bg-light border-0"
      ></CFormInput>
    </CInputGroup>
  );
};

export default Searchbar;
