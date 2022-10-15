export const routes = {
    main: '/',
    create: '/create',
    history: '/history'
}

export const paneTemplates={
    navigation:[
        {
            key:"create",
            caption:"Оформить заявку",
            route: routes.create
        },
        {
            key:"history",
            caption:"История заявок",
            route: routes.history
        }
    ],
    navigation_mobile:[
        {
            key: "create",
            icon: "fa-regular fa-note",
            route: routes.create
        },
        {
            key: "history",
            icon: "fa-regular fa-clock",
            route: routes.history
        }
    ]
}