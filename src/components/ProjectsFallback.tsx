export default function ProjectsFallback() {
    return (
        // Section affichée avec placeholder pendant le chargement
        <section className="pt-12">
            <div className="container mx-auto px-6 h-full">
                <div className="flex justify-center">
                    <div className="bg-gray-200 animate-pulse rounded-xl h-12 w-96"></div>
                </div>
                <div className="grid md:grid-cols-4 gap-4 p-8">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="w-full aspect-square bg-gray-200 animate-pulse rounded-xl" />
                    ))}
                </div>
            </div>
        </section>
    );
}
