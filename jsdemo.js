#!/user/bin/env node

var fs = require('fs')

var dirName = process.argv[2]

fs.mkdirSync("./" + dirName)
process.chdir("./" + dirName)
fs.mkdirSync('css')
fs.mkdirSync('js')

fs.writeFileSync("./index.html", "<!DOCTYPE> <title>Hello</title> <hi>Hi</hi>")
fs.writeFileSync("./css/style.css", "h1{color:red;}")
fs.writeFileSync("./js/main.js", "var string = "Hello world" alert(string)")

process.exit(0)
