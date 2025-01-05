import React from "react";

interface AdditionalInfoProps {
  title: string;
  description: string;
}

function AdditionalInfo({ title, description }: AdditionalInfoProps) {
  return (
    <div className="text-sm">
      <h4 className="font-medium mb-4">{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default AdditionalInfo;
