import React from "react";
import FooterWrapper from "../components/Footer/FooterWrapper";
import FooterTitle from "../components/Footer/FooterTitle";
import FooterRow from "../components/Footer/FooterRow";
import FooterColumn from "../components/Footer/FooterColumn";
import FooterLink from "../components/Footer/FooterLink";

function FooterCompound() {
  return (
    <FooterWrapper>
      <FooterTitle>Questions? Contact us.</FooterTitle>
      <FooterRow>
        <FooterColumn>
          <FooterLink>FAQ</FooterLink>
          <FooterLink>Investor Relations</FooterLink>
          <FooterLink>Privacy</FooterLink>
          <FooterLink>Speed Test</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>Help Center</FooterLink>
          <FooterLink>Jobs</FooterLink>
          <FooterLink>Cookie Preferences</FooterLink>
          <FooterLink>Legal Notices</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>Account</FooterLink>
          <FooterLink>Ways to Watch</FooterLink>
          <FooterLink>Corporate Information</FooterLink>
          <FooterLink>Netflix Originals</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>Media Center</FooterLink>
          <FooterLink>Terms of Use</FooterLink>
          <FooterLink>Contact Us</FooterLink>
        </FooterColumn>
      </FooterRow>
    </FooterWrapper>
  );
}

export default FooterCompound;
