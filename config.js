const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Kolkata, India."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://wa.me/+919331218857";
global.website=process.env.GURL || "https://wa.me/+919331218857" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© ᴀᴠɪʀᴜᴘ" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+919331218857";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_34_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDgyLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDgxLFxuICAgICAgICAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NixcbiAgICAgICAgMjM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NixcbiAgICAgICAgNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwLFxuICAgICAgICA4NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA5OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzLFxuICAgICAgICA4OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM0LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM4LFxuICAgICAgICAzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk5LFxuICAgICAgICA4MixcbiAgICAgICAgNzMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjksXG4gICAgICAgIDEzMixcbiAgICAgICAgNDksXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI5LFxuICAgICAgICA4MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgwLFxuICAgICAgICA1MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxVWg1aDhqVmIvM1FWWG01TUJzREM0d2xYNm1VZXhrTGdiT0dVS3BKSWxrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmN3VtNHJRX1RtbXBweWRMd1ZteDJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImI2OTI2Njk3LTIxNGEtNGI4YS05NmVlLWYyMWYyMThlZTNhNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICA1MSxcbiAgICAgIDEwMSxcbiAgICAgIDEwOSxcbiAgICAgIDY5LFxuICAgICAgMjUsXG4gICAgICAxMDMsXG4gICAgICAxNDAsXG4gICAgICA0LFxuICAgICAgMjI2LFxuICAgICAgNTAsXG4gICAgICAxODgsXG4gICAgICAxMTMsXG4gICAgICA5MyxcbiAgICAgIDExNCxcbiAgICAgIDI0NCxcbiAgICAgIDIyOSxcbiAgICAgIDIzMSxcbiAgICAgIDM5LFxuICAgICAgMTMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOSxcbiAgICAgIDE4LFxuICAgICAgMjEyLFxuICAgICAgMjU1LFxuICAgICAgMTQsXG4gICAgICAyNTIsXG4gICAgICAxMTYsXG4gICAgICA2MixcbiAgICAgIDE5MCxcbiAgICAgIDYyLFxuICAgICAgMjE0LFxuICAgICAgMixcbiAgICAgIDM1LFxuICAgICAgMixcbiAgICAgIDEsXG4gICAgICA4LFxuICAgICAgNjcsXG4gICAgICAxNTMsXG4gICAgICA0OCxcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOThKNDJZTllcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTMzMTIxODg1NzozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE2NTEwMDgxMTU5MjIxOjM5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BhNHQ4WUhFS2FrcHJrR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWG9oL21uMHdXSHNFMStnV1kraU5EcE9sZWp5Z2h2WmMwKythdjI2RmtSYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKSVJhM2VBeWlyVFBRZjI0b0MzbjZkSW5UWjBoa1ZLTXg4SjFwM2VRV2V3NnhCS0VqRlF5SGV4Qk9CNWd2eS9BNzQxVzdYbXJOSzhYRWNlOHBMMEFEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4SnJob2VxRlpOK0VqVnVEQVFyTmMzUEtEL2NranNnU1BQTDkxY3FGaE51b3J1K1Q5VkR3bUkzejQ3cG1JdnNjaUt2Z1FDSEtUWGlvN3JNWTI3R1dBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTkzMzEyMTg4NTc6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNzc3NjQyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴠɪʀᴜᴘ ® "),
 
  author : process.env.PACK_AUTHER|| "ᴀᴠɪʀᴜᴘ",
  packname: process.env.PACK_NAME || "❤️🔊",
  botname : process.env.BOT_NAME  || "𝐀ᴠɪʀᴜᴘ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝐀ᴠɪ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "𝐀ᴠɪʀᴜᴘ"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
