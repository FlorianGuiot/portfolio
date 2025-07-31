'use client';
import React from 'react';
import TimelineItem from '../../components/TimelineItem';

type Event = {
    title: string;
    description: string;
    year: number;
    endYear?: number | 'En cours';
    duration?: string;
    type?: 'CDI' | 'Stage' | 'Alternance' | 'Indépendant' | 'Bénévolat' | string;  // type de poste
    category?: 'Pro' | 'Formation'; // pro ou scolaire
    imageUrl?: string;  // lien vers logo
    pageUrl?: string;   // lien vers page externe
};

const events: Event[] = [
    {
        title: "Co-fondateur ESUS IMMO",
        description: "Responsable administratif",
        year: 2024,
        endYear: 'En cours',
        duration: "3 mois",
        type: "Indépendant",
        category: "Pro",
        imageUrl: "https://exemple.com/logo-esus.png",
        pageUrl: "https://esus-immo.example.com"
    },
    {
        title: "Responsable informatique chez MaPetiteAgence",
        description: "Développement web fullstack",
        year: 2024,
        endYear: 'En cours',
        duration: "1 an",
        type: "CDI",
        category: "Pro",
        imageUrl: "https://exemple.com/logo-esus.png",
        pageUrl: "https://esus-immo.example.com"
    },
    {
        title: "Responsable informatique chez MaPetiteAgence",
        description: "Développement web fullstack",
        year: 2023,
        endYear: 2024,
        duration: "1 an",
        type: "Alternance",
        category: "Pro",
        imageUrl: "https://exemple.com/logo-esus.png",
        pageUrl: "https://esus-immo.example.com"
    },
    {
        title: "Responsable informatique chez CVN-UP",
        description: "Développement de la présence en ligne de l'association",
        year: 2022,
        endYear: 2023,
        duration: "1 an",
        type: "Indépendant",
        category: "Pro",
        imageUrl: "https://exemple.com/logo-esus.png",
        pageUrl: "https://esus-immo.example.com"
    },
    {
        title: "EPSI - Bachelor Concepteur Développeur d'Application",
        description: "Formation en développement",
        year: 2023,
        endYear: 2024,
        duration: "1 an",
        category: "Formation",
        imageUrl: "https://exemple.com/logo-esus.png",
        pageUrl: "https://esus-immo.example.com"
    },
    {
        title: "BTS SIO",
        description: "Formation en développement : solutions logicielles et applications métiers",
        year: 2021,
        endYear: 2023,
        duration: "2 ans",
        category: "Formation",
        imageUrl: "https://exemple.com/logo-esus.png",
        pageUrl: "https://esus-immo.example.com"
    },
    {
        title: "Bac professionnel SN",
        description: "Spécialité réseaux informatiques et systèmes communicants",
        year: 2019,
        endYear: 2021,
        duration: "2 ans",
        category: "Formation",
        imageUrl: "https://exemple.com/logo-esus.png",
        pageUrl: "https://esus-immo.example.com"
    },
];

export default function Timeline() {
    // Tri du plus ancien au plus récent (pour que le plus ancien soit en bas)
    const sortedEvents = [...events].sort((a, b) => a.year - b.year).reverse();

    return (
        <section id="timeline" className="pt-12">
            <div className="bg-gradient-to-t from-primary/80 to-secondary/40 w-full">
                <div className="container mx-auto px-6">
                    <div className="flex justify-center p-8">
                        <h2>Mon parcours</h2>
                    </div>

                    <div className="relative">
                        {/* Ligne centrale */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-secondary z-0" />

                        <div className="flex flex-col gap-12 pt-10 relative z-10">
                        {sortedEvents.map((event, index) => {
                            const side: 'left' | 'right' = index % 2 === 0 ? 'left' : 'right';
                            return (
                            <TimelineItem
                                key={`${event.year}-${event.title}`}
                                title={event.title}
                                description={event.description}
                                year={event.year}
                                endYear={event.endYear}
                                duration={event.duration}
                                type={event.type}
                                category={event.category}
                                imageUrl={event.imageUrl}
                                pageUrl={event.pageUrl}
                                side={side}
                            />
                            );
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
