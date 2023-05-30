const { addNoteHandler } = require('./handler');

{
  method: 'POST',
  path: '/notes',
  handler: addNoteHandler,
},