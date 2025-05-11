'use client';

import React from 'react';

interface SkillCardProps {
  category: string;
  rating: number;
  renderStars: (rating: number) => React.ReactNode[];
}

const SkillCard: React.FC<SkillCardProps> = ({
  category,
  rating,
  renderStars
}) => {
  return (
    <div 
      className="bg-white p-3 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
      itemScope
      itemType="https://schema.org/DefinedTerm"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold" itemProp="termCode">{category}</h3>
        <div 
          className="flex" 
          aria-label={`${rating} out of 5 skill level`}
          itemProp="competencyLevel" 
          itemScope 
          itemType="https://schema.org/Rating"
        >
          <meta itemProp="ratingValue" content={rating.toString()} />
          <meta itemProp="bestRating" content="5" />
          <span className="sr-only">{rating} out of 5</span>
          {renderStars(rating)}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
