import fs from 'fs'
import { string } from './thing'

let a: string = 'foo'
fs.promises.writeFile('./file', a)

console.log(string)
