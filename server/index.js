import path from 'path'

const resolvePath = path.resolve("")
const normalizePath = path.normalize("/user/../server/index.js")

console.log("resolvePATH",resolvePath)
console.log("normalizePATH",normalizePath)