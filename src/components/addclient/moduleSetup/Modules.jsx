import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "styled-components";

export const ModuleItem = function ({ value, checked }) {
  return (
    <FormCheckboxLabel
      value={value}
      control={<Checkbox defaultChecked={checked} />}
      label={value}
      labelPlacement="end"
    />
  );
};

function Modules() {
  return (
    <FormGroup aria-label="position">
      <ModuleItem value="Home/Dashboard" checked={true} />
      <ModuleItem value="Helpdesk" checked={true} />
      <ModuleItem value="Assets" checked={true} />
      <ModuleItem value="Daily Tasks" checked={true} />
      <ModuleItem value="PPM" checked={false} />
      <ModuleItem value="Employees" checked={true} />
      <ModuleItem value="Profile" checked={true} />
    </FormGroup>
  );
}

const FormCheckboxLabel = styled(FormControlLabel)`
  && {
    &:not(:first-child) {
      margin-top: 1rem;
    }
    .css-ahj2mt-MuiTypography-root {
      color: #030037;
      font-size: 1.4rem;
    }
    .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked {
      color: #153ac7;
    }
  }
`;

export default Modules;
