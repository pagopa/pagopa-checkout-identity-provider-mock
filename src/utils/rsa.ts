const jose = require('jose');

/**
 * 
 * ORIGINAL KEYS IN PKCS #1 FORMAT, the JOSE library needs them in PKCS #8
 * format. The PKCS #1 version is pasted here for future need of debugging.
 * 
 

PKCS #8 

-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAnshUNhP3pK/HPWgDtlkN4E492lOfTjOv6z+96V0w+2/E11Ly
RxWO4Loqcrn3TQyWefRDJPc49sq8V/uHnpUoiTF23YK6dsEGSFSv6X33Mu3/BqG1
Sy8+2KC7/4nGzqgjkd1XgqBrf+ILVHqEp6/pa8f3w5VL4Tokzz79/NWqVVBWNGUY
tTglpfak/XM2kDhsUK+YLInbhpmJ++TYfjKLJ5+5tWR3eTr0z+Fm0beeW5w6EmTS
oG8n1rzVWsDQS6YGCH/iDPAMuXnmUnVXUZQN81OKfwavTO7/0rbi1nznXPrzZndG
AQKwmAS28oYFTh4mnjbk38KDTXeW/ySipgJ2/wIDAQABAoIBABoP3aqmql4wr+5H
VVynz1xC22orkZlfaH+fjcdxEWoj1VZWegfq5PHD/NWp6oqOB2DrE95MaeAwNKvo
UEFaUDX8lXsUSxDU6/gRVnJnx5xnbhWjk0NM9O7PqyvtbGFdPcFiaEu7kwmBi8SI
+58eg5y6TNOgfLzyMzqFJ2FJnNS1wSqzYG2I/LtyiKMCh5rCRBebsaBrqxa4wyvj
/rRLa9jVGAY/+IGW53mTSHRvlR4kojXNC5YdwdZ+LleFpWRnVfIgcpPuGc36e/5+
gUypX5C2zbgsGnQugHpvVCwZ2OjtWOCQaaOPVwO6lEdVFFagLdQXAe2pvrF3qCBc
GfZfUUECgYEA5+ofeLjX9n0Hg9ikWK8Kg9iFxVvgFN60IbTK0OAbozy2YC3h+AIa
isA1yl1jx6pkaQb34dA9fsONbN0L204JfAeO22Z09J0eWvcxM+dqi9CC0RO+x+3j
YnpngfgjEBYq52qWdsQKskp2uEQ2tAO21qUIl243CZZD36rPN1n2yeECgYEAr0Xb
OA9hfJ0Qcf989ivES0iYaMpNTo8+lSt904oktKZTZih7jfgUqAVfExitwoSHy3cn
s6W6t4PAXlYPFXNZUuxMg6eVTXcL8G3XQ+tfKyBzVC5WVaWDftxTH8UBT3bU9DYb
KJQGI8isewGSdfiYkHwNb7idYyA3XfEo+tB0HN8CgYBGH1x0vC9QsG1dSFwpFIQx
aX7JNgaDSPNeXbQVhC3XJbxfSIBS5Q/xdDzPe314GeVSfHDnLnfppGdWy1+SZ/4m
KoLfhBNJA1jyWFvgPdDRhbKIVVgSS7O9SxWRDt5LNuiyIGBueMhjMHDFNprzw0u9
ixkV8JVjqLPNJXCSY/ljAQKBgBUzNuPeAGWpPc78HypLeu+8NSsfpSAmdWRnoU2P
/QaYw6esp90xL5ZvJ+PQbVwE2cQDgprZJe+CkScX87UdgaVlDZAzGf0HtDr9njcJ
5jX6M9jvzeOIJJKYpblHA/SPpAxx6vEKjn+Pi0VJmGSKkDGRv7JOu0K9J9VGETXd
Nt4zAoGALWSFH+/UxVf+6UMPYGleMrSLaxNn9h00Y70h3NHeTEaJxzBJXLg31Q27
oL/S7LGR6/Q5oaA1mU466yqZPtgTXqHg4NDROj8wj0HNs1uvZ8Wag5K/ys+2k+J4
cketNWLE+2srrDy+mYzKQH/jfk5Mmz0NcpThDyNDwb9ZGEFjH74=
-----END RSA PRIVATE KEY-----



PKCS #1

-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnshUNhP3pK/HPWgDtlkN
4E492lOfTjOv6z+96V0w+2/E11LyRxWO4Loqcrn3TQyWefRDJPc49sq8V/uHnpUo
iTF23YK6dsEGSFSv6X33Mu3/BqG1Sy8+2KC7/4nGzqgjkd1XgqBrf+ILVHqEp6/p
a8f3w5VL4Tokzz79/NWqVVBWNGUYtTglpfak/XM2kDhsUK+YLInbhpmJ++TYfjKL
J5+5tWR3eTr0z+Fm0beeW5w6EmTSoG8n1rzVWsDQS6YGCH/iDPAMuXnmUnVXUZQN
81OKfwavTO7/0rbi1nznXPrzZndGAQKwmAS28oYFTh4mnjbk38KDTXeW/ySipgJ2
/wIDAQAB
-----END PUBLIC KEY-----

 * 
 */


const privateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCeyFQ2E/ekr8c9
aAO2WQ3gTj3aU59OM6/rP73pXTD7b8TXUvJHFY7guipyufdNDJZ59EMk9zj2yrxX
+4eelSiJMXbdgrp2wQZIVK/pffcy7f8GobVLLz7YoLv/icbOqCOR3VeCoGt/4gtU
eoSnr+lrx/fDlUvhOiTPPv381apVUFY0ZRi1OCWl9qT9czaQOGxQr5gsiduGmYn7
5Nh+Mosnn7m1ZHd5OvTP4WbRt55bnDoSZNKgbyfWvNVawNBLpgYIf+IM8Ay5eeZS
dVdRlA3zU4p/Bq9M7v/StuLWfOdc+vNmd0YBArCYBLbyhgVOHiaeNuTfwoNNd5b/
JKKmAnb/AgMBAAECggEAGg/dqqaqXjCv7kdVXKfPXELbaiuRmV9of5+Nx3ERaiPV
VlZ6B+rk8cP81anqio4HYOsT3kxp4DA0q+hQQVpQNfyVexRLENTr+BFWcmfHnGdu
FaOTQ0z07s+rK+1sYV09wWJoS7uTCYGLxIj7nx6DnLpM06B8vPIzOoUnYUmc1LXB
KrNgbYj8u3KIowKHmsJEF5uxoGurFrjDK+P+tEtr2NUYBj/4gZbneZNIdG+VHiSi
Nc0Llh3B1n4uV4WlZGdV8iByk+4Zzfp7/n6BTKlfkLbNuCwadC6Aem9ULBnY6O1Y
4JBpo49XA7qUR1UUVqAt1BcB7am+sXeoIFwZ9l9RQQKBgQDn6h94uNf2fQeD2KRY
rwqD2IXFW+AU3rQhtMrQ4BujPLZgLeH4AhqKwDXKXWPHqmRpBvfh0D1+w41s3Qvb
Tgl8B47bZnT0nR5a9zEz52qL0ILRE77H7eNiemeB+CMQFirnapZ2xAqySna4RDa0
A7bWpQiXbjcJlkPfqs83WfbJ4QKBgQCvRds4D2F8nRBx/3z2K8RLSJhoyk1Ojz6V
K33TiiS0plNmKHuN+BSoBV8TGK3ChIfLdyezpbq3g8BeVg8Vc1lS7EyDp5VNdwvw
bddD618rIHNULlZVpYN+3FMfxQFPdtT0NhsolAYjyKx7AZJ1+JiQfA1vuJ1jIDdd
8Sj60HQc3wKBgEYfXHS8L1CwbV1IXCkUhDFpfsk2BoNI815dtBWELdclvF9IgFLl
D/F0PM97fXgZ5VJ8cOcud+mkZ1bLX5Jn/iYqgt+EE0kDWPJYW+A90NGFsohVWBJL
s71LFZEO3ks26LIgYG54yGMwcMU2mvPDS72LGRXwlWOos80lcJJj+WMBAoGAFTM2
494AZak9zvwfKkt677w1Kx+lICZ1ZGehTY/9BpjDp6yn3TEvlm8n49BtXATZxAOC
mtkl74KRJxfztR2BpWUNkDMZ/Qe0Ov2eNwnmNfoz2O/N44gkkpiluUcD9I+kDHHq
8QqOf4+LRUmYZIqQMZG/sk67Qr0n1UYRNd023jMCgYAtZIUf79TFV/7pQw9gaV4y
tItrE2f2HTRjvSHc0d5MRonHMElcuDfVDbugv9LssZHr9DmhoDWZTjrrKpk+2BNe
oeDg0NE6PzCPQc2zW69nxZqDkr/Kz7aT4nhyR601YsT7ayusPL6ZjMpAf+N+Tkyb
PQ1ylOEPI0PBv1kYQWMfvg==
-----END PRIVATE KEY-----`

const publicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnshUNhP3pK/HPWgDtlkN
4E492lOfTjOv6z+96V0w+2/E11LyRxWO4Loqcrn3TQyWefRDJPc49sq8V/uHnpUo
iTF23YK6dsEGSFSv6X33Mu3/BqG1Sy8+2KC7/4nGzqgjkd1XgqBrf+ILVHqEp6/p
a8f3w5VL4Tokzz79/NWqVVBWNGUYtTglpfak/XM2kDhsUK+YLInbhpmJ++TYfjKL
J5+5tWR3eTr0z+Fm0beeW5w6EmTSoG8n1rzVWsDQS6YGCH/iDPAMuXnmUnVXUZQN
81OKfwavTO7/0rbi1nznXPrzZndGAQKwmAS28oYFTh4mnjbk38KDTXeW/ySipgJ2
/wIDAQAB
-----END PUBLIC KEY-----`; 


// these keys are needed to simulate the rsa signature used by the ID provider API
const RSA_PUBLIC_KEY_MOCK = process.env.MOCK_PUBLIC_KEY || publicKeyPem;
const RSA_PRIVATE_KEY_MOCK = process.env.MOCK_PRIVATE_KEY || privateKeyPem;


export const getJwkPayload = ()=>{

    // Extract the public key components
    const publicKey = jose.exportJWK(RSA_PUBLIC_KEY_MOCK);

    // Construct the payload object
    const jwkPayload = {
        keys: [
        {
            kty: "RSA",
            kid: "d47b2419-c8b2-4e89-8b99-2ad11756cf72", 
            use: "sig",
            alg: "RS256",
            n: publicKey.n,
            e: publicKey.e, 
        }
        ]
    };

    return jwkPayload;
}

// private key getter
export const GetPrivateKey = ()=>{
    return RSA_PRIVATE_KEY_MOCK;
}

// public key getter
export const GetPublicKey = ()=>{
    return RSA_PUBLIC_KEY_MOCK;
}

export const signJwtToken = async (nonce: string)=>{

    const alg = 'RS256'
    const privateKey = await jose.importPKCS8(privateKeyPem, alg)

    return await new jose.SignJWT({ 'claim': nonce })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setIssuer('pagopa-mock-id-provider')
        .setAudience('pagopa-mock-user')
        .setExpirationTime('1h')
        .sign(privateKey)
}