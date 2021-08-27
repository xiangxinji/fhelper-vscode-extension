
// 生成文档 
const fs = require('fs');
const path = require('path');


function renderSnippet(moduleName, name, prefix, code, desc = '') {
    return `
指令作用:${name}
${desc ? ('描述:' + desc) : ''}\r\n\r\n指令前缀: ${prefix}
\`\`\`${moduleName}
${code.join('\r\n')}
\`\`\`

`
}


// render snippet
const files = fs.readdirSync(path.join(__dirname, '../snippet'))
let snippetDocBlock = ''
files.forEach(file => {
    const moduleName = file.substring(0, file.lastIndexOf('.'))
    snippetDocBlock += `### ${moduleName}\r\n`
    const d = require(path.join(__dirname, '../snippet', file))
    // language snippet item 
    Object.keys(d).map(snippetName => {
        const snipper = d[snippetName]
        snippetDocBlock += renderSnippet(moduleName, snippetName, snipper.prefix, snipper.body, snipper.description)
    })
})



const readmePath = path.join(__dirname, '../README.md')
const templatePath = path.join(__dirname, './doc.template')

const readme = fs.readFileSync(templatePath, 'utf-8')
// replace snippet 
const result = readme.replace('<!--snippet-->', snippetDocBlock)

fs.writeFileSync(readmePath, result)



