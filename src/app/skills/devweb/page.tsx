import DevWebSkills from '@/components/skills/DevWebSkills'

export const dynamic = 'force-dynamic'  // assure-toi que chaque demande est dynamique

export default function DevWebSkillsPage() {
    return (
        <html lang="fr">
            <head>
                <title>Compétences Développement Web</title>
            </head>
            <body>
                <DevWebSkills />
            </body>
        </html>
    )
}