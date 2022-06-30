export const normalNavLinks = [
    'home',
    'inquiries',
    'about',
    ''
]

interface NavLink {
    type: 'normal' | 'button' | 'coloredButton'
    text: string
    href?: string
}

export const navLinks: NavLink[] = [
    {
        type: 'normal',
        text: 'home',
    },
    {
        type: 'normal',
        text: 'inquiries',
    },
    {
        type: 'normal',
        text: 'about',
    },
    {
        type: 'button',
        text: 'login',
    },
    {
        type: 'coloredButton',
        text: 'signup',
    },
]