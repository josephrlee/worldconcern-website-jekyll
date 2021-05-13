---
title: Thank You
date: 2020-08-19 23:01:00 Z
author: Joseph Lee
footer_scripts: |-
  <!-- JS query string passing for FA -->
  <script>
      var getUrlParameter = function getUrlParameter(sParam) {
          var sPageURL = decodeURIComponent(window.location.search.substring(1)),
              sURLVariables = sPageURL.split('&'),
              sParameterName,
              i;
          for (i = 0; i < sURLVariables.length; i++) {
              sParameterName = sURLVariables[i].split('=');
              if (sParameterName[0] === sParam) {
                  return sParameterName[1] === undefined ? true : sParameterName[1];
              }
          }
      };

      var oppid = getUrlParameter('oppid');
      var oIframe = document.getElementById('matching-gift-search');

      if ( oppid ) {
          oIframe.src = oIframe.src + '?oppid=' + oppid;
      }

      console.log('oppid = ' + oppid);
      console.log('iframe src = ' + oIframe.src);
  </script>
  <script
      src="https://rawcdn.githack.com/davidjbradshaw/iframe-resizer/ac34f5eb3554e466acd6c222b93a2e6674f9e786/js/iframeResizer.min.js">
  </script>
  <style>
    #matching-gift-search {
      width: 1px;
      min-width: 100%;
    }
  </style>
body_title: Thank You
head_title: Thank You For Supporting Transform
meta_description: Thank you for supporting World Concern's work to extend opportunity
  and hope to people facing extreme poverty.
---

Thank you for supporting World Concern's work to extend opportunity and hope to people facing extreme poverty. Your generosity is helping transform the lives of individuals, families and communities, not just now, but for generations to come.     

You will also receive an email acknowledgment of your gift, which you can keep for your records. If you would like to receive a hard copy by mail, please contact [info@worldconcern.org](mailto:info@worldconcern.org).

Stretch your gift farther! Find out if your company matches donations by asking your employer or looking them up on the form below.

On behalf of those we are privileged to serve, thank you for giving to World Concern.

God bless you,
  
Nick Archer  
President
<br/>
<br/>
<br/>
<iframe id="matching-gift-search" src="https://crista.org/wp-content/themes/crista/dd-iframe-resizer.html" frameBorder="0" onload="iFrameResize()"></iframe>
