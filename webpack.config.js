var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 
module.exports = {
   entry: "./app/app.jsx", // входная точка - исходный файл
   output:{
       path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
       publicPath: '/public/',
       filename: "bundle.js"       // название создаваемого файла
   },
   devServer: {
     historyApiFallback: true,
   },
   module:{
       rules:[   //загрузчик для jsx
           {
               test: /\.jsx$/, // определяем тип файлов
               exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
               loader: "babel-loader",   // определяем загрузчик
               options:{
                   presets:["env", "react"]    // используемые плагины
               }
           },
           {
             test: /\.scss$/,
             use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
           }
       ]
   },
   plugins: [ 
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ]
}