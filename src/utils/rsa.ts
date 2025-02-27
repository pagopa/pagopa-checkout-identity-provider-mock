import crypto from "crypto";
import { JWK } from 'jose';


const privateKeyPem = `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgHFM4vBEVmXQYiTZaZguzZC6f4UnB1fyCp6bIwRRZk+6O4UxMSKM
56ADuDlowCE6DjF+Ta/gowJTDhSS2/ViMROdy71Kp4kfYOsrFMk5qjjqqS7ib5O/
ZMwUmFOW5HYcJYUEIr5wLvIUHvGVJpajij9Z0wCz8WY2AexBqkanJf0vAgMBAAEC
gYABxvb4VdoVFsOzWEWzwWgwEPzXFdmjo4RPIJfYBX7ZWU59tFvU8ujfNa+6Fs6M
tuBqHlURoTBtZOgfon4Yx0WFx+W3Kvh7ar2jjbs9XdhB5krdFxWfRbLBbK+/xI/O
RKvTl4GFtSViEkqQIUnTsIENuIf4zQRZBCKddvzK7hIrYQJBALSfK5k7ly4XZq0P
g6hKacqOqWwVuVlFV7Nqwz+2VBtOnTieiou8rxXEALWx8BU/jk2pPQmOuQ4uRk+A
1vP4oHsCQQCglWSygUPRJhUVusnHwX3OO4vzL23+BcYzEJBDXT3GiyK7TR1QQKav
gS+qLK/vubOkJXK8B4Yv4zABiZTWw2ndAkEApdD+UIVha+H10+jLQENYTamcpepn
pym+sqrPpnz3R75rHaCGpnRI9B1lXWiGdKtNM8SrkUuiXf9jcvdf3sggYwJAcbZY
gC8ZHtmgxKpoiJNzyr5P8/z6Ho9oMnDgN1Onkxijl46b22BsqIsKfa73RwJxOyNp
g8ywMOjn7a7HPu1R4QJAFSo2tTz3XhayO0fh7vQ0CHZfocOqoAQkKExmMdiHWcfn
OLoCdHanxmtYvRoQG+kv3FQHwS7Awt+kb/zXJkT8Xg==
-----END RSA PRIVATE KEY-----`;  

const publicKeyPem = `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHFM4vBEVmXQYiTZaZguzZC6f4Un
B1fyCp6bIwRRZk+6O4UxMSKM56ADuDlowCE6DjF+Ta/gowJTDhSS2/ViMROdy71K
p4kfYOsrFMk5qjjqqS7ib5O/ZMwUmFOW5HYcJYUEIr5wLvIUHvGVJpajij9Z0wCz
8WY2AexBqkanJf0vAgMBAAE=
-----END PUBLIC KEY-----`; 


// these keys are needed to simulate the rsa signature used by the ID provider API
const RSA_PUBLIC_KEY_MOCK = process.env.MOCK_PUBLIC_KEY || publicKeyPem;
const RSA_PRIVATE_KEY_MOCK = process.env.MOCK_PRIVATE_KEY || privateKeyPem;


// Convert PEM keys into JWK format
const privateKeyJwk = JWK.asKey(privateKeyPem, 'pem');
const publicKeyJwk = JWK.asKey(publicKeyPem, 'pem');

// Extract the public key components
const publicKey = publicKeyJwk.toJSON(true); // Get the public key components

// Construct the payload object
const jwkPayload = {
  keys: [
    {
      kty: "RSA",
      kid: "d47b2419-c8b2-4e89-8b99-2ad11756cf7f", 
      use: "sig",
      alg: "RS256",
      n: publicKey.n,
      e: publicKey.e, 
    }
  ]
};

export const getJwkPayload = ()=>{
    return jwkPayload;
}

// private key getter
export const GetPrivateKey = ()=>{
    return privateKeyJwk;
}

// public key getter
export const GetPublicKey = ()=>{
    return publicKeyJwk;
}