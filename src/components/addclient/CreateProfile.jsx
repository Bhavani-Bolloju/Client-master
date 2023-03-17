import React from "react";
import styled from "styled-components";
import Input from "../ui/Input";
import SectionHeader from "../ui/SectionHeader";
import { SubmitButton, ResetButton } from "../ui/Button";

function CreateProfile() {
  return (
    <Profile className="section-add_client">
      <SectionHeader
        title="Create client profile"
        info="    Add some basic information related to the client."
      />

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
            <SubmitButton />
            <ResetButton />
          </div>
        </form>
      </ProfileSection>
    </Profile>
  );
}

const Profile = styled.section`
  && {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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
        flex-basis: 100%;
        flex-grow: 1;

        align-items: center;
        svg {
          font-size: 1.8rem;
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

  @media screen and (max-width: 800px) {
    width: 7rem;
    height: 7rem;
  }

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

export default CreateProfile;
