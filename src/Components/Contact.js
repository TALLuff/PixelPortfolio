import React from "react";
import { Parallax } from "react-scroll-parallax";
import {
  ContactContainer,
  ContactForm,
  FormInput,
  NestedInput,
  FormSubmit,
  NestedSubmit,
  FormLabel,
  NestedLabel,
  NoticeBoard,
  NestedEmail
} from "../Elements/Contact";

const Clouds = () => {
  return (
    <Parallax y={[-30, 30]}>
      <ContactContainer>
        <NoticeBoard>
          <ContactForm>
            <FormLabel>
              <NestedLabel>Get in Contact</NestedLabel>
            </FormLabel>
            <FormInput>
              <NestedInput placeholder="Write your message here" />
              <NestedEmail placeholder="Enter your email address" />
            </FormInput>
            <FormSubmit>
              <NestedSubmit>Send</NestedSubmit>
            </FormSubmit>
          </ContactForm>
        </NoticeBoard>
      </ContactContainer>
    </Parallax>
  );
};

export default Clouds;
