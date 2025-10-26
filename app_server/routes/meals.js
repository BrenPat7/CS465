var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    const mealsData = [
        {
            title: 'SeaFood Special',
            slug: 'seafood-special',
            image: '/images/seafoods.jpg',
            description: "<span>Fried Salmon Special</span> I'm a product overview. Here you can write more information about your product. Buyers like to know ..."
        },
        {
            title: 'Sumptuous Desserts',
            slug: 'desserts',
            image: '/images/desserts.jpg',
            description: "<span>Choco Ice Cream Sandwich</span> I'm a product overview. Here you can write more information about your product. Buyers like to know ..."
        },
        {
            title: 'Buffet',
            slug: 'buffet',
            image: '/images/buffet.jpg',
            description: "<span>Mixed Buffet</span> I'm a product overview. Here you can write more information about your product. Buyers like to know ..."
        }
    ];

    res.render('meals', {
        title: 'Meals',
        nav: { meals: 'selected' },
        year: new Date().getFullYear(),
        meals: mealsData
    });
});

module.exports = router;