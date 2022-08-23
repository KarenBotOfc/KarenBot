const menu = (prefix, botName, emoji, emoji2, status, dev, pushname, base, baileys, sender) => {
  return `
                *${botName}* 
━━━━━━❯✷❮━━━━━━
┎┳━┅┅┄┈┄✧┈┈✦❖✦
┋┃${emoji} *Prefix:* 「 ${prefix} 」
┋┃${emoji} *Status:* ${status}
┋┃${emoji} *By:* ${dev} 
┋┃${emoji} *User:* ${pushname}
┋┃${emoji} *Base:* ${base}
┋┃${emoji} *Baileys:* ${baileys}
┋┖━┅┅┄┈┄✧┈┈✦❖✦
┋${"\u200B".repeat(4000)}
┖┳━┅┅┄┈┄✧┈┈✦❖✦
┎┫ *_《 DIVERSÃO 》_*
┋┣━━━━━━━
┋┃${emoji2} *${prefix}sticker*
┋┃> Faz fig marcando a img
┋┃${emoji2} *${prefix}rankgay*
┋┃> Ranking aleatório
┋┃${emoji2} *${prefix}rankcorno*
┋┃> Ranking aleatório
┋┃${emoji2} *${prefix}rankhetero*
┋┃> Ranking aleatório
┋┃${emoji2} *${prefix}dado*
┋┃> Comando de dado
┋┃${emoji2} *${prefix}cassino*
┋┃> Jogo do cassino
┋┖━┅┅┄┈┄✧┈┈✦❖✦
┋
┖┳━┅┅┄┈┄✧┈┈✦❖✦
┎┫ *_《 GRUPOS 》_*
┋┣━━━━━━━
┋┃${emoji2} *${prefix}marcar* (texto)
┋┃> Marca todos do grupo
┋┃${emoji2} *${prefix}promover* (@)
┋┃> Promove o membro a Adm
┋┃${emoji2} *${prefix}rebaixar* (@)
┋┃> Rebaixa a membro comum
┋┃${emoji2} *${prefix}add* (número)
┋┃> Adiciona ctt ao grupo
┋┃${emoji2} *${prefix}banir* (@)
┋┃> Bane a pessoa marcada
┋┖━┅┅┄┈┄✧┈┈✦❖✦
┋
┖┳━┅┅┄┈┄✧┈┈✦❖✦
┎┫ *_《 OUTROS 》_*
┋┣━━━━━━━
┋┃${emoji2} *${prefix}ping*
┋┃> Velocidade de resposta
┋┃${emoji2} *${prefix}dono*
┋┃> Dono do Bot
┋┃${emoji2} *${prefix}criador*
┋┃> Criador do Bot
┋┃${emoji2} *${prefix}tagme*
┋┃> Marca o usuário
┋┖━┅┅┄┈┄✧┈┈✦❖✦
┋
┖┳━┅┅┄┈┄✧┈┈✦❖✦
┎┫ *_《 DONO 》_*
┋┣━━━━━━━
┋┃${emoji2} *${prefix}adddono* (@)
┋┃> Adiciona o ctt como dono
┋┃${emoji2} *${prefix}deldono* (@)
┋┃> Remove o ctt como dono
┋┃${emoji2} *${prefix}addpremium* (@)
┋┃> O ctt vira premium no Bot
┋┃${emoji2} *${prefix}delpremium* (@)
┋┃> Remove o ctt de premium
┋┃${emoji2} *${prefix}donolist*
┋┃> Lista dos Donos
┋┃${emoji2} *${prefix}premiumlist*
┋┃> Lista dos Premiuns
┋┃${emoji2} *${prefix}execut (command)* 
┋┃> Execute code
┋┃${emoji2} *${prefix}reiniciar* 
┋┃> Reinicia o Bot
┖┻━┅┅┄┈┄✧┈┈✦❖✦`
}
exports.menu = menu