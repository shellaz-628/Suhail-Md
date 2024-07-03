const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "+263 775810966,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_38_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc0LFxuICAgICAgICAzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDcyLFxuICAgICAgICAzMixcbiAgICAgICAgMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDU3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY4LFxuICAgICAgICA3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDk3LFxuICAgICAgICA0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDM3LFxuICAgICAgICA4OCxcbiAgICAgICAgNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMixcbiAgICAgICAgNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDU5LFxuICAgICAgICA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4LFxuICAgICAgICA1NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMixcbiAgICAgICAgMjI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAwLFxuICAgICAgICA2MyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc0LFxuICAgICAgICA1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibEJCWUhZeUZhSng0bFJUV2V6S0N4djNCVGRKK21nYlV0RVVIaEFkeTRhND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3NzU4MTA5NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk4Mzc5QTI1Mjg2OTdDMzM1ODA4MDI5RDJEQzJDREU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDAzNTUzMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc3NTgxMDk2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTVBMEFFNDIyQUI1QTQ2RUFDREEzOUE1QTlGNkYzRENcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMDM1NTMyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzc1ODEwOTY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5Rjc3QkFDNTczOTA4Rjk4M0I2NzdGNkY0QzZDOEVFOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAwMzU1MzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3NzU4MTA5NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJDMjhERDUwODlGRTQ4QkYyNDQxMjU2Q0QxM0FBQzM4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDAzNTUzNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYcE5EdEpiX1FaeXR0VTVxYlgyanBnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjExYjZhNTVlLWY3OWEtNDQ4Ny05YzRlLTNmNWM2ZWM2MjMwZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDg4LFxuICAgICAgMTc3LFxuICAgICAgMTI1LFxuICAgICAgMTE3LFxuICAgICAgMTY0LFxuICAgICAgMTA3LFxuICAgICAgMjQ1LFxuICAgICAgMTc5LFxuICAgICAgMjMzLFxuICAgICAgNTgsXG4gICAgICAyMTQsXG4gICAgICAzNyxcbiAgICAgIDg2LFxuICAgICAgMjM0LFxuICAgICAgMTM5LFxuICAgICAgNzQsXG4gICAgICA1MCxcbiAgICAgIDE0MyxcbiAgICAgIDIzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICA2OCxcbiAgICAgIDIzMyxcbiAgICAgIDc0LFxuICAgICAgOSxcbiAgICAgIDExNixcbiAgICAgIDc5LFxuICAgICAgMTY4LFxuICAgICAgMjMwLFxuICAgICAgMjMyLFxuICAgICAgODksXG4gICAgICAyMDMsXG4gICAgICAxNzAsXG4gICAgICAxMjEsXG4gICAgICAxNzcsXG4gICAgICAyMTAsXG4gICAgICAxNTYsXG4gICAgICA4NyxcbiAgICAgIDIsXG4gICAgICAxMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLek55YzBIRU1iUmxyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJNU0gzZmFnQmN6VUxRdXVleDBxOU1vZE5hdU5RalpOanlwKzduZEFhQ1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiazJXK3B6cXdOUUd6ZjJyZ01iK1JMSzE3ZklNb2RwMXBzTDdqcmtzT3F4dDE5U2RjNzhJdE9YT2MrcGZhb0h3WUdydEx4YU1yak1KZXlvcGZSSEtpQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSm9kQ1RkcHh6VXUzSlM3dmJpaDJMM3BiMEUyTnlHMEVWbVMvSWJGcmlVWEtrcXRyNDNRTjBqU2g0My9NNmg0MmdLRGNtWXdjbFR3dDE4YXRFOXZNaHc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3NzU4MTA5NjY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNoZWxsYXpcIixcbiAgICBcImxpZFwiOiBcIjEyNTk2MzI3MDYyMzM3MDoyQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzc1ODEwOTY2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwMzU1MzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOVUVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5VRS5qc29uIjogIntcImtleURhdGFcIjpcImJKL3JwNnUzWjFlM0RXM0l6dHVEbkxKZDU2eDV3dGprbnQ0Tmt6Ni9mbmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA0MTczNDgyOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMDM1NTMxMzkxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
