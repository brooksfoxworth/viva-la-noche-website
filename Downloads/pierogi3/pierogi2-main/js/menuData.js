/**
 * Menu Data Configuration
 * Contains all menu items organized by category
 */
const MenuData = {
    entrees: [
        {
            id: 'sample-flight',
            name: 'Sample Flight of 4',
            description: 'Try four different pierogi varieties in one delicious sampler.',
            price: 9.99,
            image: './assets/sample-flight.jpg'
        },
        {
            id: 'heritage-platter',
            name: 'Heritage Platter with stuffed CABBAGE',
            description: 'Traditional stuffed cabbage served with authentic Polish sides.',
            price: 24.99,
            image: './assets/heritage-platter.jpg'
        },
        {
            id: 'stuffed-peppers',
            name: 'Stuffed Peppers',
            description: 'Bell peppers stuffed with seasoned rice and meat filling.',
            price: 15.99,
            image: './assets/stuffed-peppers.jpg'
        },
        {
            id: 'classic-potato-cheese',
            name: 'Classic Potato & Cheese',
            description: 'Traditional pierogis filled with creamy mashed potatoes and farmer\'s cheese.',
            price: 19.99,
            image: './assets/pierogi-classic.jpg'
        },
        {
            id: 'spinach-feta',
            name: 'Spinach & Feta',
            description: 'Fresh spinach and creamy feta cheese filling with herbs.',
            price: 19.99,
            image: './assets/pierogi-spinach.jpg'
        },
        {
            id: 'boston-butt',
            name: 'Boston Butt',
            description: 'Tender pulled pork filling in handmade pierogi dough.',
            price: 19.99,
            image: './assets/pierogi-boston-butt.jpg'
        },
        {
            id: 'fried-chicken',
            name: 'Fried Chicken',
            description: 'Crispy fried chicken pieces wrapped in pierogi dough.',
            price: 19.99,
            image: './assets/pierogi-chicken.jpg'
        }
    ],

    bakery: [
        {
            id: 'small-sourdough',
            name: 'Small Sourdough Bread',
            description: 'Fresh baked small sourdough loaf.',
            price: 2.50,
            image: './assets/small-sourdough.jpg'
        },
        {
            id: 'bread-sourdough',
            name: 'Bread Sourdough',
            description: 'Full size artisan sourdough bread loaf.',
            price: 8.00,
            image: './assets/sourdough-bread.jpg'
        },
        {
            id: 'pistachio-croissant',
            name: 'Pistachio Crossaint',
            description: 'Buttery croissant filled with pistachio cream.',
            price: 7.00,
            image: './assets/pistachio-croissant.jpg'
        },
        {
            id: 'chocolate-croissant',
            name: 'Crossaint Chocolate',
            description: 'Classic chocolate-filled croissant.',
            price: 8.00,
            image: './assets/chocolate-croissant.jpg'
        }
    ],

    jars: [
        {
            id: 'polish-dill-pickles',
            name: 'Pickles Polish Dill Polonaise 887ml',
            description: 'Traditional Polish dill pickles in large jar.',
            price: 7.39,
            image: './assets/polish-pickles.jpg'
        },
        {
            id: 'coarse-grain-mustard',
            name: 'Mustard Coarse Grain Kosciusko 255g Black',
            description: 'Premium coarse grain mustard from Poland.',
            price: 4.39,
            image: './assets/coarse-mustard.jpg'
        },
        {
            id: 'tomato-puree',
            name: 'Pudliszki Przecier Pomidorowy 500g',
            description: 'High quality Polish tomato puree.',
            price: 6.99,
            image: './assets/tomato-puree.jpg'
        },
        {
            id: 'spicy-brown-mustard',
            name: 'Mustard Spicy Brown Kosciuszko 255g Blue',
            description: 'Spicy brown mustard with authentic Polish flavor.',
            price: 4.39,
            image: './assets/spicy-mustard.jpg'
        },
        {
            id: 'sour-cherry-preserve',
            name: 'Tamara Sour Cherry Preserve 400g',
            description: 'Traditional sour cherry preserve from Poland.',
            price: 7.39,
            image: './assets/cherry-preserve.jpg'
        }
    ],

    seasoning: [
        {
            id: 'sour-soup-seasoning',
            name: 'Seasoning For Sour Soup And Borsch 70g Krakus',
            description: 'Traditional seasoning blend for Polish sour soups.',
            price: 3.29,
            image: './assets/soup-seasoning.jpg'
        },
        {
            id: 'mushroom-soup',
            name: 'Knor Kremowa Zupa Z Kurek Ze Szczypiorkiem 59g',
            description: 'Creamy mushroom soup mix with chives.',
            price: 3.89,
            image: './assets/mushroom-soup.jpg'
        },
        {
            id: 'mild-ketchup',
            name: 'Ketchup Lagodny Kotlin 450g',
            description: 'Mild Polish ketchup with traditional flavor.',
            price: 4.59,
            image: './assets/mild-ketchup.jpg'
        },
        {
            id: 'spicy-ketchup',
            name: 'Ketchup Pikantny Pudliszki 480g',
            description: 'Spicy Polish ketchup with extra kick.',
            price: 5.99,
            image: './assets/spicy-ketchup.jpg'
        }
    ],

    frozenPierogi: [
        {
            id: 'frozen-potato-cheese',
            name: 'Pierogi Potato & Cheese (15pc)',
            description: 'Frozen pierogi filled with potato and cheese - 15 pieces.',
            price: 12.99,
            image: './assets/frozen-potato-cheese.jpg'
        },
        {
            id: 'frozen-sauerkraut-mushroom',
            name: 'Pierogi Sauerkraut & Mushrooms (15pc)',
            description: 'Frozen pierogi with sauerkraut and mushroom filling - 15 pieces.',
            price: 12.99,
            image: './assets/frozen-sauerkraut.jpg'
        },
        {
            id: 'frozen-boston-butt',
            name: 'Pierogi Boston Butt (15pc)',
            description: 'Frozen pierogi filled with Boston butt pork - 15 pieces.',
            price: 14.99,
            image: './assets/frozen-boston-butt.jpg'
        },
        {
            id: 'frozen-fried-chicken',
            name: 'Pierogi Fried Chicken (15pc)',
            description: 'Frozen pierogi with fried chicken filling - 15 pieces.',
            price: 14.99,
            image: './assets/frozen-chicken.jpg'
        },
        {
            id: 'frozen-spinach-feta',
            name: 'Pierogi Spinach & Feta (15pc)',
            description: 'Frozen pierogi filled with spinach and feta - 15 pieces.',
            price: 14.99,
            image: './assets/frozen-spinach-feta.jpg'
        }
    ],

    candy: [
        {
            id: 'golden-cherry',
            name: 'Golden Cherry 190g Solidarnosc',
            description: 'Premium Polish cherry-flavored candy.',
            price: 10.39,
            image: './assets/golden-cherry.jpg'
        },
        {
            id: 'almond-chocolate',
            name: 'Nussbeisser Czekolada Mleczna Z Calymi Migdalami 100g',
            description: 'Milk chocolate with whole almonds.',
            price: 3.59,
            image: './assets/almond-chocolate.jpg'
        },
        {
            id: 'prince-polo-coconut',
            name: 'Prince Polo Kokos Olza 50g',
            description: 'Popular Polish coconut wafer bar.',
            price: 2.99,
            image: './assets/prince-polo.jpg'
        },
        {
            id: 'milka-cocoa-cream',
            name: 'Milka Relleno Con Crema De Cacao 100g',
            description: 'Milka chocolate filled with cocoa cream.',
            price: 3.99,
            image: './assets/milka-cocoa.jpg'
        }
    ],

    drinks: [
        {
            id: 'soft-drink',
            name: 'Soft Drink',
            description: 'Choice of popular soft drink varieties.',
            price: 2.99,
            image: './assets/soft-drinks.jpg'
        },
        {
            id: 'frugo-ultragreen',
            name: 'Frugo Ultragreen 500ml',
            description: 'Popular Polish green fruit drink.',
            price: 3.49,
            image: './assets/frugo-green.jpg'
        },
        {
            id: 'muszynianka-water',
            name: 'Muszynianka Niskonasycona 1.5 L Postep',
            description: 'Premium Polish mineral water - 1.5L bottle.',
            price: 3.69,
            image: './assets/mineral-water.jpg'
        },
        {
            id: 'boylan-shirley-temple',
            name: 'Boylan Shirley Temple 12 Oz Harvest Pure',
            description: 'Classic Shirley Temple soda in glass bottle.',
            price: 2.79,
            image: './assets/shirley-temple.jpg'
        }
    ]
};
