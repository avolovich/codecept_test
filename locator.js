module.exports = {
 searchField: "input[name=q][type=text]",
 searchResult5: "(//div[@class='r'])[5]/a/h3",
 searchResult: function(number) {
    return "(//div[@class='r'])["+number+"]/a/h3";
 }

};
