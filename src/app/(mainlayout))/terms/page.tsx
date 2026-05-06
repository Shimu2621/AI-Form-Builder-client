import type { Metadata } from "next";
import SchemaMarkup from "./SchemaMarkup";
import TermsWrapper from "./TermsWrapper";

export const metadata: Metadata = {
  title: "Terms of Service | AI Form Builder",
  description:
    "Our terms and conditions for using our servic. Please read carefully to understand your rights and responsibility",
};

export default function Page() {
  return (
    <>
      <SchemaMarkup />
      <TermsWrapper />
    </>
  );
}
