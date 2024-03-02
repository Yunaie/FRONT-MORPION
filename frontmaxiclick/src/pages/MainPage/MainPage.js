import React, { useState, useEffect } from 'react';
import Clickeur from './../../components/Clickeur/Clickeur';

function MainPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showClickeur, setShowClickeur] = useState(false);

    useEffect(() => {
        if (currentIndex >= 5) return;

        setShowClickeur(true);

        const timeoutId = setTimeout(() => {
            setShowClickeur(false);
            setTimeout(() => setCurrentIndex(currentIndex + 1), 500);
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, [currentIndex, showClickeur]);

    const generateClickeurProps = () => {
        const width = Math.random() * (150 - 50) + 50;
        const maxTop = window.innerHeight - width;
        const maxLeft = window.innerWidth - width;
        const top = Math.floor(Math.random() * maxTop);
        const left = Math.floor(Math.random() * maxLeft);

        return {
            width: `${width}px`,
            style: { top: `${top}px`, left: `${left}px`, position: 'absolute' },
        };
    };



    return (
        <div>
            {showClickeur && <Clickeur key={currentIndex} {...generateClickeurProps(currentIndex)} />}
        </div>
    );
};

export default MainPage;
