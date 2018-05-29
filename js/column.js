function Column(id, name) {
  var self = this;

  this.id = id;
  this.name = name || 'No name';
  this.$element = createColumn();

  function createColumn() {
    // create components of columns
    var $column = $('<div>').addClass('column'),
        $columnHeader = $('<header>').addClass('column-header'),
        $columnTitle = $('<h2>').addClass('column-title').text(self.name),
        $columnCardList = $('<ul>').addClass('column-card-list'),
        $columnDeleteBtn = $('<button>').addClass('delete-column-btn').text('x'),
        $columnAddCard = $('<button>').addClass('add-card-btn').text('+');

    // events
    $columnDeleteBtn.click(function() {
      self.removeColumn();
    });
    $columnAddCard.click(function() {
      var cardName = prompt('Enter the name of the card');

      $.ajax({
        url: baseUrl + '/card',
        method: 'POST',
        data: {
          name: cardName,
          bootcamp_kanban_column_id: self.id
        },
        success: function(response) {
          var card = new Card(response.id, cardName);
          self.addCard(card);
        }
      });
    });

    // construct column
    $columnHeader.append($columnTitle)
                 .append($columnDeleteBtn);
                 
    $column.append($columnHeader)
           .append($columnAddCard)
           .append($columnCardList);
            
    // return ready column
    return $column;
  }
}

Column.prototype = {
  addCard: function(card) {
    this.$element.children('ul').append(card.$element);
  },
  
  removeColumn: function() {
    var self = this;

    $.ajax({
      url: baseUrl + '/column/' + self.id,
      method: 'DELETE',
      success: function(response){
        self.$element.remove();
      }
    });
  }
}