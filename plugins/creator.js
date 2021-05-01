let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089',  'Nurutomo', m)
  this.sendContact(m.chat, '+1 8292097057', '+1 829 209 7057','+1 4254419777', '+1 425 441 9777', m)
}
handler.help = ['owner', 'creador']
handler.tags = ['info']

handler.command = /^(owner|creador)$/i

module.exports = handler
