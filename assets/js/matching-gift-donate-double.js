var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

$(document).on("click", ".mg-forms-button,.mg-guidelines-button,.section-image-first", function(event) {
  var vduns = $("input[name=doublethedonation_duns_number]").val();
  var vcname = $("input[name=doublethedonation_company_name]").val();
  var voppid = getUrlParameter("oppid");

  var url = "https://hooks.zapier.com/hooks/catch/3310940/7g7nct/?duns=" + vduns + "&cname=" + vcname + "&oppid=" + voppid;
  $.get(url);
});
