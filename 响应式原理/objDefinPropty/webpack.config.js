const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'dist.js'
    },
    module:{

    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        })
    ],
    devServer:{
        static: {
            directory: path.join(__dirname, "build"),
            watch: true
        },
        open:true,
        port:3000
    },
    mode:'development'
}