import express from 'express'
import * as saml from 'samlify'
import fs from 'fs'
import Parse from 'parse/node'

import generateSPMetaData from './samlXmls/sp_metadata'

const appId = process.env.APP_ID || 'parseServerId'
const masterKey = process.env.MASTER_KEY || 'parseServerId'
const serverURL = process.env.SERVER_URL || '127.0.0.1'

const loginCallbackUrl = process.env.LOGIN_CALLBACK_URL || ''
const logoutCallbackUrl = process.env.LOGOUT_CALLBACK_URL || ''

const serviceProviderKey = process.env.SERVICE_PROVIDER_KEY || ''
const idpMetadata = process.env.IDP_METADATA || ''

Parse.initialize(appId, null, masterKey)
Parse.serverURL = serverURL
const router = express.Router()

var sp = saml.ServiceProvider({
  privateKey: fs.readFileSync(serviceProviderKey),
  privateKeyPass: '',
  metadata: generateSPMetaData(loginCallbackUrl, logoutCallbackUrl)
})
var idp = saml.IdentityProvider({
  isAssertionEncrypted: false,
  metadata: fs.readFileSync(idpMetadata)
})

router.get(`/login`, (req, res) => {
  const { id, context } = sp.createLoginRequest(idp, 'redirect')
  res.redirect(context)
})

router.post(`/login/callback`, async (req, res, next) => {
  try {
    let parseResult = await sp.parseLoginResponse(idp, 'post', req)
    if (parseResult.extract.statusCode.includes('Success')) {
      // login server side call
      const params = {
        nameID: parseResult.extract.nameID,
        readableName: parseResult.extract.attributes['http://schemas.auth0.com/nickname']
      }
      const result = await Parse.Cloud.run('user_login', params, {
        useMasterKey: true
      })
      res.cookie('sesTok', result, {
        httpOnly: false,
        secure: false
      })
      res.redirect('/racmt4/auth')
    }
  } catch (error) {
    next(error)
    // res.redirect('/')
  }
})

router.post(`/logout`, async (req, res) => {
  let userNameID = req
  const { id, context } = sp.createLogoutRequest(idp, 'redirect', { logoutNameID: 'auth0|5c1ebc787b1c3e437a234bc6' })
  res.redirect(context)
})

router.post(`/logout/callback`, async (req, res) => {
  let parseResult = await sp.parseLogoutResponse(idp, 'post', req)
  console.log(parseResult)
})

export default router
