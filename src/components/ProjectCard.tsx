'use client';

import { motion } from 'framer-motion';

export default function ProjectCard({
        title,
        description,
        imgUrl,
        url,
        tags,
    }: {
        title: string;
        description: string;
        imgUrl: string;
        url: string;
        tags: string[];
    }) {
    return (
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg group cursor-pointer"
        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Dégradé foncé en bas */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent z-10"></div>

            {/* Titre + tags (toujours visibles) */}
            <div className="absolute bottom-4 left-4 right-4 z-20">
                <h3 className="text-text_dark text-xl font-semibold">{title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                    <span
                    key={index}
                    className="text-xs text-text_light bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm"
                    >
                    {tag}
                    </span>
                ))}
                </div>
            </div>

            {/* Contenu qui slide en hover */}
            <div className="absolute inset-0 bg-primary/80 text-text_light px-4 py-6 flex flex-col justify-center items-center text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-30">
                <p className="mb-4">{description}</p>
                <button className="btn-white flex items-center"><span className='text-nowrap'>En savoir plus</span></button>
            </div>
        </motion.div>
    );
}
