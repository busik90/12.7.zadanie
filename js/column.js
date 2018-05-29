function Column(name) {
  var self = this;

  this.id = randomString();
  this.name = name;
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
      self.addCard(new Card(prompt("Enter the name of the card")));
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
    this.$element.remove();
  }
}