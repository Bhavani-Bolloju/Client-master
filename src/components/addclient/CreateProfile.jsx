import React from "react";
import styled from "styled-components";
import Input from "../ui/Input";
import { Button } from "@mui/material";
import { HiOutlineChevronRight } from "react-icons/hi";
import { VscDebugRestart } from "react-icons/vsc";

function CreateProfile() {
  return (
    <Profile>
      <header>
        <p className="header">Create client profile</p>
        <p className="title">
          Add some basic information related to the client.
        </p>
      </header>
      <ProfileSection>
        <figure>
          <FigImage>
            <input type="file" id="img" name="img" accept="image/*" />
            <label htmlFor="img">+</label>
          </FigImage>
          <figcaption>
            <span>company logo</span>
            <span>Logo ratio shoud be 1:1 and should be 120px X 120 px</span>
          </figcaption>
        </figure>
        <form>
          <Input
            type="text"
            placeholder="company name"
            name="companyName"
            required={true}
          />
          <Input
            type="text"
            placeholder="Website"
            name="website"
            required={false}
          />
          <Input
            type="text"
            placeholder="Select business category"
            name="category"
            required={true}
          />
          <Input
            type="text"
            placeholder="Select Facility Management Company"
            name="management"
            required={true}
          />
          <Input
            type="email"
            placeholder="Company Email Address"
            name="emailAddress"
            required={true}
          />
          <Input
            type="tel"
            placeholder="Mobile Number"
            name="telephone"
            required={true}
          />
          <Input
            type="text"
            placeholder="Select state"
            name="state"
            required={true}
          />
          <div className="input-location">
            <Input
              type="text"
              placeholder="Select city"
              name="city"
              required={true}
            />
            <Input
              type="number"
              placeholder="pincode"
              name="pincode"
              required={true}
            />
          </div>
          <Input
            type="number"
            placeholder="GST number"
            name="gst number"
            required={true}
          />
          <Input
            type="fax"
            placeholder="fax number"
            name="fax"
            required={false}
          />
          <div className="form-btns">
            <SubmitButton variant="save" type="submit">
              <span>save & continue</span>
              <HiOutlineChevronRight />
            </SubmitButton>
            <button className="reset">
              <VscDebugRestart />
              <span>Reset</span>
            </button>
          </div>
        </form>
      </ProfileSection>
    </Profile>
  );
}

const Profile = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #fff;
  padding: 2rem;
  padding-bottom: 4rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  .header {
    font-size: 1.8rem;
    font-weight: 500;
    text-transform: capitalize;
    color: #030037;
    margin-bottom: 0.5rem;
  }
  .title {
    font-size: 1.2rem;
    color: #686687;
  }
`;

const ProfileSection = styled.section`
  && {
    figure {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    figCaption {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      span {
        &:first-child {
          color: #030037;
          text-transform: capitalize;
          font-size: 1.4rem;
        }

        &:last-child {
          color: #686687;
          font-size: 1rem;
        }
      }
    }

    form {
      display: flex;
      gap: 2rem;
      margin-top: 2rem;
      flex-wrap: wrap;
      .input-location {
        display: flex;
        flex-basis: 48%;
        flex-grow: 1;
        gap: 2rem;
        flex-wrap: nowrap;
        justify-content: space-between;
      }
      .form-btns {
        display: flex;
        gap: 3rem;
        align-items: center;
        svg {
          font-size: 1.8rem;
        }
      }
      .reset {
        border: none;
        color: #686687;
        background: transparent;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        svg {
          font-size: 1.5rem;
        }
        &:focus {
          outline: none;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

const FigImage = styled.div`
  width: 10rem;
  height: 10rem;
  position: relative;
  border-radius: 50%;
  border: 1px solid #e6e6e6;
  input {
    display: none;
  }
  label {
    font-size: 3rem;
    font-weight: 300;
    color: #b8babc;
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      cursor: pointer;
    }
  }
`;

const SubmitButton = styled(Button)`
  && {
    background-color: #153ac7;
    color: #ffffff;
    font-size: 1.3rem;
    padding: 0.8rem 1.4rem;
    text-transform: capitalize;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 1rem;

    &:hover {
      background-color: #1941e1;
    }
  }
`;

export default CreateProfile;
