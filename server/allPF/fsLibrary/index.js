// path library

// const path  = require('path')
// const resolvePath = path.resolve("")
// const normalizePath = path.normalize("/user/../server/index.js")
// const dirName = path.dirname(__filename)
// console.log("resolvePATH",resolvePath)
// console.log("normalizePATH",normalizePath)
// console.log("PATHdirname",dirName)

// fs library file system

import fs from 'fs'
import  path from 'path'

// if you try to use import instade of requird this 3 line is menotory

//1 import { fileURLToPath } from 'url';
//2 const __filename = fileURLToPath(import.meta.url);
//3 const __dirname = path.dirname(__filename);

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFolder = path.join(__dirname,"data")

// if(!fs.existsSync(dataFolder)) {
//     fs.mkdirSync(dataFolder);
//     console.log("data folder created");
// }

// const filePath = path.join(dataFolder,"example.txt")
// fs.writeFileSync(filePath,"hellow world")
// console.log('file create successfully')

// const readfilePath = fs.readFileSync(filePath, "utf8")
// console.log(readfilePath)

// const appendTextinFile = fs.appendFileSync(filePath,'\nThis is a new line')
// console.log(appendTextinFile)

// async way to writing same code 

const asyncfilePath = path.join(dataFolder,'async-example.txt')

if(!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("data folder created");
}

fs.writeFile(asyncfilePath,"this is new line",(err)=>{
    if(err) throw err
    console.log("Created new file")

    fs.readFile(asyncfilePath,"utf8",(err,textRead)=>{
        if(err) throw err
        console.log(textRead)
        
        fs.appendFile(asyncfilePath,"\nthis is line two",(err,addNewLine)=>{
            if(err) throw err
            console.log("new line added")
            fs.readFile(asyncfilePath,"utf8",(err,updateLine)=>{
                if(err) throw err
                console.log(updateLine)
            })
        })
    })
})
