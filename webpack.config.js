'use strict';

let path = require('path');                           // рабочая переменная

module.exports = {
   mode: 'development',                               // мод development или production как и в галпе
   entry: './js/test.js',                       // входящий файл жс'а
   output: {
      filename: 'bundle.js',                          // итоговый файл
      path: __dirname + '/dist/js'                    // __dirname - корень проекта - путь для итогового жс'a
   },
   watch: true,                                       // как и в галпе ватчер

   devtool: "source-map",                             // карту можно посмотреть в источниках, 

   module: {}
};