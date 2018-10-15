
const BEST_SELLER = "best seller";
const GOOD_DEAL   = "good deal";
const PERSONNALISABLE = "personnalisable";

personnages = [
    {
        "id": "1",
        "categorie":"sport",
        "last_name": "Antoine",
        "first_name": "Griezmann",
        "background_image": "back_grizman.jpg",
        "photo_perso":"griezmann-default.jpg",
        "nombre_aime":"14.000",
        "culture" :"actuelement à Atletico madrid",
        "quizz" :"A t-il joué touts les matchs de la coupe du monde 2018 ?",
        "articles": [
            {
                "id":"1",
                "name":"maillot",
                "url_photo" : "griezmann-maillot-foot.jpg",
                "categorie":"best seller",
                "price": "300000€",
                "notation": 4.5,
                "description": "blablabla"
            },
            {
                "id":"2",
                "name":"BD",
                "url_photo" : "griezmann-bd.jpg",
                "categorie":"good deal",
                "price": "300000€",
                "notation": 3.5,
                "description": "blablabla"
            }
            ,
            {
                "id": "3",
                "name": "chausurre",
                "url_photo": "griezmann-chausure-foot.jpg",
                "categorie": "good deal",
                "price": "300000€",
                "notation": 2.5,
                "description": "blablabla"
            },
            {
                "id":"4",
                "name":"peluche",
                "url_photo" : "griezmann-ballon-foot.jpg",
                "categorie":"personnalisable",
                "price": "300000€",
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "2",
        "categorie":"enfance",
        "last_name": "Babar",
        "first_name": "Céleste",
        "background_image": "evolution-de-babar.jpeg",
        "photo_perso":"babar-default.jpg",
        "nombre_aime":"3.000",
        "culture" :"babar est un éléphant",
        "quizz" :"A t-il des enfant?",
        "articles": [
            {
                "id":"1",
                "name":"draps",
                "url_photo" : "babar-article-lit.jpg",
                "categorie":"good deal",
                "price": "300000€",
                "notation": 3.5,
                "description": "blablabla"
            },
            {
                "id":"2",
                "name":"gant et bonnet",
                "url_photo" : "babar-article-gant-bonnet.jpg",
                "categorie":"good deal",
                "price": "300000€",
                "notation": 1.5,
                "description": "blablabla"
            }
            ,
            {
                "id":"3",
                "name":"domino",
                "url_photo" : "babar-article-domino.jpg",
                "categorie":"good deal",
                "price": "300000€",
                "notation": 4.5,
                "description": "blablabla"
            } ,
            {
                "id":"4",
                "name":"porte clé",
                "url_photo" : "babar-article-port-cle.jpg",
                "categorie":"good deal",
                "price": "300000€",
                "notation": 2.5,
                "description": "blablabla"
            } ,
            {
                "id":"5",
                "name":"peluche",
                "url_photo" : "babar-article-peluche.jpg",
                "categorie":"best seller",
                "price": "300000€",
                "notation": 5,
                "description": "blablabla"
            },
            {
                "id":"6",
                "name":"peluche",
                "url_photo" : "babar-article-nid-dange.jpg",
                "categorie":"good deal",
                "price": "300000€",
                "notation": 3,
                "description": "blablabla"
            },
            {
                "id":"7",
                "name":"peluche",
                "url_photo" : "babar-article-cocques-iphone.jpg",
                "categorie":"personnalisable",
                "price": "300000€",
                "notation": 4,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "3",
        "categorie":"enfance",
        "last_name": "Peter",
        "first_name": "Pan",
        "background_image": "back_peter-pan.jpg",
        "photo_perso":"peter-pan-default.jpg",
        "nombre_aime":"1.000",
        "culture" :"peter est un enfant",
        "quizz" :"peter pan sait voler ?",
        "articles": [ {
            "id":"1",
            "name":"tasse",
            "url_photo" : "peter-pan-article-pop.jpg",
            "categorie":"good deal",
            "price": "300000€",
            "notation": 3,
            "description": "blablabla"
        },
            {
                "id":"2",
                "name":"tee-sheet",
                "url_photo" : "peter-pan-article-deco.jpg",
                "categorie":"best seller",
                "price": "300000€",
                "notation": 3,
                "description": "blablabla"
            }]

    },
    {
        "id": "4",
        "categorie":"enfance",
        "last_name": "winne",
        "first_name": "l'ourson",
        "background_image": "back_winne.jpg",
        "photo_perso":"winne-default.jpg",
        "nombre_aime":"14.000",
        "culture" :"Winnie l'Ourson ayant le plus grand cœur",
        "quizz" :"Qui est Winnie est-il Un ourson ?",
        "articles": [
            {
                "id":"1",
                "name":"tasse",
                "url_photo" : "winne-article-tasse.jpg",
                "categorie":"best seller",
                "price": "300000€",
                "notation": 4.5,
                "description": "blablabla"
            },
            {
                "id":"2",
                "name":"tee-shirt",
                "url_photo" : "winne-article-teeshirt.jpg",
                "categorie":"best seller",
                "price": "300000€",
                "notation": 3.5,
                "description": "blablabla"
            },
            {
                "id":"3",
                "name":"tee-shirt",
                "url_photo" : "winne-article-port.jpg",
                "categorie":"good deal",
                "price": "300000€",
                "notation": 3.5,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "5",
        "categorie":"enfance",
        "last_name": "mickey",
        "first_name": "mouse",
        "background_image": "back_mickey.jpg",
        "photo_perso":"mickey-mouse-00.png",
        "nombre_aime":"14.000",
        "culture" :"Winnie l'Ourson ayant le plus grand cœur",
        "quizz" :"Qui est Winnie est-il Un ourson ?",
        "articles": [ {
            "id":"1",
            "name":"tasse",
            "url_photo" : "minnie-mouse-fanartikel.jpg",
            "categorie":"good deal",
            "price": "300000€",
            "notation": 3.5,
            "description": "blablabla"
        },
            {
                "id":"2",
                "name":"tee-sheet",
                "url_photo" : "",
                "categorie":"best seller",
                "price": "300000€",
                "notation": 3.5,
                "description": "blablabla"
            },{
                "id":"1",
                "name":"tasse",
                "url_photo" : "tasse_mickey2.jpg",
                "categorie":"good deal",
                "price": "300000€",
                "notation": 4.5,
                "description": "blablabla"
            }
        ]
    } ,
    {
        "id": "6",
        "categorie":"enfance",
        "last_name": "Casimir",
        "first_name": "L'Île aux enfants",
        "background_image": "casimir_demons_merveilles.jpg",
        "photo_perso":"mascotte-de-casimir.jpg",
        "nombre_aime":"20.000",
        "culture" :"créé par Yves Brunier et Christophe Izard dans les années 1970",
        "quizz" :"A-t-il  9 pois sur le costume de Casimir ?",
        "articles": [
            {
                "id":"1",
                "name":"clé usb",
                "url_photo" : "cle-usb_casimir.jpg",
                "categorie":"good deal",
                "price": "15€",
                "notation": 4.5,
                "description": "blablabla"
            },
            {
                "id":"2",
                "name":"tee-shirt",
                "url_photo" : "t-shirt-casimir.jpg",
                "categorie":"good deal",
                "price": "30€",
                "notation": 3.5,
                "description": "blablabla"
            }
            ,
            {
                "id": "3",
                "name": "gobelets carton",
                "url_photo": "gobelets-carton-casimir-x-8.jpg",
                "categorie": "good deal",
                "price": "4€",
                "notation": 2.5,
                "description": "blablabla"
            },
            {
                "id":"4",
                "name":"bol",
                "url_photo" : "bol-casimir-.jpg",
                "categorie":"personnalisable",
                "price": "300000€",
                "description": "blablabla"
            },
            {
                "id":"5",
                "name":"bol",
                "url_photo" : "chaussettes-casimir.jpg",
                "categorie":"best seller",
                "price": "300000€",
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "7",
        "categorie":"sport",
        "last_name": "Teddy",
        "first_name": "Riner",
        "background_image": "teddy_back.jpg",
        "photo_perso":"teddy-riner.jpg",
        "nombre_aime":"14.547",
        "culture" :"détenteur d'un record de dix titres de champion du monde",
        "quizz" :"est-il un judoka français ?",
        "articles": [
            {
                "id":"1",
                "name":"dvd",
                "url_photo" : "teddy-riner-dvd.jpg",
                "categorie":"good deal",
                "price": "19€",
                "notation": 3.5,
                "description": "blablabla"
            },
            {
                "id":"2",
                "name":"sac",
                "url_photo" : "sac_teddy.jpg",
                "categorie":"good deal",
                "price": "300000€",
                "notation": 1.5,
                "description": "blablabla"
            }
            ,
            {
                "id":"3",
                "name":"BD tome2",
                "url_photo" : "TOME2_teddy.jpg",
                "categorie":"good deal",
                "price": "300000€",
                "notation": 4.5,
                "description": "BD - LES AVENTURES DE TEDDY RINER - TOME 2 : LA.. "
            } ,
            {
                "id":"4",
                "name":"tasse",
                "url_photo" : "tasse_teddy.jpg",
                "categorie":"best seller",
                "price": "300000€",
                "notation": 2.5,
                "description": "blablabla"
            } ,
            {
                "id":"5",
                "name":"carnet",
                "url_photo" : "carnetTeddyrinerV2.jpg",
                "categorie":"best seller",
                "price": "16€",
                "notation": 5,
                "description": "blablabla"
            },
            {
                "id":"6",
                "name":"port clé",
                "url_photo" : "porte_teddy.jpg",
                "categorie":"best seller",
                "price": "8€",
                "notation": 3,
                "description": "blablabla"
            },
            {
                "id":"7",
                "name":"peluche",
                "url_photo" : "OURSONJUDOKATEDDYRINER.jpg",
                "categorie":"personnalisable",
                "price": "300000€",
                "notation": 4,
                "description": "blablabla"
            },
            {
                "id":"8",
                "name":"port clé",
                "url_photo" : "porte_teddy.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "8",
        "categorie":"sport",
        "last_name": "Michael",
        "first_name": "Jordan",
        "background_image": "michael_jordan_back.jpg",
        "photo_perso":"michael_jordan.jpg",
        "nombre_aime":"14.547",
        "culture" :"Fortune personnelle : 1,7 milliard USD (2018)",
        "quizz" :" est-il un joueur de basket-ball américain ?",
        "articles": [
            {
                "id":"1",
                "name":"dvd",
                "url_photo" : "teddy-riner-dvd.jpg",
                "categorie":"good deal",
                "price": "19€",
                "notation": 3.5,
                "description": "blablabla"
            },
            {
                "id":"2",
                "name":"sac",
                "url_photo" : "sac_teddy.jpg",
                "categorie":"good deal",
                "price": "300000€",
                "notation": 1.5,
                "description": "blablabla"
            }
            ,
            {
                "id":"3",
                "name":"BD tome2",
                "url_photo" : "TOME2_teddy.jpg",
                "categorie":"good deal",
                "price": "300000€",
                "notation": 4.5,
                "description": "BD - LES AVENTURES DE TEDDY RINER - TOME 2 : LA.. "
            } ,
            {
                "id":"4",
                "name":"tasse",
                "url_photo" : "tasse_teddy.jpg",
                "categorie":"best seller",
                "price": "300000€",
                "notation": 2.5,
                "description": "blablabla"
            } ,
            {
                "id":"5",
                "name":"carnet",
                "url_photo" : "carnetTeddyrinerV2.jpg",
                "categorie":"best seller",
                "price": "16€",
                "notation": 5,
                "description": "blablabla"
            },
            {
                "id":"6",
                "name":"port clé",
                "url_photo" : "porte_teddy.jpg",
                "categorie":"best seller",
                "price": "8€",
                "notation": 3,
                "description": "blablabla"
            },
            {
                "id":"7",
                "name":"peluche",
                "url_photo" : "OURSONJUDOKATEDDYRINER.jpg",
                "categorie":"personnalisable",
                "price": "300000€",
                "notation": 4,
                "description": "blablabla"
            },
            {
                "id":"8",
                "name":"port clé",
                "url_photo" : "porte_teddy.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "9",
        "categorie":"sport",
        "last_name": "Rafael",
        "first_name": "Nadal",
        "background_image": "Rafael-Nadal_back.jpg",
        "photo_perso":"tennis_rafael-nadal.jpg",
        "nombre_aime":"19.247",
        "culture" :"Tournois du Grand Chelem remportés (simple) : 17",
        "quizz" :" est-il un joueur de tennis espagnol",
        "articles": [
            {
                "id":"1",
                "name":"raquette",
                "url_photo" : "nadal-article-tennis.jpg",
                "categorie":"good deal",
                "price": "159€",
                "notation": 4.5,
                "description": "blablabla"
            },
            {
                "id":"2",
                "name":"T shirt",
                "url_photo" : "t-shirt-nike-aeroreact-rafael-nadal-wimbledon-2018.jpg",
                "categorie":"good deal",
                "price": "30",
                "notation": 3.5,
                "description": "blablabla"
            }
            ,
            {
                "id":"3",
                "name":"balles de tennis",
                "url_photo" : "balle-de-tennis-dunlop-fort-all-court.jpg",
                "categorie":"good deal",
                "price": "300000€",
                "notation": 4.5,
                "description": "freger. "
            } ,
            {
                "id":"4",
                "name":"tasse",
                "url_photo" : "coloriage-rafael-coffee-mug-white.jpg",
                "categorie":"best seller",
                "price": "12€",
                "notation": 2.5,
                "description": "blablabla"
            } ,
            {
                "id":"5",
                "name":"port clé",
                "url_photo" : "porte-cles-babolat-decima-roland-garros-2018.jpg",
                "categorie":"best seller",
                "price": "16€",
                "notation": 5,
                "description": "blablabla"
            },
            {
                "id":"6",
                "name":"bandana",
                "url_photo" : "bandana_tennis.jpg",
                "categorie":"best seller",
                "price": "8€",
                "notation": 3,
                "description": "blablabla"
            },
            {
                "id":"7",
                "name":"chaussure",
                "url_photo" : "chaussures-nike-lunar-ballistec-15-705285-801.jpg",
                "categorie":"personnalisable",
                "price": "300000€",
                "notation": 4,
                "description": "blablabla"
            },
            {
                "id":"8",
                "name":"Vêtements Chaussettes",
                "url_photo" : "58581befbb5bb.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "10",
        "categorie":"sport",
        "last_name": "Usain",
        "first_name": "Bolt",
        "background_image": "Bolt_back.jpg",
        "photo_perso":"usain-bolt-1.jpg",
        "nombre_aime":"19.247",
        "culture" :"Fortune personnelle : 1,7 milliard USD (2018)",
        "quizz" :" est-il un joueur de basket-ball américain ?",
        "articles": [
            {
                "id":"1",
                "name":"raquette",
                "url_photo" : "nadal-article-tennis.jpg",
                "categorie":"good deal",
                "price": "159€",
                "notation": 4.5,
                "description": "blablabla"
            },
            {
                "id":"2",
                "name":"T shirt",
                "url_photo" : "t-shirt-nike-aeroreact-rafael-nadal-wimbledon-2018.jpg",
                "categorie":"good deal",
                "price": "30",
                "notation": 3.5,
                "description": "blablabla"
            }
            ,
            {
                "id":"3",
                "name":"balles de tennis",
                "url_photo" : "balle-de-tennis-dunlop-fort-all-court.jpg",
                "categorie":"good deal",
                "price": "300000€",
                "notation": 4.5,
                "description": "freger. "
            } ,
            {
                "id":"4",
                "name":"tasse",
                "url_photo" : "coloriage-rafael-coffee-mug-white.jpg",
                "categorie":"best seller",
                "price": "12€",
                "notation": 2.5,
                "description": "blablabla"
            } ,
            {
                "id":"5",
                "name":"port clé",
                "url_photo" : "porte-cles-babolat-decima-roland-garros-2018.jpg",
                "categorie":"best seller",
                "price": "16€",
                "notation": 5,
                "description": "blablabla"
            },
            {
                "id":"6",
                "name":"bandana",
                "url_photo" : "bandana_tennis.jpg",
                "categorie":"best seller",
                "price": "8€",
                "notation": 3,
                "description": "blablabla"
            },
            {
                "id":"7",
                "name":"chaussure",
                "url_photo" : "chaussures-nike-lunar-ballistec-15-705285-801.jpg",
                "categorie":"personnalisable",
                "price": "300000€",
                "notation": 4,
                "description": "blablabla"
            },
            {
                "id":"8",
                "name":"Vêtements Chaussettes",
                "url_photo" : "58581befbb5bb.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "11",
        "categorie":"cinéma",
        "last_name": "Natalie",
        "first_name": "Portman",
        "background_image": "star-wars-episode-viii-les-derniers-jedi-5a367407f020a.jpg",
        "photo_perso":"Natalie_Portman_Cannes_2015_5.jpg",
        "nombre_aime":"9.247",
        "culture" :"Fortune personnelle : 1,7 milliard USD (2018)",
        "quizz" :" est-il un joueur de basket-ball américain ?",
        "articles": [
            {
                "id":"1",
                "name":"collection DVD prélogie",
                "url_photo" : "start_wars.jpg",
                "categorie":"good deal",
                "price": "99€",
                "notation": 4.5,
                "description": "blablabla"
            },
            {
                "id":"2",
                "name":"T shirt",
                "url_photo" : "dior_natalie__601_north_499x_white.jpg",
                "categorie":"good deal",
                "price": "30",
                "notation": 3.5,
                "description": "blablabla"
            }
            ,
            {
                "id":"3",
                "name":"balles de tennis",
                "url_photo" : "balle-de-tennis-dunlop-fort-all-court.jpg",
                "categorie":"good deal",
                "price": "300000€",
                "notation": 4.5,
                "description": "freger. "
            } ,
            {
                "id":"4",
                "name":"tasse",
                "url_photo" : "coloriage-rafael-coffee-mug-white.jpg",
                "categorie":"best seller",
                "price": "12€",
                "notation": 2.5,
                "description": "blablabla"
            } ,
            {
                "id":"5",
                "name":"port clé",
                "url_photo" : "porte-cles-babolat-decima-roland-garros-2018.jpg",
                "categorie":"best seller",
                "price": "16€",
                "notation": 5,
                "description": "blablabla"
            },
            {
                "id":"6",
                "name":"bandana",
                "url_photo" : "bandana_tennis.jpg",
                "categorie":"best seller",
                "price": "8€",
                "notation": 3,
                "description": "blablabla"
            },
            {
                "id":"7",
                "name":"chaussure",
                "url_photo" : "chaussures-nike-lunar-ballistec-15-705285-801.jpg",
                "categorie":"personnalisable",
                "price": "300000€",
                "notation": 4,
                "description": "blablabla"
            },
            {
                "id":"8",
                "name":"Vêtements Chaussettes",
                "url_photo" : "58581befbb5bb.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "12",
        "categorie":"cinéma",
        "last_name": "Samuel L.",
        "first_name": "Jackson",
        "background_image": "hitman-s-bodyguard-photo-samuel-l-jackson-988807-large.jpg",
        "photo_perso":"Jackson.jpg",
        "nombre_aime":"9.247",
        "culture" :"Fortune personnelle : 1,7 milliard USD (2018)",
        "quizz" :" est-il un joueur de basket-ball américain ?",
        "articles": [
            {
                "id":"1",
                "name":"collection DVD prélogie",
                "url_photo" : "start_wars.jpg",
                "categorie":"good deal",
                "price": "99€",
                "notation": 4.5,
                "description": "blablabla"
            },
            {
                "id":"2",
                "name":"T shirt",
                "url_photo" : "dior_natalie__601_north_499x_white.jpg",
                "categorie":"good deal",
                "price": "30",
                "notation": 3.5,
                "description": "blablabla"
            }
            ,
            {
                "id":"3",
                "name":"balles de tennis",
                "url_photo" : "balle-de-tennis-dunlop-fort-all-court.jpg",
                "categorie":"good deal",
                "price": "300000€",
                "notation": 4.5,
                "description": "freger. "
            } ,
            {
                "id":"4",
                "name":"tasse",
                "url_photo" : "coloriage-rafael-coffee-mug-white.jpg",
                "categorie":"best seller",
                "price": "12€",
                "notation": 2.5,
                "description": "blablabla"
            } ,
            {
                "id":"5",
                "name":"port clé",
                "url_photo" : "porte-cles-babolat-decima-roland-garros-2018.jpg",
                "categorie":"best seller",
                "price": "16€",
                "notation": 5,
                "description": "blablabla"
            },
            {
                "id":"6",
                "name":"bandana",
                "url_photo" : "bandana_tennis.jpg",
                "categorie":"best seller",
                "price": "8€",
                "notation": 3,
                "description": "blablabla"
            },
            {
                "id":"7",
                "name":"chaussure",
                "url_photo" : "chaussures-nike-lunar-ballistec-15-705285-801.jpg",
                "categorie":"personnalisable",
                "price": "300000€",
                "notation": 4,
                "description": "blablabla"
            },
            {
                "id":"8",
                "name":"Vêtements Chaussettes",
                "url_photo" : "58581befbb5bb.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "13",
        "categorie":"cinéma",
        "last_name": "François",
        "first_name": "Cluzet",
        "background_image": "omar-sy-et-francois-cluzet-a-la-racine-de-la-fiction.jpg",
        "photo_perso":"Cluzet.jpg",
        "nombre_aime":"11.132",
        "culture" :"un acteur français, né le 21 septembre 1955 dans le 9 arrondissement de Paris",
        "quizz" :" a t-il joué dans Les petits mouchoirs ?",
        "articles": [
            {
                "id":"1",
                "name":"collection DVD prélogie",
                "url_photo" : "start_wars.jpg",
                "categorie":"good deal",
                "price": "99€",
                "notation": 4.5,
                "description": "blablabla"
            },
            {
                "id":"2",
                "name":"T shirt",
                "url_photo" : "dior_natalie__601_north_499x_white.jpg",
                "categorie":"good deal",
                "price": "30",
                "notation": 3.5,
                "description": "blablabla"
            }
            ,
            {
                "id":"3",
                "name":"balles de tennis",
                "url_photo" : "balle-de-tennis-dunlop-fort-all-court.jpg",
                "categorie":"good deal",
                "price": "300000€",
                "notation": 4.5,
                "description": "freger. "
            } ,
            {
                "id":"4",
                "name":"tasse",
                "url_photo" : "coloriage-rafael-coffee-mug-white.jpg",
                "categorie":"best seller",
                "price": "12€",
                "notation": 2.5,
                "description": "blablabla"
            } ,
            {
                "id":"5",
                "name":"port clé",
                "url_photo" : "porte-cles-babolat-decima-roland-garros-2018.jpg",
                "categorie":"best seller",
                "price": "16€",
                "notation": 5,
                "description": "blablabla"
            },
            {
                "id":"6",
                "name":"bandana",
                "url_photo" : "bandana_tennis.jpg",
                "categorie":"best seller",
                "price": "8€",
                "notation": 3,
                "description": "blablabla"
            },
            {
                "id":"7",
                "name":"chaussure",
                "url_photo" : "chaussures-nike-lunar-ballistec-15-705285-801.jpg",
                "categorie":"personnalisable",
                "price": "300000€",
                "notation": 4,
                "description": "blablabla"
            },
            {
                "id":"8",
                "name":"Vêtements Chaussettes",
                "url_photo" : "58581befbb5bb.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "14",
        "categorie":"cinéma",
        "last_name": "Will",
        "first_name": "Smith",
        "background_image": "Smith_back.jpg",
        "photo_perso":"Smith.jpg",
        "nombre_aime":"5.132",
        "culture" :"acteur, chanteur de rap et producteur de cinéma américain, né le 25 septembre 1968 à Philadelphie.",
        "quizz" :" a t-il joué dans Men in black ?",
        "articles": [
            {
                "id":"1",
                "name":"album de musique",
                "url_photo" : "51FkjljQs4L.jpg",
                "categorie":"good deal",
                "price": "99€",
                "notation": 4.5,
                "description": "blablabla"
            },
            {
                "id":"2",
                "name":"pistolet",
                "url_photo" : "240615-DRF73172-2-C1.jpg",
                "categorie":"good deal",
                "price": "30",
                "notation": 5,
                "description": "blablabla"
            }
            ,
            {
                "id":"3",
                "name":"Blu ray 3D I Robot",
                "url_photo" : "i-robot-conversion-3d-2012_1354018100__450_400.png",
                "categorie":"good deal",
                "price": "30€",
                "notation": 4.5,
                "description": "freger. "
            } ,
            {
                "id":"4",
                "name":"Edition limitée I Robot",
                "url_photo" : "71YjutpMwcL._SY445_.jpg",
                "categorie":"best seller",
                "price": "12€",
                "notation": 2.5,
                "description": "blablabla"
            } ,
            {
                "id":"5",
                "name":"voiture future",
                "url_photo" : "600_450_5245b3a041d106451d83c832f0f37348_8-1.jpeg",
                "categorie":"best seller",
                "price": "100.0000€",
                "notation": 5,
                "description": "blablabla"
            },
            {
                "id":"6",
                "name":"bandana",
                "url_photo" : "bandana_tennis.jpg",
                "categorie":"best seller",
                "price": "8€",
                "notation": 3,
                "description": "blablabla"
            },
            {
                "id":"7",
                "name":"chaussure",
                "url_photo" : "chaussures-nike-lunar-ballistec-15-705285-801.jpg",
                "categorie":"personnalisable",
                "price": "300000€",
                "notation": 4,
                "description": "blablabla"
            },
            {
                "id":"8",
                "name":"Vêtements Chaussettes",
                "url_photo" : "58581befbb5bb.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "15",
        "categorie":"cinéma",
        "last_name": "Marilyn",
        "first_name": "Monroe",
        "background_image": "wallpaper2you_118391.jpg",
        "photo_perso":"7-atrizes-que-interpretaram-marilyn-monroe-nos-cinemas.html.jpg",
        "nombre_aime":"5.132",
        "culture" :"née Norma Jeane Mortenson le 1ᵉʳ juin 1926 à Los Angeles où elle est morte le 5 août 1962.",
        "quizz" :"Est-elle devenue directement actrice ou une chanteuse  ?",
        "articles": [
            {
                "id":"1",
                "name":"album de musique",
                "url_photo" : "51FkjljQs4L.jpg",
                "categorie":"good deal",
                "price": "99€",
                "notation": 4.5,
                "description": "blablabla"
            },
            {
                "id":"2",
                "name":"pistolet",
                "url_photo" : "240615-DRF73172-2-C1.jpg",
                "categorie":"good deal",
                "price": "30",
                "notation": 5,
                "description": "blablabla"
            }
            ,
            {
                "id":"3",
                "name":"Blu ray 3D I Robot",
                "url_photo" : "i-robot-conversion-3d-2012_1354018100__450_400.png",
                "categorie":"good deal",
                "price": "30€",
                "notation": 4.5,
                "description": "freger. "
            } ,
            {
                "id":"4",
                "name":"Edition limitée I Robot",
                "url_photo" : "71YjutpMwcL._SY445_.jpg",
                "categorie":"best seller",
                "price": "12€",
                "notation": 2.5,
                "description": "blablabla"
            } ,
            {
                "id":"5",
                "name":"voiture future",
                "url_photo" : "600_450_5245b3a041d106451d83c832f0f37348_8-1.jpeg",
                "categorie":"best seller",
                "price": "100.0000€",
                "notation": 5,
                "description": "blablabla"
            },
            {
                "id":"6",
                "name":"bandana",
                "url_photo" : "bandana_tennis.jpg",
                "categorie":"best seller",
                "price": "8€",
                "notation": 3,
                "description": "blablabla"
            },
            {
                "id":"7",
                "name":"chaussure",
                "url_photo" : "chaussures-nike-lunar-ballistec-15-705285-801.jpg",
                "categorie":"personnalisable",
                "price": "300000€",
                "notation": 4,
                "description": "blablabla"
            },
            {
                "id":"8",
                "name":"Vêtements Chaussettes",
                "url_photo" : "58581befbb5bb.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "16",
        "categorie":"art",
        "last_name": "Salvador",
        "first_name": "Dalí",
        "background_image": "daliback.jpg",
        "photo_perso":"DALI.jpg",
        "nombre_aime":"16.132",
        "culture" :"peintre, sculpteur, graveur, scénariste et écrivain catalan de nationalité espagnole",
        "quizz" :"Est-elle devenue directement actrice ou une chanteuse  ?",
        "articles": [
            {
                "id":"1",
                "name":"copie d'une oeuvre de dali",
                "url_photo" : "oeuvreCover.jpg",
                "categorie":"good deal",
                "price": "59€",
                "notation": 4.5,
                "description": "blablabla"
            },
            {
                "id":"2",
                "name":"copie d'une oeuvre de dali",
                "url_photo" : "Salvador-Dali-Wallpapers-1920x108024.jpg",
                "categorie":"good deal",
                "price": "30",
                "notation": 5,
                "description": "blablabla"
            }
            ,
            {
                "id":"3",
                "name":"Triangle",
                "url_photo" : "daliTriangle.jpg",
                "categorie":"good deal",
                "price": "30€",
                "notation": 4.5,
                "description": "freger. "
            } ,
            {
                "id":"4",
                "name":"copie d'une oeuvre de dali",
                "url_photo" : "salvador-dali-pomegranate-600x315.jpg",
                "categorie":"best seller",
                "price": "12€",
                "notation": 2.5,
                "description": "blablabla"
            },
            {
                "id":"5",
                "name":"Triangle",
                "url_photo" : "daliTriangle.jpg",
                "categorie":"personnalisable",
                "price": "12€",
                "notation": 2.5,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "17",
        "categorie":"art",
        "last_name": "David",
        "first_name": "Guetta",
        "background_image": "ocfmgc5AwvxIGuDvoJPJKWx255ubIDBStVhUNT7i2b3s7zftexvAUuGSomrlrc2t.jpg",
        "photo_perso":"1200px-David_Guetta_2013-04-12_001.jpg",
        "nombre_aime":"16.132",
        "culture" :"né le 7 novembre 1967, est un disc jockey, remixeur et producteur de musique français. Il débute adolescent avant de se professionnaliser",
        "quizz" :"Est-il Français?",
        "articles": [
            {
                "id":"1",
                "name":"casquette",
                "url_photo" : "casquette-david-guetta.jpg",
                "categorie":"good deal",
                "price": "32€",
                "notation": 4.5,
                "description": "blablabla"
            },
            {
                "id":"2",
                "name":"album nothing but the beat",
                "url_photo" : "david-guetta-nothing-but-the-beat.jpg",
                "categorie":"good deal",
                "price": "14",
                "notation": 5,
                "description": "blablabla"
            }
            ,
            {
                "id":"3",
                "name":"prote clé",
                "url_photo" : "porte-cles-metal-david-guetta.jpg",
                "categorie":"good deal",
                "price": "3€",
                "notation": 4.5,
                "description": "freger. "
            } ,
            {
                "id":"4",
                "name":"T shirt",
                "url_photo" : "t-shirt-logo-david-guetta.jpg",
                "categorie":"best seller",
                "price": "12€",
                "notation": 2.5,
                "description": "blablabla"
            },
            {
                "id":"5",
                "name":"Mini short sexy bitch",
                "url_photo" : "mini-short-sexy-bitch-david-guetta.jpg",
                "categorie":"personnalisable",
                "price": "9€",
                "notation": 2.5,
                "description": "blablabla"
            },
            {
                "id":"6",
                "name":"BONNET DAVID GUETTA - PLAY HARD",
                "url_photo" : "bonnet-david-guetta-play-hard.jpg",
                "categorie":"best seller",
                "price": "20€",
                "notation": 2.5,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "18",
        "categorie":"art",
        "last_name": "Martin",
        "first_name": "Garrix",
        "background_image": "klot_martin-garix2.jpg",
        "photo_perso":"klot_martin-garix.jpg",
        "nombre_aime":"16.132",
        "culture" :"de son vrai nom Martijn Garritsen, né le 14 mai 1996 à Amstelveen, est un disc jockey, compositeur et producteur musical néerlandais.",
        "quizz" :"Sa musique animal a était publié en 2013 ?",
        "articles": [
            {
                "id":"1",
                "name":"casquette",
                "url_photo" : "martin-garrix-t-shirt-premium-pour-hommes.jpg",
                "categorie":"good deal",
                "price": "22€",
                "notation": 4.5,
                "description": "blablabla"
            } ,{
                "id":"2",
                "name":"casquette",
                "url_photo" : "papilyo-mug-martin-garrix-3.jpg",
                "categorie":"good deal",
                "price": "7€",
                "notation": 4.5,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "19",
        "categorie":"art",
        "last_name": "Andy",
        "first_name": "Warhol",
        "background_image": "594966__warhol-marilyn-monroe-1_p-e1440069083122.jpg",
        "photo_perso":"260px-Andy_Warhol_by_Jack_Mitchell.jpg",
        "nombre_aime":"16.132",
        "culture" :"né Andrew Warhola le 6 août 1928 à Pittsburgh, Pennsylvanie, États-Unis, et mort le 22 février 1987",
        "quizz" :"la soup cans est une de c'est oeuvre ?",
        "articles": [
            {
                "id":"1",
                "name":"boite",
                "url_photo" : "boite-metal-de-bonbons-banane.jpg",
                "categorie":"good deal",
                "price": "14€",
                "notation": 4.5,
                "description": "blablabla"
            } ,{
                "id":"2",
                "name":"copie d'une oeuvre ",
                "url_photo" : "campbell-soup.jpg",
                "categorie":"good deal",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"3",
                "name":"copie d'une oeuvre ",
                "url_photo" : "Affiche-andy-warhol-chanel-bleu-et-jaune.jpg",
                "categorie":"good deal",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"4",
                "name":"chaussure dans le gout",
                "url_photo" : "converse-all-star-hi-andy-warhol.jpg",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "20",
        "categorie":"art",
        "last_name": "Léonard",
        "first_name": "de Vinci",
        "background_image": "universal-genius.jpg",
        "photo_perso":"LEONARDO.JPG",
        "nombre_aime":"16.132",
        "culture" :"né à Vinci (Toscane) le 15 avril 1452 ",
        "quizz" :"est-il exposée dans le Musée du Louvre ?",
        "articles": [
            {
                "id":"1",
                "name":"type homme",
                "url_photo" : "the-proportions-of-the-human-figure-the-vitruvian-man-1492.jpg!Large.jpg",
                "categorie":"good deal",
                "price": "14€",
                "notation": 4.5,
                "description": "blablabla"
            } ,{
                "id":"2",
                "name":"copie d'une oeuvre ",
                "url_photo" : "Leonardo_da_Vinci_-_Mona_Lisa.jpg",
                "categorie":"good deal",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"3",
                "name":"copie d'une oeuvre ",
                "url_photo" : "320px-Andrea_del_Verrocchio,_Leonardo_da_Vinci_-_Baptism_of_Christ_-_Uffizi.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"4",
                "name":"mini machine volante",
                "url_photo" : "flying-machine-03-c-01.jpg",
                "categorie":"best seller",
                "price": "15€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"5",
                "name":"modele de conception catapule",
                "url_photo" : "8a717929ecf57cf5f82e89874d7f5da2_w542_h386.jpg",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"6",
                "name":"modele de conception tank",
                "url_photo" : "Leonardo_tank.JPG",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "21",
        "categorie":"grande_metropole",
        "last_name": "Émile",
        "first_name": "Zola",
        "background_image": "greek-fishing-boats-ion-sea-260nw-219897307.jpg",
        "photo_perso":"1200px-Emile_Zola_1902.jpg",
        "nombre_aime":"17.132",
        "culture" :"un écrivain et journaliste français, né le 2 avril 1840 à Paris, où il est mort le 29 septembre 1902 ",
        "quizz" :"est-il l'auteur de germinal ?",
        "articles": [
            {
                "id":"1",
                "name":"type homme",
                "url_photo" : "the-proportions-of-the-human-figure-the-vitruvian-man-1492.jpg!Large.jpg",
                "categorie":"good deal",
                "price": "14€",
                "notation": 4.5,
                "description": "blablabla"
            } ,{
                "id":"2",
                "name":"copie d'une oeuvre ",
                "url_photo" : "Leonardo_da_Vinci_-_Mona_Lisa.jpg",
                "categorie":"good deal",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"3",
                "name":"copie d'une oeuvre ",
                "url_photo" : "320px-Andrea_del_Verrocchio,_Leonardo_da_Vinci_-_Baptism_of_Christ_-_Uffizi.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"4",
                "name":"mini machine volante",
                "url_photo" : "flying-machine-03-c-01.jpg",
                "categorie":"best seller",
                "price": "15€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"5",
                "name":"modele de conception catapule",
                "url_photo" : "8a717929ecf57cf5f82e89874d7f5da2_w542_h386.jpg",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"6",
                "name":"modele de conception tank",
                "url_photo" : "Leonardo_tank.JPG",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "22",
        "categorie":"grande_metropole",
        "last_name": "Marcel",
        "first_name": "Pagnol",
        "background_image": "20170930100217892-0.jpg",
        "photo_perso":"Marcel_Pagnol_1931.jpg",
        "nombre_aime":"17.132",
        "culture" :"écrivain, dramaturge, cinéaste et producteur français, né le 28 février 1895 à Aubagne (Bouches-du-Rhône)",
        "quizz" :"est-il l'auteur de Marius ?",
        "articles": [
            {
                "id":"1",
                "name":"type homme",
                "url_photo" : "the-proportions-of-the-human-figure-the-vitruvian-man-1492.jpg!Large.jpg",
                "categorie":"good deal",
                "price": "14€",
                "notation": 4.5,
                "description": "blablabla"
            } ,{
                "id":"2",
                "name":"copie d'une oeuvre ",
                "url_photo" : "Leonardo_da_Vinci_-_Mona_Lisa.jpg",
                "categorie":"good deal",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"3",
                "name":"copie d'une oeuvre ",
                "url_photo" : "320px-Andrea_del_Verrocchio,_Leonardo_da_Vinci_-_Baptism_of_Christ_-_Uffizi.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"4",
                "name":"mini machine volante",
                "url_photo" : "flying-machine-03-c-01.jpg",
                "categorie":"best seller",
                "price": "15€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"5",
                "name":"modele de conception catapule",
                "url_photo" : "8a717929ecf57cf5f82e89874d7f5da2_w542_h386.jpg",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"6",
                "name":"modele de conception tank",
                "url_photo" : "Leonardo_tank.JPG",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "23",
        "categorie":"grande_metropole",
        "last_name": "Michel",
        "first_name": "Coluche",
        "background_image": "Coluche-Restos-du-coeur-affiche-30-ans.jpg",
        "photo_perso":"arton178375.jpg",
        "nombre_aime":"17.132",
        "culture" :"écrivain, dramaturge, cinéaste et producteur français, né le 28 février 1895 à Aubagne (Bouches-du-Rhône)",
        "quizz" :"est-il l'auteur de Marius ?",
        "articles": [
            {
                "id":"1",
                "name":"type homme",
                "url_photo" : "the-proportions-of-the-human-figure-the-vitruvian-man-1492.jpg!Large.jpg",
                "categorie":"good deal",
                "price": "14€",
                "notation": 4.5,
                "description": "blablabla"
            } ,{
                "id":"2",
                "name":"copie d'une oeuvre ",
                "url_photo" : "Leonardo_da_Vinci_-_Mona_Lisa.jpg",
                "categorie":"good deal",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"3",
                "name":"copie d'une oeuvre ",
                "url_photo" : "320px-Andrea_del_Verrocchio,_Leonardo_da_Vinci_-_Baptism_of_Christ_-_Uffizi.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"4",
                "name":"mini machine volante",
                "url_photo" : "flying-machine-03-c-01.jpg",
                "categorie":"best seller",
                "price": "15€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"5",
                "name":"modele de conception catapule",
                "url_photo" : "8a717929ecf57cf5f82e89874d7f5da2_w542_h386.jpg",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"6",
                "name":"modele de conception tank",
                "url_photo" : "Leonardo_tank.JPG",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "24",
        "categorie":"grande_metropole",
        "last_name": "Jacques",
        "first_name": "Chirac",
        "background_image": "vf_main_jacques_chirac_711.jpeg_north_760x_white.jpg",
        "photo_perso":"jacques-chirac.jpg",
        "nombre_aime":"17.132",
        "culture" :"né le 29 novembre 1932 à Paris ( V )",
        "quizz" :"Est-il un ancien président de la république française ?",
        "articles": [
            {
                "id":"1",
                "name":"type homme",
                "url_photo" : "the-proportions-of-the-human-figure-the-vitruvian-man-1492.jpg!Large.jpg",
                "categorie":"good deal",
                "price": "14€",
                "notation": 4.5,
                "description": "blablabla"
            } ,{
                "id":"2",
                "name":"copie d'une oeuvre ",
                "url_photo" : "Leonardo_da_Vinci_-_Mona_Lisa.jpg",
                "categorie":"good deal",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"3",
                "name":"copie d'une oeuvre ",
                "url_photo" : "320px-Andrea_del_Verrocchio,_Leonardo_da_Vinci_-_Baptism_of_Christ_-_Uffizi.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"4",
                "name":"mini machine volante",
                "url_photo" : "flying-machine-03-c-01.jpg",
                "categorie":"best seller",
                "price": "15€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"5",
                "name":"modele de conception catapule",
                "url_photo" : "8a717929ecf57cf5f82e89874d7f5da2_w542_h386.jpg",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"6",
                "name":"modele de conception tank",
                "url_photo" : "Leonardo_tank.JPG",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "25",
        "categorie":"grande_metropole",
        "last_name": "Gaston",
        "first_name": "Defferre",
        "background_image": "3763828lpw-3763839-article-jpg_3519745.jpg",
        "photo_perso":"Gaston_Defferre_1964.jpg",
        "nombre_aime":"17.132",
        "culture" :"il est maire de Marseille d'août 1944 à novembre 1945",
        "quizz" :"Est-il un ancien président de la république française ?",
        "articles": [
            {
                "id":"1",
                "name":"type homme",
                "url_photo" : "the-proportions-of-the-human-figure-the-vitruvian-man-1492.jpg!Large.jpg",
                "categorie":"good deal",
                "price": "14€",
                "notation": 4.5,
                "description": "blablabla"
            } ,{
                "id":"2",
                "name":"copie d'une oeuvre ",
                "url_photo" : "Leonardo_da_Vinci_-_Mona_Lisa.jpg",
                "categorie":"good deal",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"3",
                "name":"copie d'une oeuvre ",
                "url_photo" : "320px-Andrea_del_Verrocchio,_Leonardo_da_Vinci_-_Baptism_of_Christ_-_Uffizi.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"4",
                "name":"mini machine volante",
                "url_photo" : "flying-machine-03-c-01.jpg",
                "categorie":"best seller",
                "price": "15€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"5",
                "name":"modele de conception catapule",
                "url_photo" : "8a717929ecf57cf5f82e89874d7f5da2_w542_h386.jpg",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"6",
                "name":"modele de conception tank",
                "url_photo" : "Leonardo_tank.JPG",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "26",
        "categorie":"comics",
        "last_name": "Bruce Wayne",
        "first_name": "Batman",
        "background_image": "3763828lpw-3763839-article-jpg_3519745.jpg",
        "photo_perso":"Gaston_Defferre_1964.jpg",
        "nombre_aime":"17.132",
        "culture" :"personnage de fiction appartenant à l'univers de DC Comics. Créé par le dessinateur Bob Kane et le scénariste Bill Finger",
        "quizz" :"Est-il un ancien président de la république française ?",
        "articles": [
            {
                "id":"1",
                "name":"Pop",
                "url_photo" : "41trnBjzshL.jpg",
                "categorie":"good deal",
                "price": "14€",
                "notation": 4.5,
                "description": "blablabla"
            } ,{
                "id":"2",
                "name":"cadre photo batman/joker",
                "url_photo" : "cadre-relief-3d-batman-et-joker.jpg",
                "categorie":"good deal",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"3",
                "name":"stickers",
                "url_photo" : "51PVPKUwksL._SX425_.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"4",
                "name":"tome 6",
                "url_photo" : "batman-tome-6.jpg",
                "categorie":"best seller",
                "price": "15€",
                "notation": 4.5,
                "description": "urban comics"
            },{
                "id":"5",
                "name":"Hand spinner",
                "url_photo" : "hand-spinner-batman-batarang.jpg",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"6",
                "name":"lego batman",
                "url_photo" : "lgtob12t-lampe-torche-lego-batman-1-1466066978_1000x0.jpg",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"7",
                "name":"La légende de batman",
                "url_photo" : "original.png",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "27",
        "categorie":"comics",
        "last_name": "Lucky",
        "first_name": "Luke",
        "background_image": "7407441_capture_1000x625.JPG",
        "photo_perso":"lucky-luke-3_5750605.jpg",
        "nombre_aime":"17.132",
        "culture" :"Une série de bande dessinée belge de western humoristique créée par le dessinateur belge Morris dans l'Almanach 1947",
        "quizz" :"Est-il plus rapide que son ombre ?",
        "articles": [
            {
                "id":"1",
                "name":"Pop",
                "url_photo" : "41trnBjzshL.jpg",
                "categorie":"good deal",
                "price": "14€",
                "notation": 4.5,
                "description": "blablabla"
            } ,{
                "id":"2",
                "name":"cadre photo batman/joker",
                "url_photo" : "cadre-relief-3d-batman-et-joker.jpg",
                "categorie":"good deal",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"3",
                "name":"stickers",
                "url_photo" : "51PVPKUwksL._SX425_.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"4",
                "name":"tome 6",
                "url_photo" : "batman-tome-6.jpg",
                "categorie":"best seller",
                "price": "15€",
                "notation": 4.5,
                "description": "urban comics"
            },{
                "id":"5",
                "name":"Hand spinner",
                "url_photo" : "hand-spinner-batman-batarang.jpg",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"6",
                "name":"lego batman",
                "url_photo" : "lgtob12t-lampe-torche-lego-batman-1-1466066978_1000x0.jpg",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"7",
                "name":"La légende de batman",
                "url_photo" : "original.png",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "28",
        "categorie":"grande_metropole",
        "last_name": "Spirou",
        "first_name": "",
        "background_image": "spirou.jpg",
        "photo_perso":"Spirou-par-Janry.jpg",
        "nombre_aime":"17.132",
        "culture" :" personnage de fiction imaginé par l'éditeur belge Jean Dupuis, créé graphiquement par Rob-Vel ",
        "quizz" :"Est-il plus rapide que son ombre ?",
        "articles": [
            {
                "id":"1",
                "name":"Pop",
                "url_photo" : "41trnBjzshL.jpg",
                "categorie":"good deal",
                "price": "14€",
                "notation": 4.5,
                "description": "blablabla"
            } ,{
                "id":"2",
                "name":"cadre photo batman/joker",
                "url_photo" : "cadre-relief-3d-batman-et-joker.jpg",
                "categorie":"good deal",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"3",
                "name":"stickers",
                "url_photo" : "51PVPKUwksL._SX425_.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"4",
                "name":"tome 6",
                "url_photo" : "batman-tome-6.jpg",
                "categorie":"best seller",
                "price": "15€",
                "notation": 4.5,
                "description": "urban comics"
            },{
                "id":"5",
                "name":"Hand spinner",
                "url_photo" : "hand-spinner-batman-batarang.jpg",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"6",
                "name":"lego batman",
                "url_photo" : "lgtob12t-lampe-torche-lego-batman-1-1466066978_1000x0.jpg",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"7",
                "name":"La légende de batman",
                "url_photo" : "original.png",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "29",
        "categorie":"comics",
        "last_name": "Gaston ",
        "first_name": "Lagaffe",
        "background_image": "997879-182_ga_bdjpg.jpg",
        "photo_perso":"evolution1.png",
        "nombre_aime":"17.132",
        "culture" :"Personnage de fiction créé par le dessinateur belge André Franquin en 1957.",
        "quizz" :"Failt-il des blagues ?",
        "articles": [
            {
                "id":"1",
                "name":"Pop",
                "url_photo" : "41trnBjzshL.jpg",
                "categorie":"good deal",
                "price": "14€",
                "notation": 4.5,
                "description": "blablabla"
            } ,{
                "id":"2",
                "name":"cadre photo batman/joker",
                "url_photo" : "cadre-relief-3d-batman-et-joker.jpg",
                "categorie":"good deal",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"3",
                "name":"stickers",
                "url_photo" : "51PVPKUwksL._SX425_.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"4",
                "name":"tome 6",
                "url_photo" : "batman-tome-6.jpg",
                "categorie":"best seller",
                "price": "15€",
                "notation": 4.5,
                "description": "urban comics"
            },{
                "id":"5",
                "name":"Hand spinner",
                "url_photo" : "hand-spinner-batman-batarang.jpg",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"6",
                "name":"lego batman",
                "url_photo" : "lgtob12t-lampe-torche-lego-batman-1-1466066978_1000x0.jpg",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"7",
                "name":"La légende de batman",
                "url_photo" : "original.png",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            }
        ]
    },
    {
        "id": "30",
        "categorie":"comics",
        "last_name": "Tintin",
        "first_name": "",
        "background_image": "619_test.jpg",
        "photo_perso":"boutique-tintin.jpg",
        "nombre_aime":"17.132",
        "culture" :"Les Aventures de Tintin constituent une série de bandes dessinées créée par le dessinateur et scénariste belge Hergé. ",
        "quizz" :"Failt-il des blagues ?",
        "articles": [
            {
                "id":"1",
                "name":"Pop",
                "url_photo" : "41trnBjzshL.jpg",
                "categorie":"good deal",
                "price": "14€",
                "notation": 4.5,
                "description": "blablabla"
            } ,{
                "id":"2",
                "name":"cadre photo batman/joker",
                "url_photo" : "cadre-relief-3d-batman-et-joker.jpg",
                "categorie":"good deal",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"3",
                "name":"stickers",
                "url_photo" : "51PVPKUwksL._SX425_.jpg",
                "categorie":"personnalisable",
                "price": "8€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"4",
                "name":"tome 6",
                "url_photo" : "batman-tome-6.jpg",
                "categorie":"best seller",
                "price": "15€",
                "notation": 4.5,
                "description": "urban comics"
            },{
                "id":"5",
                "name":"Hand spinner",
                "url_photo" : "hand-spinner-batman-batarang.jpg",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"6",
                "name":"lego batman",
                "url_photo" : "lgtob12t-lampe-torche-lego-batman-1-1466066978_1000x0.jpg",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            },{
                "id":"7",
                "name":"La légende de batman",
                "url_photo" : "original.png",
                "categorie":"best seller",
                "price": "18€",
                "notation": 4.5,
                "description": "blablabla"
            }
        ]
    }
];