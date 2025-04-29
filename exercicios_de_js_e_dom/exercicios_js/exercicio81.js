const nomes = ["gABRIEL", "aNA", "pEDRO", "rAFAEL", "rOMARIO", "iRINEU", "aMANDA", "hUGO", "bABU", "rOBERSVALDO"];

const modificarNomes = array => array.map(str => str.charAt(0).toUpperCase() + str.slice(1, -1) + str.slice(-1).toLowerCase());

console.log(modificarNomes(nomes));