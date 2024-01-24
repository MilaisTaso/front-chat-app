import React from "react";
import { Helmet } from "react-helmet-async";

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head: React.FC<HeadProps> = ({ title = '', description = '' }) => {
  return (
    <Helmet
      title={title ? `${title} | Front Chat App` : undefined}
      defaultTitle="Front Chat App"
    >
      <meta name="description" content={description || "Sinple Chat Application"} />
    </Helmet>
  );
};
