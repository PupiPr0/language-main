var userLang = navigator.language || navigator.userLanguage;
var dataURL = 'https://api-language-main-page.wildmoney.pro/langage/'+userLang+'.json';
var App = new Vue({
  el: '#wild',
  data: {
    userData: []
  },
  mounted() { 
    var self = this 
    $.getJSON(dataURL, function(data) {
      self.userData = data;
    });
  }
}) 

Vue.filter('striphtml', function (value) {
  var div = document.createElement("div");
  div.innerHTML = value;
  var text = div.textContent || div.innerText || "";
  return text;
});
