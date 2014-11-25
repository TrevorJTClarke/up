/**
* A service for pulling feed data
*/
UP.value('Moods', [{
    name: "Happy",
    color: "happy", // blue #0D58FF
    positive: true,
    info: {
        description: "enjoying or characterized by well-being and contentment.",
        pronounce: "hap-ee"
    }
},{
    name: "Excited",
    color: "excited", // red #E84721
    positive: true,
    info: {
        description: "to cause feelings of enthusiasm in (someone).",
        pronounce: "ik-sahy-tid"
    }
},{
    name: "Calm",
    color: "calm", // lightteal #0BF5FF
    positive: true,
    info: {
        description: "free from excitement or passion; tranquil.",
        pronounce: "kahlm"
    }
},{
    name: "Imaginitive",
    color: "imaginative", // yellow #FFF73B
    positive: true,
    info: {
        description: "a conception or mental creation, often a fanciful one.",
        pronounce: "ih-maj-uh-nuh-tiv"
    }
},{
    name: "Normal",
    color: "normal", // green #56E85A
    positive: true,
    info: {
        description: "conforming to the standard or the common type; usual.",
        pronounce: "nawr-muh-l"
    }
},{
    name: "Stressed",
    color: "stressed", // black
    positive: false,
    info: {
        description: "pressure, pull, or other force exerted on one thing by another; strain.",
        pronounce: "stres"
    }
},{
    name: "Unsettled",
    color: "unsettled", // orange #E8B426
    positive: false,
    info: {
        description: "continuously moving or changing; not situated in one place.",
        pronounce: "uhn-set-ld"
    }
},{
    name: "Nervous",
    color: "nervous", // grey #444444
    positive: false,
    info: {
        description: "highly excitable; unnaturally or acutely uneasy or apprehensive.",
        pronounce: "nur-vuh-s"
    }
},{
    name: "Fearful",
    color: "fearful", // pink #FF40A2
    positive: false,
    info: {
        description: "feeling dread, apprehension, or solicitude.",
        pronounce: "feer-fuh-l"
    }
},{
    name: "Restless",
    color: "restless", // brown #5E3615
    positive: false,
    info: {
        description: "unceasingly active; averse to quiet or inaction, as persons.",
        pronounce: "rest-lis"
    }
}]);