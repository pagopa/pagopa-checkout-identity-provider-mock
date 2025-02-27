# Node Mock API Server for Identity Providers

This project is a **mock API server** built with Node.js, designed to simulate interactions with **Identity Providers** (IdPs) for testing and development purposes. It provides a few common endpoints that are used in OpenID Connect (OIDC) and OAuth 2.0 flows. This allows you to simulate the behavior of an Identity Provider without needing a real server, making it useful for testing, integration, and development.

## API Endpoints

The following endpoints are supported:

### 1. `POST /initMock`
Simulates the initialization of a mock identity provider.

#### Request Body:
```json
{
  "client_id": "example-client-id",
  "client_secret": "example-client-secret",
  "redirect_uri": "https://example.com/callback"
}
```

#### Response:
```json
{
  "status": "success",
  "message": "Mock Identity Provider initialized successfully."
}
```

### 2. `GET /oidc/keys`
Simulates the retrieval of public keys (often used for JWT signature verification).

#### Response:
```json
{
  "keys": [
    {
      "kty": "RSA",
      "kid": "example-key-id",
      "use": "sig",
      "alg": "RS256",
      "n": "example-modulus",
      "e": "AQAB"
    }
  ]
}
```

### 3. `POST /oidc/token`
Simulates the process of exchanging authorization code or credentials for an access token. This endpoint supports the **Authorization Code** and **Client Credentials** grant types.

#### Request Body:
```json
{
  "grant_type": "authorization_code",
  "code": "example-auth-code",
  "redirect_uri": "https://example.com/callback"
}
```

OR

```json
{
  "grant_type": "client_credentials",
  "client_id": "example-client-id",
  "client_secret": "example-client-secret"
}
```

#### Response:
```json
{
  "access_token": "example-access-token",
  "token_type": "bearer",
  "expires_in": 3600
}
```

## Features

- **Simple Setup**: Get the mock API server running with minimal configuration.
- **Simulate Identity Provider Interactions**: Mock common Identity Provider (IdP) flows for testing and development.
- **Mock Keys & Tokens**: Simulate key and token responses used in OIDC/OAuth2.0 flows.
- **Extendable**: Easily extend the API to add more mock endpoints for other Identity Provider features.
- **No Real Identity Provider Required**: Useful for testing your integrations with identity providers without needing real authentication servers.

## Installation

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16.x or higher)
- **Yarn** (or npm)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mock-identity-provider.git
cd mock-identity-provider
```

### 2. Install Dependencies

Using Yarn:
```bash
yarn install
```

Or using npm:
```bash
npm install
```

### 3. Run the Server

To start the mock API server, run:

Using Yarn:
```bash
yarn start
```

Or using npm:
```bash
npm start
```

By default, the server will run on `http://localhost:3000`.

### 4. API Documentation

Once the server is running, you can interact with the mock endpoints using tools like **Postman**, **cURL**, or any HTTP client of your choice.

## Configuration

The mock API server can be easily configured via environment variables in the `.env` file (you can create it from the `.env.example` file provided).

```env
PORT=3000
CLIENT_ID=example-client-id
CLIENT_SECRET=example-client-secret
REDIRECT_URI=https://example.com/callback
```

## Testing the Endpoints

### 1. Test `/initMock`
To initialize the mock identity provider, send a `POST` request to `http://localhost:3000/initMock` with the following JSON body:

```json
{
  "client_id": "your-client-id",
  "client_secret": "your-client-secret",
  "redirect_uri": "your-redirect-uri"
}
```

### 2. Test `/oidc/keys`
To fetch the mock public keys, send a `GET` request to `http://localhost:3000/oidc/keys`.

### 3. Test `/oidc/token`
To simulate getting an access token, send a `POST` request to `http://localhost:3000/oidc/token` with the appropriate JSON body depending on your grant type.

```json
{
  "grant_type": "authorization_code",
  "code": "your-auth-code",
  "redirect_uri": "your-redirect-uri"
}
```

OR

```json
{
  "grant_type": "client_credentials",
  "client_id": "your-client-id",
  "client_secret": "your-client-secret"
}
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and create a pull request. Make sure to follow these guidelines:

- Ensure the code is well-documented.
- Write tests for any new functionality.
- Follow standard coding conventions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Example Usage

Here's an example of how to test the mock server using `cURL`:

1. **POST to `/initMock`**:

```bash
curl -X POST http://localhost:3000/initMock -H "Content-Type: application/json" -d '{
  "client_id": "test-client-id",
  "client_secret": "test-client-secret",
  "redirect_uri": "http://localhost/callback"
}'
```

2. **GET `/oidc/keys`**:

```bash
curl http://localhost:3000/oidc/keys
```

3. **POST to `/oidc/token`** (with `authorization_code` grant):

```bash
curl -X POST http://localhost:3000/oidc/token -H "Content-Type: application/json" -d '{
  "grant_type": "authorization_code",
  "code": "test-auth-code",
  "redirect_uri": "http://localhost/callback"
}'
```
