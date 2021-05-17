/*
 * Donation Box
 * Script that implements a unified donation input box for multiple
 * payment forms.
 *
 * Usage:
 * 1. Include this script
 * 2. Add the following snippet to a page
 *  <div class="donation-box"
      data-amount-prefix="$"
      data-amount-postfix="USD"
      data-amount-default="44.00"
      data-title="Campaign Title"
      data-subtitle="Add description text here"
      data-autofocus="true"
      data-cc-url="https://donate.worldconcern.org/cure"
      data-stripe-key="pk_test_bds8Hc4asepIGX0bkEdiMuUs"
      data-stripe-image="https://s3.amazonaws.com/stripe-uploads/acct_15N7cjACBmqF18jCmerchant-icon-1421782965174-symbol-small.png"
      data-stripe-require-address="true"
      data-stripe-button-label="Donate {{amount}}"
      data-enable-stripe="true"
      data-enable-cc="true"
      data-enable-amazon="true">

      <div class="donate-form-container hide">
        <!-- Paste amazon form here -->
        <!-- Include custom fields to pass along to Stripe -->
        <form class="stripe-form" action="https://worldconcern.parseapp.com/donate" method="POST">
          <!-- Required -->
          <input type="hidden" value="" name="stripeToken" />
          <input type="hidden" value="" name="stripeAmount" />
          <!-- Set automatically if included -->
          <input type="hidden" value="" name="stripeEmail" />
          <input type="hidden" value="" name="stripeAddrCity" />
          <input type="hidden" value="" name="stripeAddrCountry" />
          <input type="hidden" value="" name="stripeAddrLine1" />
          <input type="hidden" value="" name="stripeAddrLine2" />
          <input type="hidden" value="" name="stripeAddrState" />
          <input type="hidden" value="" name="stripeAddrZip" />
          <input type="hidden" value="" name="stripeCardBrand" />
          <input type="hidden" value="" name="stripeCardCountry" />
          <!-- Optional -->
          <input type="hidden" value="http://worldconcern.org/donate" name="stripeRedirectAfterSuccess" />
          <input type="hidden" value="http://worldconcern.org/donate" name="stripeRedirectAfterError" />
          <!-- Any additional custom value -->
          <input type="hidden" value="Stripe" name="giftReference" />
          <input type="hidden" value="Clean Water" name="campaign" />
        </form>
      </div>
    </div>
    3. Paste the generated Amazon donation form, if required (https://payments.amazon.com/sdui/sdui/donationbutton)
 */
(function ($, StripeCheckout) {
  var validate = function (val) {
    return val && isFinite(val);
  };

  var format = function (val) {
    return parseFloat(val, 10).toFixed(2);
  };

  var error = function (isError) {
    $('.donation-amount').toggleClass('error', isError);
  };

  var buttonInit = function(parent, selector, func) {
    $(parent).on('click', selector, function (event) {
      var donationAmount = $(parent).find('.donation-amount').val();
      if (validate(donationAmount)) {
        func(this, donationAmount);
        error(false);
        event.preventDefault();
      } else {
        event.preventDefault();
        error(true);
        return false;
      }
    });
  }

  $(document).ready(function () {
    // Add markup
    var template =
      '<div class="donation-box-content">' +
        '<div class="donation-box-amount">' +
          '<span class="donation-amount-prefix"></span>' +
          '<input class="donation-amount" type="text" value="" />' +
          '<span class="donation-amount-postfix"></span>' +
        '</div>' +
        '<ul class="donation-button-grid">' +
          '<li><a href="#" class="button secondary radius donation-stripe-button full" title="Pay with Credit Card">Donate Now »</a>' +
          '</li>' +
          '<li><a href="#" class="button secondary radius donation-cc-button full" title="Pay with Credit Card">Donate Now »</a>' +
          '</li>' +
          '<li> <a href="#" class="button secondary radius donation-amazon-button full" title="Donate with Amazon">Donate by <img src="/assets/images/donation-amazon-icon.svg" alt="Amazon Payments" /></a>' +
          '</li>' +
        '</ul>' +
      '</div>';

    var canadaAlert =
      '<div id="canadaAlert" class="reveal-modal" data-reveal>' +
        '<h2>Canadian Donors</h2>' +
        '<p class="lead">Please use the Canadian donation form by clicking the button below.</p>' +
        '<p class="lead"><a href="https://donate.worldconcern.org/joy-can" class="secondary button">Donate in Canadian Dollars &raquo;</a></p>' +
        '<p>We apologize for the inconvenience as we work to consolidate our online giving experience.</p>' +
        '<a class="close-reveal-modal">&#215;</a>' +
      '</div>';

    $('div.donate-form-container').each(function(index) {
      // Set template
      var container = $(this);
      $(container).after(template);
      var content = $(container).next('.donation-box-content');

      // Get data
      var data = $(container).closest('.donation-box').data();

      // Create Stripe handler
      var stripeHandler = StripeCheckout.configure({
        key: data['stripeKey'],
        // key: 'pk_test_bds8Hc4asepIGX0bkEdiMuUs',
        image: data['stripeImage'],
        // image: 'https://s3.amazonaws.com/stripe-uploads/acct_15N7cjACBmqF18jCmerchant-icon-1421782965174-symbol-small.png',
        token: function(token) {
          // Canada check
          if (token.card.address_country && (token.card.address_country.toLowerCase() === 'canada')) {
            $(container).after(canadaAlert);
            $('#canadaAlert').foundation('reveal', 'open');
            return;
          }

          var stripeForm = $(container).find('form.stripe-form');
          // Set form fields to be sent as metadata
          // NOTE: amount gets set on checkout open
          $(stripeForm).find('input[name=stripeToken]').val(token.id);
          $(stripeForm).find('input[name=stripeEmail]').val(token.email);
          $(stripeForm).find('input[name=stripeAddrCity]').val(token.card.address_city);
          $(stripeForm).find('input[name=stripeAddrCountry]').val(token.card.address_country);
          $(stripeForm).find('input[name=stripeAddrLine1]').val(token.card.address_line1);
          $(stripeForm).find('input[name=stripeAddrLine2]').val(token.card.address_line2);
          $(stripeForm).find('input[name=stripeAddrState]').val(token.card.address_state);
          $(stripeForm).find('input[name=stripeAddrZip]').val(token.card.address_zip);
          $(stripeForm).find('input[name=stripeCardBrand]').val(token.card.brand);
          $(stripeForm).find('input[name=stripeCardCountry]').val(token.card.country);

          $(stripeForm).submit();
        }
      });

      // Set up buttons
      buttonInit(content, '.donation-cc-button', function(button, donationAmount) {
        var urlBase = $(button).attr('href');
        window.location.href = urlBase + "#amount=" + format(donationAmount);
      });
      buttonInit(content, '.donation-amazon-button', function(button, donationAmount) {
        $(container).find('input[name=amount]').val(format(donationAmount));
        $(container).find('form').submit();
      });
      buttonInit(content, '.donation-stripe-button', function(button, donationAmount) {
        // Update hidden field
        $(button).closest('.donation-box').find('form.stripe-form input[name=stripeAmount]')
          .val(donationAmount * 100);

        // Open Checkout with further options
        stripeHandler.open({
          name: data['title'],
          description: data['subtitle'],
          amount: donationAmount * 100,
          address:data['stripeRequireAddress'],
          panelLabel: data['stripeButtonLabel'],
        });
      });

      // Set values
      $(content).find('.donation-amount-prefix').text(data['amountPrefix']);
      $(content).find('.donation-amount-postfix').text(data['amountPostfix']);
      $(content).find('.donation-amount').attr('value', data['amountDefault']);
      $(content).find('.donation-box-title').text(data['title']);
      $(content).find('.donation-box-subtitle').text(data['subtitle']);
      if (data['autofocus']) $(content).find('.donation-amount').attr('autofocus', true);
      $(content).find('.donation-cc-button').attr('href', data['ccUrl']);
      var buttonCount = 0;
      $(content).find('.donation-cc-button').toggle(data['enableCc'] === true);
      if (data['enableCc'] === true) buttonCount += 1;
      $(content).find('.donation-amazon-button').toggle(data['enableAmazon'] === true);
      if (data['enableAmazon'] === true) buttonCount += 1;
      $(content).find('.donation-stripe-button').toggle(data['enableStripe'] === true);
      if (data['enableStripe'] === true) buttonCount += 1;
      $(content).find('.donation-button-grid').addClass('small-block-grid-' + buttonCount);
    });
  });
})(jQuery, StripeCheckout);
