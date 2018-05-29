function Card(description) {
  var self = this;

  this.id = randomString();
  this.description = description;
  this.$element = createCard();

  function createCard() {
    // create components of cards
    var $card = $('<li>').addClass('card'),
        $cardDescription = $('<p>').addClass('card-description').text(self.description),
        $cardDeleteBtn = $('<button>').addClass('delete-card-btn').text('-');

    // events      
    $cardDeleteBtn.click(function(){
      self.removeCard();
    });

    // construct card
    $card.append($cardDescription)
         .append($cardDeleteBtn);

    return $card;
  }
}

Card.prototype = {
  removeCard: function() {
    this.$element.remove();
  }
}