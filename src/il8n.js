'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: { welcome: "Welcome to Te Au Pūngao" } },
            mi: { translation: { welcome: "Nau mai ki Te Au Pūngao" } },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
    });

export default i18n;
