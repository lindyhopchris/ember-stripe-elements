let StripeMock = function(publishableKey, options = null) {
  this.publishableKey = publishableKey;
  this.options = options;
}

StripeMock.prototype.elements = function() {
  return {
    create: function() {
      return {
        mount: function() {},
        on: function() {},
        unmount: function() {}
      }
    }
  };
}
StripeMock.prototype.createToken = function() {};
StripeMock.prototype.createSource = function() {};
StripeMock.prototype.createPaymentMethod = function() {};
StripeMock.prototype.retrieveSource = function() {};
StripeMock.prototype.paymentRequest = function() {};
StripeMock.prototype.redirectToCheckout = function() {};
StripeMock.prototype.retrievePaymentIntent = function() {};
StripeMock.prototype.handleCardPayment = function() {};
StripeMock.prototype.handleCardAction = function() {};
StripeMock.prototype.confirmPaymentIntent = function() {};
StripeMock.prototype.handleCardSetup = function() {};
StripeMock.prototype.retrieveSetupIntent = function() {};
StripeMock.prototype.confirmSetupIntent = function() {};

export default StripeMock;
