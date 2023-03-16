import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Input from "../ui/Input";
import styled from "styled-components";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";

import { SubmitButton, ResetButton } from "../ui/Button";

function PaymentSetup() {
  return (
    <section className="section-add_client">
      <SectionHeader
        title="Payment setup"
        info="Set up payments for the client."
      />
      <PaymentForm>
        <div className="billing">
          <Input
            type="text"
            placeholder="Billing Address"
            name="billingAddress"
            required={true}
          />
        </div>
        <div className="address">
          <Input
            type="text"
            placeholder="Select State"
            name="state"
            required={true}
          />
          <Input
            type="text"
            placeholder="Select city"
            name="city"
            required={true}
          />
          <Input
            type="number"
            placeholder="Pincode"
            name="pincode"
            required={true}
          />
        </div>
        <Input
          type="text"
          placeholder="Select Number of Site Access "
          name="siteAccess"
          required={true}
        />
        <Input
          type="text"
          placeholder="Rs. Payable Amount per Site"
          name="amountPayable"
          required={true}
        />
        <Input
          type="number"
          placeholder="Discount(%)"
          name="discount"
          required={true}
        />
        <Input type="text" placeholder="Reason" name="reason" required={true} />
        <PaymentMode aria-label="position" row>
          <p className="title">Payment mode</p>
          <FormControlLabel control={<Checkbox />} label="UPI" />
          <FormControlLabel control={<Checkbox />} label="Net Banking" />
          <FormControlLabel control={<Checkbox />} label="Cash" />
          <FormControlLabel control={<Checkbox />} label="Check" />
          <FormControlLabel control={<Checkbox />} label="Other" />
        </PaymentMode>
        <FormControl>
          <p className="title">Payment Check</p>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="paid" control={<Radio />} label="paid" />
            <FormControlLabel
              value="pending"
              control={<Radio />}
              label="pending"
            />
          </RadioGroup>
        </FormControl>
        <div className="form-btns">
          <SubmitButton />
          <ResetButton />
        </div>
      </PaymentForm>
    </section>
  );
}

const PaymentMode = styled(FormGroup)`
  && {
    flex-basis: 50%;
  }
`;

const PaymentForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  .billing {
    flex-basis: 100%;
  }

  .address {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 1rem;
  }
  .address {
    div:nth-child(1) {
      grid-column: span 5;
    }
    div:nth-child(2) {
      grid-column: span 5;
    }
    div:nth-child(3) {
      grid-column: span 2;
    }
  }

  .title {
    flex-grow: 1;
    flex-basis: 100%;
    font-size: 1.2rem;
    color: #030037;
    font-weight: 500;
  }

  .payment-mod {
    div {
      border: none;
    }
  }

  .form-btns {
    flex-basis: 100%;
    display: flex;
    align-items: center;
    gap: 3rem;
  }
`;

export default PaymentSetup;
