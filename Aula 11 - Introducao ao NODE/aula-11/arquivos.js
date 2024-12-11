const path = require('node:path')
const fs = require('node:fs')

const dotenv = require('dotenv')
dotenv.config()


const filePath = path.join(process.cwd(), 'texto.txt')
const fileOutPath = path.join(process.cwd(), 'texto-com-linhas.txt')
console.log(filePath)

console.time('leitura do arquivos')
console.time('manipular arquivos')

fs.readFile(filePath, {}, (erro, dados)=> {
    if (erro){
        console.error(`Erro na leitura do arquivo no caminho ${filePath}`)
        return
    }

    console.timeEnd('leitura do arquivos')


    const texto = dados.toString()
    const linhas = texto.split('\n')

    const linhasAjustadas = linhas.map((linha, index, arrayDeLinhas) => 
        `${index + 1} - ${linha}`
    )
    
    fs.writeFile(fileOutPath, linhasAjustadas.join('\n'), (erro)=>{
        if (erro){
            console.error(`Erro na escrita do arquivo no caminho ${fileOutPath}`)
            return
        }
        console.log(`Arquivo salvo no bucket ${process.env.S3_BUCKET}`)
        console.timeEnd('manipular arquivos')
    })
  

    // console.log(dados.toString())
    // Voltar no minuto 38:21
})
