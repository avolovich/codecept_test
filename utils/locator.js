module.exports = {
   buttons: "//div[@id='buttons']//button",
   prefix: {
      plain: "Btn_Plain_",
      hover: "Btn_Hover_",
      click: "Btn_Click_"
   },
   searchField: "input[name=q][type=text]",
   searchResult5: "(//div[@class='r'])[5]/a/h3",
   searchResult: function(number) {
      return "(//div[@class='r'])["+number+"]/a/h3";
   }
};
