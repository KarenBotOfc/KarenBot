const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const mimetype = require('mime-types')

const getBuffer = async (url, opcoes) => {
try {
opcoes ? opcoes : {}
const post = await axios({
method: "get",
url,
headers: {
    'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 
	'DNT': 1,
	'Upgrade-Insecure-Request': 1
},
...opcoes,
responseType: 'arraybuffer'
})
return post.data
} catch (erro) {
console.log(`Erro identificado: ${erro}`)
}
}
const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})
function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`;
};
const getExtension = async (type) => {
	return await mimetype.extension(type)
}
const banner = cfonts.render((`KAREN|BOT`), {
font: 'block',
color: 'white',
align: 'center',
colors: ["magenta","cyan"],
lineHeight: 3
});
module.exports = { getBuffer, fetchJson, getGroupAdmins, getRandom, getExtension, banner }