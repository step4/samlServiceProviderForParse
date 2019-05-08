export default function generateSPMetaData(loginUrl, logoutUrl) {
  return `
<md:EntityDescriptor
  xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" validUntil="2018-11-21T10:54:22Z" cacheDuration="PT604800S" entityID="step4.de">
  <md:SPSSODescriptor AuthnRequestsSigned="false" WantAssertionsSigned="false" protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
    <md:KeyDescriptor use="signing">
      <ds:KeyInfo
        xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
        <ds:X509Data>
          <ds:X509Certificate>MIIDazCCAlOgAwIBAgIJAPF9jb+qqlr1MA0GCSqGSIb3DQEBCwUAMEwxCzAJBgNVBAYTAkRFMQwwCgYDVQQIDANybHAxDzANBgNVBAcMBnJhbWdlbjEOMAwGA1UECgwFc3RlcDQxDjAMBgNVBAMMBXN0ZXA0MB4XDTE4MTExMzA5MjAxMloXDTE5MTExMzA5MjAxMlowTDELMAkGA1UEBhMCREUxDDAKBgNVBAgMA3JscDEPMA0GA1UEBwwGcmFtZ2VuMQ4wDAYDVQQKDAVzdGVwNDEOMAwGA1UEAwwFc3RlcDQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQChxFzD7OBfDc/f9NPrBNmYHs8Lw6Mr1oOEEBDYywAhet0BmoiZ1Qtk7XiLjWtVaM4AM1nRXcsvVSi3ADbP+j8ygCYbTVoKxYgBcUPtQlNNhlhKQKMevQ7WPZ6ErWvCjMDQVwmimxFziekGUp89e6IQrgwCykOIipZTQgUxQgeCDYAyeEMzzfgRqxtxIz0b01w9gLlVcPtK3mHRSbjWeFSFNbGktP/Z45OP81Ivsn+VGi2CC6XF7b7PV0BZeuWNcPtFs+r8AxhLoAsHc1+Mq4hXHcwsTlMuA1N8wmbDN2YVx/2HBTguRjD5JvkqT6CftdFiDQmyuSyr+U6uoov3xYFBAgMBAAGjUDBOMB0GA1UdDgQWBBSa7MqVDj72+ir5hgAfs3W1rWWRwzAfBgNVHSMEGDAWgBSa7MqVDj72+ir5hgAfs3W1rWWRwzAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQCYBF9BQ2UgHvSYe1R0QzcGAcejDatQ8cnW20mjMqrvF9lXlx99fi7N9lWqcyJMibIsIslQbyjViBY8VRBpUZ13lrUcPXkIkR+N0cpBcTWiXnB+zbL/hk606Amhd+aQnGB28qpmBRxrqnP2E+okKWB2roANXpBDN4/4v6QNjsbIgXDradmOcU8ZNz2TXxxjfQ79TmMqbM5NKIF+VQq+tnU4jOSTihqvr3Mox32t/4h3SkSceldo+VfVLtmh4m5KAXQjrJsSRqY8bf5aAZgoEPNFtfqDslLOFve+xuQPlclnNNzvKZ4lqI5j3vcHeLKm7cP9NXtVbCInBuirO1kZZXWY</ds:X509Certificate>
        </ds:X509Data>
      </ds:KeyInfo>
    </md:KeyDescriptor>
    <md:KeyDescriptor use="encryption">
      <ds:KeyInfo
        xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
        <ds:X509Data>
          <ds:X509Certificate>MIIDazCCAlOgAwIBAgIJAPF9jb+qqlr1MA0GCSqGSIb3DQEBCwUAMEwxCzAJBgNVBAYTAkRFMQwwCgYDVQQIDANybHAxDzANBgNVBAcMBnJhbWdlbjEOMAwGA1UECgwFc3RlcDQxDjAMBgNVBAMMBXN0ZXA0MB4XDTE4MTExMzA5MjAxMloXDTE5MTExMzA5MjAxMlowTDELMAkGA1UEBhMCREUxDDAKBgNVBAgMA3JscDEPMA0GA1UEBwwGcmFtZ2VuMQ4wDAYDVQQKDAVzdGVwNDEOMAwGA1UEAwwFc3RlcDQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQChxFzD7OBfDc/f9NPrBNmYHs8Lw6Mr1oOEEBDYywAhet0BmoiZ1Qtk7XiLjWtVaM4AM1nRXcsvVSi3ADbP+j8ygCYbTVoKxYgBcUPtQlNNhlhKQKMevQ7WPZ6ErWvCjMDQVwmimxFziekGUp89e6IQrgwCykOIipZTQgUxQgeCDYAyeEMzzfgRqxtxIz0b01w9gLlVcPtK3mHRSbjWeFSFNbGktP/Z45OP81Ivsn+VGi2CC6XF7b7PV0BZeuWNcPtFs+r8AxhLoAsHc1+Mq4hXHcwsTlMuA1N8wmbDN2YVx/2HBTguRjD5JvkqT6CftdFiDQmyuSyr+U6uoov3xYFBAgMBAAGjUDBOMB0GA1UdDgQWBBSa7MqVDj72+ir5hgAfs3W1rWWRwzAfBgNVHSMEGDAWgBSa7MqVDj72+ir5hgAfs3W1rWWRwzAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQCYBF9BQ2UgHvSYe1R0QzcGAcejDatQ8cnW20mjMqrvF9lXlx99fi7N9lWqcyJMibIsIslQbyjViBY8VRBpUZ13lrUcPXkIkR+N0cpBcTWiXnB+zbL/hk606Amhd+aQnGB28qpmBRxrqnP2E+okKWB2roANXpBDN4/4v6QNjsbIgXDradmOcU8ZNz2TXxxjfQ79TmMqbM5NKIF+VQq+tnU4jOSTihqvr3Mox32t/4h3SkSceldo+VfVLtmh4m5KAXQjrJsSRqY8bf5aAZgoEPNFtfqDslLOFve+xuQPlclnNNzvKZ4lqI5j3vcHeLKm7cP9NXtVbCInBuirO1kZZXWY</ds:X509Certificate>
        </ds:X509Data>
      </ds:KeyInfo>
    </md:KeyDescriptor>
    <md:NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified</md:NameIDFormat>

    <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="${loginUrl}" index="1"/>
    <md:SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect " Location="${logoutUrl}" />

  </md:SPSSODescriptor>
</md:EntityDescriptor>
`
}
