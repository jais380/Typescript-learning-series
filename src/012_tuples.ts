

// tuples -> fixed length and fixed types


const userEntry : [string, number] = ['jude', 29] //tuple -> fixed length and types


//optional tuples

type ResponseRow = [status: number, message?: string]

const r11: ResponseRow = [200]
//const r22: ResponseRow = ['jude'] // wrong


// readonly tuples
const corners: readonly [number, number] = [0, 99]