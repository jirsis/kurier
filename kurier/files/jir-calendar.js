        {
            module: "JIR-calendar",
            header: "marqués de Berna",
            position: "top_left",
            config: {
                calendars: [
                {
                    symbol: "fas fa-calendar",
                    url: "personal_calendar_vault"
                },
                {
                    symbol: "fas fa-flag-checkered",
                    url: "https://www.f1calendar.com/download/f1-calendar_q_gp.ics?t=1522351474"
                },
                {
                    symbol: "fas fa-child",
                    url: "https://calendar.google.com/calendar/ical/25qp7f5j7a0r6qoairrsgb3r8s%40group.calendar.google.com/public/basic.ics",
                },
                {
                    symbol: "fas fa-child",
                    url: "https://calendar.google.com/calendar/ical/pl.polish%23holiday%40group.v.calendar.google.com/public/basic.ics"
                }
                ],
                maximumNumberOfDays: 15,
                fetchInterval: 300000,
                excludedEvents: [
                    "Telework",
                    "guarde",
                    "inglés",
                    "Ainara"
                ],
                titleReplace: {
                    "ur.": "Ur.",
                    "urodziny": "Ur.",
                    "im.": "Im.",
                    "cumpleaños": "",
                    "Cumpleaños": ""
                },
                customSymbols: [
                    {name: "enfermeria", symbol: "fas fa-stethoscope", },
                    {name: "Enfermería", symbol: "fas fa-stethoscope", },
                    {name: "pediatra", symbol: "fas fa-user-md", },
                    {name: "Médico", symbol: "fas fa-user-md", },
                    {name: "HM Nuevo Belén", symbol: "fas fa-user-md", },
                    {name: "urodziny", symbol: "fas fa-birthday-cake"},
                    {name: "ur.", symbol: "fas fa-birthday-cake" },
                    {name: "Ur.", symbol: "fas fa-birthday-cake" },
                    {name: "cumpleaños", symbol: "fas fa-birthday-cake" },
                    {name: "im.", symbol: "fas fa-chess-king" },
                    {name: "Im.", symbol: "fas fa-chess-king" },
                    {name: "viaje", symbol: "fas fa-plane"},
                    {name: "vuelo", symbol: "fas fa-plane"},
                    {name: "doctor", symbol: "fas fa-user-md"},
                    {name: "aniversario", symbol: "fab fa-pagelines"},
                    {name: "rocznica", symbol: "fab fa-pagelines"},
                    {name: "Tudespensa.com", symbol: "fas fa-shopping-cart"},
                    {name: "visita", symbol: "fas fa-plane-arrival"},
                ]
            }
        },