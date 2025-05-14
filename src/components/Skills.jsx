import { useState, useEffect } from "react";
import Modal from "./Modal";
import { CodeBracketIcon, DevicePhoneMobileIcon, PaintBrushIcon, ServerStackIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useFetch } from "../hooks/useFetch";
import LoadedContent from "./LoadedContent";

export default function Skills() {
  const skillsData = [
    {
      title: "Développement web",
      icon: <CodeBracketIcon className="h-10 w-10 text-text_dark" />,
      descriptionComponent: <div>Contenu du développement mobile</div>,
      url: "/skills/devweb",
    },
    {
      title: "Développement mobile",
      icon: <DevicePhoneMobileIcon className="h-10 w-10 text-text_dark" />,
      descriptionComponent: <div>Contenu du développement mobile</div>,
      url: "/test",
    },
    {
      title: "WebDesign",
      icon: <PaintBrushIcon className="h-10 w-10 text-text_dark" />,
      descriptionComponent: <div>Contenu du WebDesign</div>,
      url: "/test",
    },
    {
      title: "Bases de données",
      icon: <ServerStackIcon className="h-10 w-10 text-text_dark" />,
      descriptionComponent: <div>Contenu sur les bases de données</div>,
      url: "/test",
    },
  ];

  // Contenu dynamique fetché pour chaque skill
  const [loadedContent, setLoadedContent] = useState({});

  const [activeIndex, setActiveIndex] = useState(null);
  const [animateBounce, setAnimateBounce] = useState(false);
  const [hasClicked, setHasClicked] = useState(false); // Permet de savoir si l'utilisateur à cliqué sur au moins une carte
  const { fetchData, loading, error } = useFetch();
  const [loadErrors, setLoadErrors] = useState({});

  //Gestion de l'animation rebond si aucun clic sur les cartes
  useEffect(() => {
    if (hasClicked) return; //Désactive l'animation si l'utilisateur à déjà cliqué sur une carte
    const interval = setInterval(() => {
      setAnimateBounce(true);
      setTimeout(() => setAnimateBounce(false), 700); // temps de l'animation
    }, 3000);

    return () => clearInterval(interval);
  }, [hasClicked]);

  // Chargement du contenu distant pour la modale
  // Se déclenche à chaque changement d'activeIndex
  useEffect(() => {
    if (activeIndex === null) return;

    const currentSkill = skillsData[activeIndex];
    const skillKey = currentSkill.title;

    //Si la page a déjà été chargée, on annule
    if (loadedContent[skillKey] || !currentSkill.url) return;

    //Récupère la page
    const loadContent = async () => {
      const { success, data, error } = await fetchData(currentSkill.url);
      if (success) {
        setLoadedContent((prev) => ({
          ...prev,
          [skillKey]: data,
        }));
      } else {
        setLoadErrors((prev) => ({
          ...prev,
          [skillKey]: true,
        }));
        console.error(error);
      }
    };
    loadContent();
  }, [activeIndex]);

  const showPrev = () => setActiveIndex((prev) => (prev > 0 ? prev - 1 : skillsData.length - 1));
  const showNext = () => setActiveIndex((prev) => (prev + 1) % skillsData.length);
  const closeModal = () => setActiveIndex(null);

  /**
   * Wrapper du clic sur une carte
   * @param {Number} index
   */
  const handleCardClick = (index) => {
    setHasClicked(true);
    // Force une "fermeture" de la modale si on clique deux fois sur la même carte
    if (activeIndex === index) {
      setActiveIndex(null); // reset
      setTimeout(() => setActiveIndex(index), 0); // réouvre
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {skillsData.map((skill, index) => (
        <div
        key={index}
        className={`bg-gradient-to-b w-full from-secondary to-secondary/60 text-text_dark p-6 rounded-lg shadow-lg shadow-secondary/50 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out ${
          index === 0 && animateBounce ? "bounce-every-3s" : ""
        }`}
        onClick={() => handleCardClick(index)}
      >
          <div className="flex justify-center lg:justify-start">
            {skill.icon}
          </div>
          <h3 className="text-xl mt-2 text-center lg:text-left">{skill.title}</h3>
        </div>
      ))}

      <Modal isOpen={activeIndex !== null} onClose={closeModal}>
        {activeIndex !== null && (
          <div>
            {/* Boutons de navigation */}
            <div className="flex justify-between mt-6 mb-4">
              <button onClick={showPrev} className="btn-secondary flex items-center mr-2"><ChevronLeftIcon className="h-6 w-6 pr-2" /><span className='text-nowrap'>Précédent</span></button>

              <h3>{skillsData[activeIndex].title}</h3>

              <button onClick={showNext} className="btn-secondary flex items-center mr-2"><span className='text-nowrap'>Suivant</span><ChevronRightIcon className="h-6 w-6 pl-2" /></button>
            </div>

            {/* Affichage du contenu dynamique */}
            <LoadedContent
            loading={loading}
            error={error}
            content={loadedContent[skillsData[activeIndex].title]}
            />

          </div>
        )}
      </Modal>
    </div>
  );
}
