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
                    light: '#404040', // Dark gray
                    DEFAULT: '#202020', // Main dark gray
                    dark: '#000000', // Almost black
                },
                product: {
                    light: '#606060', // Dark gray
                    DEFAULT: 'rgb(0,0,0,0)', // Main dark gray
                    dark: '#202020', // Almost black
                },
                addtocartbtn: {
                    light: '#606060', // Dark gray
                    DEFAULT: '#404040', // Main dark gray
                    dark: '#202020', // Almost black
                },
                lightgray: {
                    light: '#A9A9A9', // Light gray
                    DEFAULT: '#606060', // Dark gray
                    dark: '#404040', // Darker gray
                },
                loginbtn: {
                    light: '#98FB98', // Pale green
                    DEFAULT: '#32CD32', // Lime green
                    dark: '#006400', // Dark green
                },
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [forms, aspectRatio],
};