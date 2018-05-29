var board = {
  name: 'Kanban Board',
  addColumn: function(column) {
    this.$element.append(column.$element);
    initSortable();
  },
  $element: $('#board .column-container')
};

$('.add-column-btn').click(function() {  
  board.addColumn(new Column(prompt( 'Enter a column name' )));
});

function initSortable() {
  $('.column-card-list').sortable({
    connectWith: '.column-card-list',
    placeholder: 'card-placeholder'
  }).disableSelection();
}