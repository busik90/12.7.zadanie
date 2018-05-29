function Card(id, name) {
  var self = this;

  this.id = id;
  this.name = name || 'No name';
  this.$element = createCard();

  function createCard() {
    // create components of cards
    var $card = $('<li>').addClass('card'),
        $cardDescription = $('<p>').addClass('card-description').text(self.name),
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
    var self = this;
    
    $.ajax({
      url: baseUrl + '/card/' + self.id,
      method: 'DELETE',
      success: function(){
        self.$element.remove();
      }
    });
  }
}