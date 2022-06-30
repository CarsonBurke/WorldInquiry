import stock1 from './images/stock1.jpg'
import stock2 from './images/stock2.jpg'

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

export interface Inquiry {
    title: string
    thumbnailSRC: string
    text: string
}

export const inquiries = [
    {
        title: 'TITLE 1',
        thumbnailSRC: stock1,
        text: 'This is the description of the inquiry'
    },
    {
        title: 'Title 2',
        thumbnailSRC: stock2,
        text: 'This is the description of the inquiry, however it is longer than the first version! Perhaps it will go on forever? No.'
    },
    {
        title: 'TITLE 1',
        thumbnailSRC: stock1,
        text: 'This is the description of the inquiry'
    },
    {
        title: 'Title 2',
        thumbnailSRC: stock2,
        text: 'This is the description of the inquiry, however it is longer than the first version! Perhaps it will go on forever? No.'
    },
    {
        title: 'TITLE 1',
        thumbnailSRC: stock1,
        text: 'This is the description of the inquiry'
    },
    {
        title: 'Title 2',
        thumbnailSRC: stock2,
        text: 'This is the description of the inquiry, however it is longer than the first version! Perhaps it will go on forever? No.'
    },
    {
        title: 'TITLE 1',
        thumbnailSRC: stock1,
        text: 'This is the description of the inquiry'
    },
    {
        title: 'Title 2',
        thumbnailSRC: stock2,
        text: 'This is the description of the inquiry, however it is longer than the first version! Perhaps it will go on forever? No.'
    },
    {
        title: 'TITLE 1',
        thumbnailSRC: stock1,
        text: 'This is the description of the inquiry'
    },
    {
        title: 'Title 2',
        thumbnailSRC: stock2,
        text: 'This is the description of the inquiry, however it is longer than the first version! Perhaps it will go on forever? No.'
    },
]