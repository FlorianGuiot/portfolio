// components/ProjectHeader.tsx
import Image from 'next/image';

interface ProjectHeaderProps {
    title: string;
    description?: string;
    imgUrl: string;
    tags?: string[];
}

export default function ProjectHeader({
title,
description,
imgUrl,
tags = [],
}: ProjectHeaderProps) {
    return (
        <header className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] text-text_dark overflow-hidden">
        {/* Image de fond */}
        <Image
            src={imgUrl}
            alt={title}
            fill
            className="object-cover"
            priority
        />

        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-primary_light/80  backdrop-blur-sm" />

        {/* Contenu */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
            {description && <p className="text-lg md:text-xl max-w-2xl mb-4">{description}</p>}
            {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center">
                {tags.map((tag, index) => (
                <span
                    key={index}
                    className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm"
                >
                    {tag}
                </span>
                ))}
            </div>
            )}
        </div>
        </header>
    );
}
