export const ROUTES = [

    {
        path: '/',
        title: 'Início',
        icon: 'home',
        menuSub: false
    },
    {
        path: '',
        title: 'Usuário',
        icon: 'person',
        menuSub: true,
        refSub: 'usuario',
        submenu: [
            {
                path: '/usuario/lista',
                title: 'Listar',
                ref: 'usuario'
            },
            {
                path: '/usuario/novo',
                title: 'Inserir',
                ref: 'usuario'
            },
        ]
    },
    {
        path: '',
        title: 'Banners',
        icon: 'perm_media',
        menuSub: true,
        refSub: 'banner',
        submenu: [
            {
                path: '/banner/lista',
                title: 'Listar',
                ref: 'banner'
            },
            {
                path: '/banner/novo',
                title: 'Inserir',
                ref: 'banner'
            },
        ]
    },
    {
        path: '',
        title: 'Depoimentos',
        icon: 'mode_comment',
        menuSub: true,
        refSub: 'depoimento',
        submenu: [
            {
                path: '/depoimento/lista',
                title: 'Listar',
                ref: 'depoimento'
            },
            {
                path: '/depoimento/novo',
                title: 'Inserir',
                ref: 'depoimento'
            },
        ]
    },
    {
        path: '',
        title: 'Videos',
        icon: 'movie',
        menuSub: true,
        refSub: 'video',
        submenu: [
            {
                path: '/video/lista',
                title: 'Listar',
                ref: 'video'
            },
            {
                path: '/video/novo',
                title: 'Inserir',
                ref: 'video'
            },
        ]
    },
    {
        path: '',
        title: 'Atracoes',
        icon: 'brightness_auto',
        menuSub: true,
        refSub: 'atracao',
        submenu: [
            {
                path: '/atracao/lista',
                title: 'Listar',
                ref: 'atracoes'
            },
            {
                path: '/atracao/novo',
                title: 'Inserir',
                ref: 'atracoes'
            },
        ]
    },
    {
        path: '',
        title: 'Mídias',
        icon: 'star_border',
        menuSub: true,
        refSub: 'midias',
        submenu: [
            {
                path: '/midia/lista',
                title: 'Listar',
                ref: 'midia'
            },
            {
                path: '/midia/novo',
                title: 'Inserir',
                ref: 'midia'
            },
        ]
    },
    {
        path: '',
        title: 'Páginas',
        icon: 'pages',
        menuSub: true,
        refSub: 'paginas',
        submenu: [
            {
                path: '/resort/lista',
                title: 'O Resort',
                ref: 'resort'
            },
            {
                path: '/diversao-aventura/lista',
                title: 'Diversão & Aventura',
                ref: 'diversao-aventura'
            },
            {
                path: '/tranquilidade-laer/lista',
                title: 'Tranquilidade & Lazer',
                ref: 'tranquilidade-lazer'
            },
            {
                path: '/kids/lista',
                title: 'Kids',
                ref: 'kids'
            },
            {
                path: '/caldas-novas/lista',
                title: 'Caldas Novas',
                ref: 'caldas-novas'
            },
        ]
    },
    {
        path: '',
        title: 'Contatos Rodapé',
        icon: 'assignment_ind',
        menuSub: true,
        refSub: 'contato',
        submenu: [
            {
                path: '/contato/lista',
                title: 'Listar',
                ref: 'contato'
            },
            {
                path: '/contato/novo',
                title: 'Inserir',
                ref: 'contato'
            },
        ]
    }

];
