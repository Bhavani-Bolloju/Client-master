import React from "react";
import styled from "styled-components";
import SectionHeader from "../../ui/SectionHeader";
import Modules from "./Modules";
import { ResetButton, SubmitButton } from "../../ui/Button";
import SubModules from "./SubModules";

function ModuleSetup() {
  return (
    <section className="section-add_client">
      <SectionHeader
        title="Modules Setup"
        info="Select the modules that the client can use.
        "
      />
      <ModuleWrapper>
        <div className="modules">
          <Modules />
        </div>
        <div className="sub-modules">
          <SubModules />
        </div>
        <div className="form-btns">
          <SubmitButton />
          <ResetButton />
        </div>
      </ModuleWrapper>
    </section>
  );
}

const ModuleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  gap: 2rem;
  .modules {
    flex-basis: 20%;
  }
  .sub-modules {
    flex-grow: 1;
  }
  .form-btns {
    flex-basis: 100%;
    display: flex;
    gap: 3rem;
  }
`;

export default ModuleSetup;
