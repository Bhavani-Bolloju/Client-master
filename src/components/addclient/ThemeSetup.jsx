import React from "react";
import styled from "styled-components";
import SectionHeader from "../ui/SectionHeader";
import TextField from "@mui/material/TextField";
import { SubmitButton, ResetButton } from "../ui/Button";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { FaRegCircle } from "react-icons/fa";

function ThemeSetup() {
  return (
    <ThemeSection className="section-add_client">
      <SectionHeader
        title="Theme Setup"
        info="Add information about the client to give them a personalized
        experience."
      />
      <div className="primary-color">
        <InputTextField
          label="Primary Color"
          id="outlined-size-small"
          defaultValue="#153AC7"
        />
        <p>Add Hex Value.</p>
      </div>
      <LoginTheme>
        <p className="title">Login Theme</p>
        <p className="info">Select the look and feel of the login page.</p>
        <InputRadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          defaultValue="#153AC7"
        >
          <FormControlLabel
            value="#153AC7
            "
            control={<Radio />}
            label="Use Color"
          />
        </InputRadioGroup>
        <ColorOutlinedInput
          id="outlined-adornment-weight"
          value="#F8F9FD"
          startAdornment={
            <InputAdornment position="end">
              <FaRegCircle />
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </LoginTheme>
      <LoginModal>
        <p className="title">where should be the logic modal</p>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="center"
          name="radio-buttons-group"
        >
          <div className="sides">
            <div className="side-container">
              <div className="left-side side">
                <div className="modal"></div>
              </div>
              <FormControlLabel value="left" control={<Radio />} label="left" />
            </div>
            <div className="side-container">
              <div className="right-side side">
                <div className="modal"></div>
              </div>
              <FormControlLabel
                value="right"
                control={<Radio />}
                label="right"
              />
            </div>
            <div className="side-container active">
              <div className="center-side side">
                <div className="modal"></div>
              </div>
              <FormControlLabel
                value="center"
                control={<Radio />}
                label="center"
              />
            </div>
          </div>
        </RadioGroup>
      </LoginModal>
      <div className="form-btns">
        <SubmitButton />
        <ResetButton />
      </div>
    </ThemeSection>
  );
}

const ThemeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  .primary-color {
    flex-basis: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    input {
    }
    p {
      color: #686687;
      font-size: 1.2rem;
      margin-top: 1.2rem;
    }
  }
  .title {
    color: #030037;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .form-btns {
    display: flex;
    gap: 3rem;
  }
`;

const ColorOutlinedInput = styled(OutlinedInput)`
  margin-left: 2rem;
  width: 28rem;
  && {
    .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input {
      padding: 1rem;
    }

    border: 1px solid #ececec;
    &:hover fieldset {
      border: 1px solid #ececec;
    }
    svg {
      font-size: 1.5rem;
      fill: #ececec;
    }
  }
`;

const LoginModal = styled.div`
  && {
    .sides {
      display: flex;
      gap: 2rem;
      margin-top: 2rem;
    }

    .side {
      width: 12rem;
      height: 8rem;
      background-color: #f5f5f5;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      padding: 2rem;

      @media screen and (max-width: 950px) {
        width: 10rem;
        height: 6rem;
        padding: 1rem;
      }
    }

    .modal {
      border-radius: 0.5rem;
      width: 3rem;
      height: 4rem;
      background-color: #153ac7;
    }

    .left-side {
      justify-content: left;
    }
    .center-side {
      justify-content: center;
    }

    .side + label {
      text-align: center;
      margin: auto;
    }

    .side-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      &.active {
        .side {
          border: 2px solid #153ac7;
        }
      }
    }
  }
`;

const InputRadioGroup = styled(RadioGroup)`
  && {
    .css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label {
      color: #030037;
      font-size: 1.2rem;
      font-weight: 500;
    }
    svg {
      fill: #153ac7;
    }
  }
`;

const LoginTheme = styled.div`
  .info {
    color: #686687;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const InputTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#939596",
  },

  "& .MuiInputLabel-root": {
    color: "#939596",
    fontSize: "1.2rem",
    fontWeight: "300",
  },
  "& .MuiOutlinedInput-input": {
    color: "#030037",
    fontSize: "1.2rem",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ECECEC",
    },
    "&:hover fieldset": {
      borderColor: "#ECECEC",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#efeded",
    },
  },
});

export default ThemeSetup;
