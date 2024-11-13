/* eslint-disable @typescript-eslint/no-unused-vars */
// Génération d'une chaîne aléatoire pour le code_verifier
const generateRandomString = (length) => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

const codeVerifier = generateRandomString(64);

// Fonction de hachage SHA-256
const sha256 = async (plain) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest("SHA-256", data);
};

// Encodage en base64 pour le code_challenge
const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};

// Création du code_challenge à partir du code_verifier
const hashed = await sha256(codeVerifier);
const codeChallenge = base64encode(hashed);

// Informations d'authentification
const clientId = "cdfb326432e14173b277c16587699172";
const redirectUri = "http://localhost:3000/users";
const scope = "user-read-private user-read-email";

// URL d'autorisation
const authUrl = new URL("https://accounts.spotify.com/authorize");

// Enregistrement du code_verifier pour une utilisation future
window.localStorage.setItem("code_verifier", codeVerifier);

// Paramètres de l'URL de l'autorisation
const params = {
  response_type: "code",
  client_id: clientId,
  scope,
  code_challenge_method: "S256",
  code_challenge: codeChallenge,
  redirect_uri: redirectUri,
};

// Redirection vers l'URL d'autorisation
authUrl.search = new URLSearchParams(params).toString();
window.location.href = authUrl.toString();

// Récupération du code d'autorisation depuis l'URL après redirection
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get("code");

// Fonction pour récupérer le token
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getToken = async (code) => {
  const codeVerifier = localStorage.getItem("code_verifier");

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  };

  const tokenUrl = "https://accounts.spotify.com/api/token"; // Assurez-vous que l'URL est correcte
  const response = await fetch(tokenUrl, payload);
  const data = await response.json();

  localStorage.setItem("access_token", data.access_token);
};

// Fonction pour récupérer le profil utilisateur
async function getProfile() {
  const accessToken = localStorage.getItem("access_token");

  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });

  const data = await response.json();
  console.log(data); // Log des données du profil utilisateur pour vérification
}


PUT 
   https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n \
   'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z' 
   'Content-Type: application/json' 
  '{
    "name": "Updated Playlist Name",
    "description": "Updated playlist description",
    "public": false
}'