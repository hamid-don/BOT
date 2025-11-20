const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// 🔧 Utility Function
const stringToBool = (str) => str.toLowerCase() === 'true';

// ⚡ ARSLAN-MD CONFIGURATION - ULTRA STYLISH WITH DESCRIPTIONS
module.exports = {
    // 🔐 SESSION & AUTHENTICATION
    SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0VEVndaNGNZVDVIdTN0eWF1cC9mOG5PaU5qUFgxcjk0ZFAzTGx6a2Eybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWtkcXpSNEh5VUFJUkhDSmhpWnA1TkpTTXFROVZkRS9HSUFPOEU2N21CRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSGJzK29ZN3hBUTZUZUo2TDhhYkhvWThNT0dFR0VMT0hRTkR4WTIwSzNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTURnNEFQcDBvQS91dlpXNnE1OU02S2ZKQWhEUnJzUHVtdy9lVFpEa1hNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklFUXdiUlM2TFZWa3p2dnlpMjJXQVQwYUU2TXpwN3B2VEluWGlicFY4MlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlwUmYrVVJEcUEwWkFBaFA2VXZDem9Zek1nNjFXSyt3aW5qVmd0Q3psQzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU1mS1ZQaEtlM0lzckdwVGtidHJoRnZ2VGViYktpaWRrcnVBWDQ3bE5YND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHNkMVU2VVNDbTV1d0FORTY3b3h5UnRhc0x3cWdGV3liY2IxRWIvR0ltST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtmcGQwSGp6Q2x4UE5xTmIrekg4M3BUNUFKZVFkSHFpWkg1T0ltWE9mMld0MXltNXNrYlZwc3R1bXlqOEo3RFVsRi9Cc256YzFkTHQ3Y0hJb08wd0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY5LCJhZHZTZWNyZXRLZXkiOiJkWUhYL04yYmhUd3hHZUs4MVFLU1ZxdEVjZmFGbVordisrN2U2Tnh3S3Y4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaeXJ2TWpOQ1FaZW4zTEtpcVBOdU5nIiwicGhvbmVJZCI6IjU5ZDdhOTUzLTdkYzEtNGEwMC1iODE4LTA5NjgwNWM3YjQzMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyaG1GemdBeWlRNzhyVW9POUh1cU1NL3J2akk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXgyN1RiQjQzM0t0KytLM3VtTUxjZUFiV3lNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZXMTdUTjlSIiwibWUiOnsiaWQiOiI5MjMwODQ1Njc4NTM6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4qS58JOGqfCThILqr61IIFLijq/qr63MvfCThqpcbuKKuVxu4oq5XG7iirlcbuKKuVxu4oq5XG7iirlcbuKKuVxu4oq5XG7iirlcbuKKuVxu4oq5XG7iirlcbvCThqnwlqSN8JOGqiIsImxpZCI6IjE3NjgzMjk4MDczNDA4MzoxMEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05iNytvTUhFSWpxK3NnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZiejR0Y1MxU0VqVU1CdW85ak9YL2c1NlZxOTJwYWJGUkRlbmo3YzUxeFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InpOZklQK3l0YjNaSG1rbHhGQXk0WmIrRDc3TWFGRkNFS0M4ZkJGQTZ1dEFNbS9mWVBSbEhqVFBnQkNYQlZLeVVmSVIzQjR4K09kbGRxNUk0UDVrVERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1dlV1clQrNVVTeUN2VWUveFRCZDB5V3dQTXBJQ1VMd2JzMXdqZlhpcGNseElMQ012U1g2Vmt4QStCSkV0Ty9UVVAyeVNQSHNnR3grSURHeGZMMnZCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA4NDU2Nzg1MzoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYMjgrTFhFdFVoSTFEQWJxUFl6bC80T2VsYXZkcVdteFVRM3A0KzNPZGNWIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJRFFnRiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjM2MjAxMjAsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSJ9", // Your WhatsApp session ID - keep this secure!

    // 🎯 SECURITY & MODERATION
    DELETE_LINKS: stringToBool(process.env.DELETE_LINKS || "true"), // Auto delete non-whitelisted links
    LINK_WHITELIST: "youtube.com,github.com", // Allowed domains - separate with commas
    LINK_WARN_LIMIT: 3, // Number of warnings before taking action
    LINK_ACTION: "kick", // Action for link violators: "kick", "mute", or "none"
    ANTI_BAD: stringToBool(process.env.ANTI_BAD || "false"), // Block bad words in group
    ANTI_LINK: stringToBool(process.env.ANTI_LINK || "true"), // Prevent sharing links in group
    ANTI_BOT: stringToBool(process.env.ANTI_BOT || "true"), // Block other bots from group
    ANTI_DELETE: stringToBool(process.env.ANTI_DELETE || "true"), // Prevent message deletion in group
    ANTI_VV: stringToBool(process.env.ANTI_VV || "true"), // Anti-view once feature
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // Path for anti-delete logs

    // 🤖 BOT CORE FEATURES
    PREFIX: process.env.PREFIX || ".", // Bot command prefix (e.g., .,!,/,#)
    BOT_NAME: process.env.BOT_NAME || "✦[ᴀʀꜱʟᴀɴ-ᴍᴅ]✦", // Your bot's display name
    MODE: process.env.MODE || "public", // Bot mode: "public" or "private"
    chatbotEnabled: stringToBool(process.env.chatbotEnabled || "true"), // Enable AI chatbot feature
    version: process.env.version || "4.0.0", // Bot version number

    // 💬 MESSAGE HANDLING
    READ_MESSAGE: stringToBool(process.env.READ_MESSAGE || "false"), // Mark messages as read automatically
    READ_CMD: stringToBool(process.env.READ_CMD || "false"), // Read command messages only
    AUTO_REPLY: stringToBool(process.env.AUTO_REPLY || "false"), // Auto-reply to messages

    // 🎭 REACTIONS & INTERACTIONS
    CUSTOM_REACT: stringToBool(process.env.CUSTOM_REACT || "false"), // Enable custom reactions
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍", // Emojis for custom reactions
    AUTO_REACT: stringToBool(process.env.AUTO_REACT || "false"), // Auto-react to messages
    HEART_REACT: stringToBool(process.env.HEART_REACT || "false"), // Auto-heart react to messages
    OWNER_REACT: stringToBool(process.env.OWNER_REACT || "true"), // React to owner's messages

    // 👑 OWNER SETTINGS
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923084567853", // Bot owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || "✦H R✦", // Bot owner's display name
    king: process.env.king || "ᴀʀꜱʟᴀɴ-ᴍᴅ", // Bot king/developer name
    DEV: process.env.DEV || "923084567853", // Developer contact number

    // 🎨 MEDIA & APPEARANCE
    STICKER_NAME: process.env.STICKER_NAME || "✦ᴀʀꜱʟᴀɴ-ᴍᴅ✦", // Default sticker pack name
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/16i1l7.jpg", // Alive command image URL
    DESCRIPTION: process.env.DESCRIPTION || "> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʀꜱʟᴀɴ-ᴍᴅ ᴛᴇᴄʜ 🇵🇰*", // Bot description

    // 📱 STATUS FEATURES
    AUTO_STATUS_SEEN: stringToBool(process.env.AUTO_STATUS_SEEN || "true"), // Auto-see status updates
    AUTO_STATUS_REPLY: stringToBool(process.env.AUTO_STATUS_REPLY || "false"), // Auto-reply to status
    AUTO_STATUS_REACT: stringToBool(process.env.AUTO_STATUS_REACT || "true"), // Auto-react to status
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*🎉👀 Status Seen by ✦ᴀʀꜱʟᴀɴ-ᴍᴅ 🚀🔥✦*", // Status reply message
    CURRENT_STATUS: stringToBool(process.env.CURRENT_STATUS || "true"), // Show current status

    // 🚀 ADVANCED AUTOMATION
    AUTO_VOICE: stringToBool(process.env.AUTO_VOICE || "false"), // Convert text to voice automatically
    AUTO_STICKER: stringToBool(process.env.AUTO_STICKER || "false"), // Convert images to stickers automatically
    AUTO_TYPING: stringToBool(process.env.AUTO_TYPING || "true"), // Show typing indicator
    AUTO_RECORDING: stringToBool(process.env.AUTO_RECORDING || "false"), // Show recording indicator
    FAKE_RECORDING: stringToBool(process.env.FAKE_RECORDING || "false"), // Fake recording indicator
    FAKE_TYPING: stringToBool(process.env.FAKE_TYPING || "false"), // Fake typing indicator
    ALWAYS_ONLINE: stringToBool(process.env.ALWAYS_ONLINE || "true"), // Show bot as always online
    PUBLIC_MODE: stringToBool(process.env.PUBLIC_MODE || "true"), // Public or private bot mode

    // 💌 BOT MESSAGES
    LIVE_MSG: process.env.LIVE_MSG || "> 🤖 ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴀʀꜱʟᴀɴ-ᴍᴅ✦ ғʀᴏᴍ ᴀʀꜱʟᴀɴ-ᴍᴅ ᴛᴇᴄʜ ɪɴᴄ⚡\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*\n> 🌐 *ɢɪᴛʜᴜʙ :* github.com/Arslan-MD/Arslan_MD", // Alive message

    // 🎊 STARTUP MESSAGE
    START_MSG: process.env.START_MSG || `*Hᴇʟʟᴏ ᴛʜᴇʀᴇ ᴀʀꜱʟᴀɴ-ᴍᴅ ᴄᴏɴɴᴇᴄᴛᴇᴅ! 👋🏻* 

   *ᴋᴇᴇᴘ ᴏɴ ᴜsɪɴɢ ᴀʀꜱʟᴀɴ-ᴍᴅ 🇵🇰* 

> 😘Joɪɴ ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ (ᴀ ᴍᴜsᴛ): ⤵️  
* *~_https://whatsapp.com/channel/0029VarfjW04tRrmwfb8x306_~*

> ♻️sᴜʙsᴄʀɪʙᴇ ʏᴛ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴛᴜᴛᴏʀɪᴀʟs
* *~_https://youtube.com/@arslanmdofficial_~*

    🫣- *ʏᴏᴜʀ ʙᴏᴛ ᴘʀᴇғɪx: ➡️[ . ]*
> - ʏᴏᴜ ᴄᴀɴ ᴄʜᴀɴɢᴇ ᴜʀ ᴘʀᴇғɪx ᴜsɪɴɢ ᴛʜᴇ .ᴘʀᴇғɪx ᴄᴏᴍᴍᴀɴᴅ

> ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ sʜᴀʀᴇ, sᴛᴀʀ &ғᴏʀᴋ ᴛʜᴇ ʀᴇᴘᴏ ⬇️ 
* *~_https://github.com/Arslan-MD/Arslan_MD_~*

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʀꜱʟᴀɴ-ᴍᴅ ☣️` // Bot startup message
};

// 💫 ARSLAN-MD STYLE GUIDE
global.ARS_STYLE = {
    EMOJIS: {
        SUCCESS: "✅", // Success operation emoji
        ERROR: "❌", // Error operation emoji  
        WARNING: "⚠️", // Warning message emoji
        LOADING: "⏳", // Loading indicator emoji
        SPARKLE: "✨", // Sparkle effect emoji
        ROCKET: "🚀", // Rocket/speed emoji
        FIRE: "🔥", // Fire/hot emoji
        CROWN: "👑" // Crown/royalty emoji
    },
    COLORS: {
        PRIMARY: "#FF0000", // Primary brand color
        SECONDARY: "#00FF00", // Secondary brand color  
        ACCENT: "#0000FF" // Accent brand color
    }
};
