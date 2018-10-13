
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
        "background_image": "",
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
        "background_image": "",
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
        "last_name": "winne l'ourson",
        "first_name": "",
        "background_image": "",
        "photo_perso":"",
        "articles": [
            {
                "id":"1",
                "name":"tasse",
                "url_photo" : "",
                "price": "300000€"
            },
            {
                "id":"2",
                "name":"tee-sheet",
                "url_photo" : "",
                "price": "300000€"
            }]
    },
    {
        "id": "4",
        "categorie":"enfance",
        "last_name": "mickey",
        "first_name": "mouse",
        "background_image": "",
        "photo_perso":"",
        "articles": [ {
            "id":"1",
            "name":"tasse",
            "url_photo" : "",
            "price": "300000€"
        },
            {
                "id":"2",
                "name":"tee-sheet",
                "url_photo" : "",
                "price": "300000€"
            }]
    }
];