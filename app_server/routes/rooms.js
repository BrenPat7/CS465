var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    const newsData = [
        { slug: '2023-best-beaches', title: '2023 Best Beaches Contest Winners' },
        { slug: 'top-10-diving-spots', title: 'Top 10 Diving Spots' },
        { slug: 'fishing-ban', title: 'Fishing ban to be implemented this year' },
        { slug: 'lifeguard-saves-child', title: 'Lifeguard saves child from drowning' }
    ];

    const tipsData = [
        { slug: 'what-to-bring', title: 'What to bring on the beach?' },
        { slug: 'planning-activities', title: 'Planning Fun Activities' },
        { slug: 'diving-checklist', title: 'Diving Checklist' },
        { slug: 'first-aid', title: 'First Aid' },
        { slug: 'how-to-build-a-sand-castle', title: 'How to Build a Sand Castle?' },
        { slug: 'tanning-tips', title: 'Tanning Tips' }
    ];

    const mainArticleData = {
        image: '/images/kayak.jpg',
        title: 'Experience Kayaking!',
        date: 'October 26, 2025',
        author: 'Juan De La Cruz',
        content: `
            <p>Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi. Fusce at pretium felis. Sed consequat libero ut turpis venenatis ut aliquam risus semper. Etiam convallis mi vel risus pretium sodales. Etiam nunc lorem, ullamcorper vitae laoreet id, rutrum et tortor. Vivamus luctus, lacus id egestas facilisis, nunc nunc ultricies lorem, vitae pulvinar nibh urna vel velit.</p>
            <p>Cras dui sapien, feugiat vitae tristique ut, lobortis tempor orci. Donec pulvinar sagittis metus ut tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Nulla at nunc sit amet justo cursus imperdiet. Mauris est leo, placerat nec eleifend eu, facilisis id dolor. Donec nisi nibh, elementum vitae imperdiet non, placerat et felis. Maecenas scelerisque odio quis arcu fringilla malesuada. Nulla facilisi. In libero nulla, fermentum ut pretium ac, pharetra et eros.</p>
            <p>Phasellus viverra fringilla lacus, malesuada blandit velit iaculis dignissim. Suspendisse rutrum massa mauris. Donec quis tempus elit.Integer magna leo, posuere et dignissim vitae, porttitor at odio. Pellentesque a metus nec magna placerat volutpat.</p>
        `
    };

    res.render('news', {
        title: 'News',
        nav: { news: 'selected' },
        year: new Date().getFullYear(),
        latestNews: newsData,
        vacationTips: tipsData,
        mainArticle: mainArticleData
    });
});

module.exports = router;