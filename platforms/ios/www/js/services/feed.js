/**
* A service for pulling feed data
*/
UP.factory('Feeds', function() {
    // fake testing data
    var feeds = [
        { id: 0, name: 'Scruff McGruff' },
        { id: 1, name: 'G.I. Joe' },
        { id: 2, name: 'Miss Frizzle' },
        { id: 3, name: 'Ash Ketchum' }
    ];

    return {
        all: function() {
            return feeds;
        }
    };
});