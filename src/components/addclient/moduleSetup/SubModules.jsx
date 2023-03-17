import React from "react";
import SectionHeader from "../../ui/SectionHeader";
import { TbSteeringWheel } from "react-icons/tb";
import styled from "styled-components";
import { ButtonWrapper } from "../../ui/Button";
import { BsCheckLg } from "react-icons/bs";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import { ModuleItem } from "./Modules";
import FormGroup from "@mui/material/FormGroup";

const SubList = styled(Box)`
  && {
    .gDZHfC.gDZHfC .css-ahj2mt-MuiTypography-root {
      color: #686687;
      font-size: 1.2rem;
    }
  }
`;

const children = (
  <SubList
    sx={{
      display: "flex",
      flexDirection: "column",
      ml: 3,
      mb: 0,
      mt: 0,
    }}
  >
    <ModuleItem checked={false} value="Daily" />
    <ModuleItem checked={false} value="Activity Wise" />
  </SubList>
);

function SubModules() {
  return (
    <Submodule>
      <SubModuleHeader>
        <TbSteeringWheel />
        <SectionHeader
          title="Daily Tasks"
          info="Select the sub modules that the client can use."
        />
        <ButtonWrapper>
          <BsCheckLg />
          <span>Visible to Clients</span>
        </ButtonWrapper>
      </SubModuleHeader>
      <div className="items">
        <FormGroup>
          <ModuleItem checked={false} value="show all sub modules" />
          <ModuleItem checked={false} value="Summary" />
          <ModuleItem checked={false} value="View Tasks" />
          <ModuleItem checked={false} value="Create New Task" />
          <ModuleItem checked={false} value="Logbook" />
          <ModuleItem checked={false} value="Logsheet" />
          <div>
            <ModuleItem checked={false} value="Logged Sheet" />
            {children}
          </div>
        </FormGroup>
      </div>
    </Submodule>
  );
}

const Submodule = styled.div`
  border: 2px solid rgba(3, 0, 55, 0.08);
  padding: 1rem;

  .items {
    padding: 1rem;

    .css-j204z7-MuiFormControlLabel-root {
      margin-top: 0rem;
    }
  }
`;

const SubModuleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem;

  svg {
    font-size: 2.5rem;
  }
  button {
    margin-left: auto;
  }

  border-bottom: 2px solid rgba(3, 0, 55, 0.08);
`;

export default SubModules;
