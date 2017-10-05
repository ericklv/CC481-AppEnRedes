//Funcional

const seneca = require('seneca')()
const express = require('express')()
const web = require('seneca-web')
const cors = require('cors')

var Routes = [{
  prefix: '/products',
  pin: 'area:product,action:*',
  map: {list: {GET: true}}
}]
express.use(cors())
var config = {
  routes: Routes,
  adapter: require('seneca-web-adapter-express'),
  context: express,
  options: {parseBody: true}
}
seneca.client()
.use(web, config)
.ready(() => {
  var server = seneca.export('web/context')()
  server.listen('3000', () => {
    console.log('server momero started on: 3000')
  })
})
seneca.add({area: 'product', action: 'list'}, function (args, done) {
  try {
    //done(null, {bar: 'Bazinga!'});
    done(null, {bar: 'Bazinga!'+ invertir('Bazinga!')})
  } catch (err) {
    done(err, null)
  }
})

function invertir(cadena) {
  
  var x = cadena.length;
  var cadenaInvertida = "";
  while (x>=0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(x);
    x--;
  }
  cadenaInvertida=cadenaInvertida.toUpperCase();
  return cadenaInvertida;
}