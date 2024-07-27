import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],
    theme: {
        extend: {
            colors: {
                header: {
                    light: '#E18B74', // Поярче
                    DEFAULT: '#CF735B', // Основной цвет
                    dark: '#A85C46', // Потусклее
                },
                product: {
                    light: '#C3D5E1', // Поярче
                    DEFAULT: '#B0C5D6', // Основной цвет
                    dark: '#8A9FAF', // Потусклее
                },
                addtocartbtn: {
                    light: '#8FCDE3', // Поярче
                    DEFAULT: '#79BBDA', // Основной цвет
                    dark: '#5F97B1', // Потусклее
                },
                lightgray: {
                    light: '#FFFFFF', // Поярче (практически белый)
                    DEFAULT: '#F3F2F5', // Основной цвет
                    dark: '#D1D0D3', // Потусклее
                },
                loginbtn: {
                    light: '#74C1A0', // Поярче
                    DEFAULT: '#5BAC8D', // Основной цвет
                    dark: '#467A63', // Потусклее
                },
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [forms, aspectRatio],
};