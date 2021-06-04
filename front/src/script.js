$(document).ready(function() {
    $("#d1").change(function () {
      var split = $("#d1").val().split('-');
      var fim = new Date(parseInt(split[0]), parseInt(split[1]), parseInt(split[2]) + 0);
      $("#d2").attr({
         "min" : [fim.getFullYear(), 
              (fim.getMonth() > 9 ? '' : '0') + fim.getMonth(), 
              (fim.getDate() > 9 ? '' : '0') + fim.getDate()]
              .join('-')
      });
    });
});
      