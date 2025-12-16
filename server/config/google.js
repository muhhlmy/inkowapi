if (process.env.NODE_ENV !== "production") require("dotenv").config();

const { google } = require("googleapis");

// Initialize OAuth2 client with your credentials
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIEN_ID,
  process.env.GOOGLE_CLIEN_SECRET
);

// Define Google Drive scope
const scopes = [
  "https://www.googleapis.com/auth/drive.file", // Scope for Google Drive file access
];

// Generate a URL that asks permissions for Google Drive
const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  //   access_type: "offline",

  // Scope for Google Drive API
  scope: scopes,
});

// console.log("Authorize this app by visiting this URL:", url);
module.exports = oauth2Client;
