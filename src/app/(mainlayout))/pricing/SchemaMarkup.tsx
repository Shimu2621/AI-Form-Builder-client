import React from "react";

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI Form Builder",
    description:
      "Create custom forms with AI in second. Choose from our free and premium plan to get started.",
    offers: [
      {
        "@type": "Offer",
        name: "Normal",
        price: "0",
        priceCurrency: "USD",
        description: "Perfect for getting started with form building",
      },
      {
        "@type": "Offer",
        name: "Premium",
        price: "5",
        priceCurrency: "USD",
        description: "Advanced feature for power users and teams",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
