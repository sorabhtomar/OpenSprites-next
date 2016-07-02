/**
 * js/main.js
 * ----------
 * 
 * The main website script.
 */

const join = require('./join')
const share = require('./share')
const user = require('./user')
const timeago = require('./timeago')

if('/join' === window.location.pathname)
  join()

if('/share' === window.location.pathname)
  share()

if('/users' === window.location.pathname.substr(0, 6))
  user()

for (let el of document.querySelectorAll('.timeago')) {
  el.innerHTML = timeago(parseInt(el.innerHTML))
}
