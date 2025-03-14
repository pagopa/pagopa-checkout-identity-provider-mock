import { RequestHandler } from "express";
import { setInMemoryState } from "../utils/inMemoryState";
import { signJwtToken } from "../utils/rsa";
import { generateAuthCode } from "./initMockHandler";


export const getLoginPage: RequestHandler = async (req, res) => {


    const { nonce, redirect_uri, state } = req.query;

    if (!nonce || !redirect_uri || !state) {

        res.status(400).send("Missing nonce or redirect_uri");

    } else {

        const jwt = await signJwtToken(nonce as string);
        const randomAuthCode = generateAuthCode();
        setInMemoryState(randomAuthCode, jwt);
        
        const checkout_redirect_uri =`${redirect_uri}?code=${randomAuthCode}&state=${state}`;
    
        res.setHeader("Content-Type", "text/html");
        res.status(200).send(`
            <html lang="it">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simulazione Login SPID</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #f4f4f4;
                }
                .container {
                    text-align: center;
                    padding: 20px;
                    background-color: white;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: #4CAF50;
                }
                p {
                    color: #555;
                }
                .redirect {
                    margin-top: 20px;
                    font-size: 16px;
                    color: #888;
                }
            </style>
            </head>
            <body>
                <div class="container">
                <h1>Simulazione di una login con SPID</h1>
                <p>A breve sarai reindirizzato su checkout.</p>
                <div class="redirect">Se non vieni reindirizzato automaticamente, <a href="/checkout">clicca qui</a>.</div>
                </div>
                <script>
                setTimeout(function() {
                    window.location.href = '${checkout_redirect_uri}';
                }, 5000);
                </script>
            </body>
            </html>
        `);
    }
};


