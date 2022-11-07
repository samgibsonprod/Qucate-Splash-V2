tailwind.config = {
    theme: {
        extend: {
            colors: {
                backdrop: {
                    light: '#F5F5F5',
                    dark: '#F0F2F4'
                }
            },
            keyframes: {
                'slide-in-left': {
                    '0%': {
                        transform: 'translateX(-200px)',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translateX(0)',
                        opacity: 1
                    }
                },
                'slide-in-right': {
                    '0%': {
                        transform: 'translateX(200px)',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translateX(0)',
                        opacity: 1
                    }
                },
                'slide-in-top': {
                    '0%': {
                        transform: 'translateY(-200px)',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: 1
                    }
                },
                'slide-in-bottom': {
                    '0%': {
                        transform: 'translateY(200px)',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: 1
                    }
                }
            },
            animation: {
                'slide-left': 'slide-in-left 1s ease-in-out both',
                'slide-right': 'slide-in-right 1s ease-in-out both',
                'slide-top': 'slide-in-top 1s ease-in-out both',
                'slide-bottom': 'slide-in-bottom 1s ease-in-out both'
            }
        },
        fontFamily: {
            'sans': ['Poppins', 'Roboto', '"Helvetica Neue"']
        },
        container: {
            center: true
        }
    }
}