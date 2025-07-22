import {useEffect, useState} from 'react';
import './scroll-progress.css';

export const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
            setProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="scroll-progress">
            <div
                className="scroll-progress__bar"
                style={{width: `${progress}%`}}
            />
        </div>
    );
};