var names = {};

names.nameList = [
    "String[].lenght"
];

names.getRandomName = function() {
    return names.nameList[Math.floor((Math.random() * names.nameList.length))];
};

module.exports = names;
