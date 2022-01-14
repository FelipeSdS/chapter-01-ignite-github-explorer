module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        ['@babel/preset-react',
         {
             runtime: 'automatic' //Para não ter que dar import do React em todas as pagina ou componentes
         }
        ]
    ]
}