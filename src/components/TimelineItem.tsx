import React from 'react';

export type TimelineItemProps = {
  title: string;
  description: string;
  year: number;
  endYear?: number | 'En cours';
  duration?: string;
  type?: string;
  category?: string;
  imageUrl?: string;
  pageUrl?: string;
  side: 'left' | 'right';
};

export default function TimelineItem({ title, description, year, endYear, duration, type, category, imageUrl, pageUrl, side }: TimelineItemProps) {
  const isLeft = side === 'left';
  const bgClass = category === 'Pro' ? 'bg-background' : 'bg-background/50';
  return (
    <div className="w-full relative mb-8 flex flex-col items-center md:flex-row md:justify-between">


      {/* Rond au centre - caché sur mobile */}
      <div className="hidden md:block absolute left-[calc(50%+0.5px)] top-6 transform -translate-x-1/2 z-20">
        <div className="w-4 h-4 bg-primary rounded-full border-2 border-background" />
      </div>

      {/* Colonne gauche (visible toujours, mais vide si côté droite) */}
      <div className="hidden md:flex w-1/2 pr-6 justify-end">
        {isLeft && (
          <div className={`${bgClass} max-w-md p-4 rounded-xl shadow-md text-left`}>
            <h3 className="">{title}</h3>
              {(type || category) && (
              <div className="text-xs text-primary font-medium mb-1">
                {type} {type && category && '•'} {category}
              </div>
              )}
            <p className="text-sm ">{description}</p>
            <div className="mt-2 text-xs text-primary font-medium">
              {year} {endYear && `– ${endYear}`} {duration && `• ${duration}`}
            </div>
          </div>
        )}
      </div>

      {/* Sur mobile : carte centrée pleine largeur */}
      {isLeft && (
        <div className="md:hidden w-full px-4">
          <div className={`${bgClass} max-w-md p-4 rounded-xl shadow-md text-left`}>
            <h3 className="">{title}</h3>
              {(type || category) && (
              <div className="text-xs text-primary font-medium mb-1">
                {type} {type && category && '•'} {category}
              </div>
              )}
            <p className="text-sm">{description}</p>
            <div className="mt-2 text-xs text-primary font-medium">
              {year} {endYear && `– ${endYear}`} {duration && `• ${duration}`}
            </div>
          </div>
        </div>
      )}

      {/* Colonne droite (visible toujours, mais vide si côté gauche) */}
      <div className="hidden md:flex w-1/2 pl-6 justify-start">
        {!isLeft && (
          <div className={`${bgClass} max-w-md p-4 rounded-xl shadow-md text-left`}>
            <h3 className="">{title}</h3>
              {(type || category) && (
              <div className="text-xs text-primary font-medium mb-1">
                {type} {type && category && '•'} {category}
              </div>
              )}
            <p className="text-sm">{description}</p>
            <div className="mt-2 text-xs text-primary font-medium">
              {year} {endYear && `– ${endYear}`} {duration && `• ${duration}`}
            </div>
          </div>
        )}
      </div>

      {/* Sur mobile : carte centrée pleine largeur pour droite */}
      {!isLeft && (
        <div className="md:hidden w-full px-4">
          <div className={`${bgClass} max-w-md p-4 rounded-xl shadow-md text-left`}>
            <h3 className="">{title}</h3>
              {(type || category) && (
              <div className="text-xs text-primary font-medium mb-1">
                {type} {type && category && '•'} {category}
              </div>
              )}
            <p className="text-sm">{description}</p>
            <div className="mt-2 text-xs text-primary font-medium">
              {year} {endYear && `– ${endYear}`} {duration && `• ${duration}`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
