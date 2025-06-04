'use client';

import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, imgUrl, url }: { title: string, description: string, imgUrl: string, url: string}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // 'once' pour ne l'animer qu'une seule fois
            transition={{ duration: 0.8 }}
            className="w-full aspect-square bg-white p-4 rounded-xl shadow"
        >
            <h3 className="text-xl font-semibold">{title}</h3>
        </motion.div>
    );
}