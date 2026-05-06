import type { Metadata } from "next";
import SchemaMarkup from "./SchemaMarkup";
import PricingWrapper from "./PricingWrapper";

export const metadata: Metadata = {
  title: "Pricing Plans | AI Form Builder",
  description:
    "Choose the perfect plan for your needs. Start for free or unlock powerful features with our premium options.",
};

export default function Page() {
  return (
    <>
      <SchemaMarkup />
      <PricingWrapper />
    </>
  );
}
