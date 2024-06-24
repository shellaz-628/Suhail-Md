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
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_26_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NixcbiAgICAgICAgOTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDM5LFxuICAgICAgICAzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYxLFxuICAgICAgICA3MyxcbiAgICAgICAgMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNixcbiAgICAgICAgMTcxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxLFxuICAgICAgICA0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwLFxuICAgICAgICA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDY5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkwLFxuICAgICAgICAxODAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMTExLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5LFxuICAgICAgICA1NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgxLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAwLFxuICAgICAgICAxMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODAsXG4gICAgICAgIDI1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NixcbiAgICAgICAgMjEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg1LFxuICAgICAgICAwLFxuICAgICAgICA4NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ2ozSHZpMExBam5iUHdGRjhFcDN5WXZCMXBKTDJoVWVkajQ2ZHNoL2tTdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3ODQwNTUwNzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjExMTJGNTdGNjc2QjcwQURFREY5QTJEREZCRTQyRTkxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTI2ODAxMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc4NDA1NTA3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTA4OEFFMDI2RkE5MjE3M0MwRjIzNTMxOERCQjk4NThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MjY4MDExXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImh2eldaQ1lHU01lUFNYSF95bTFSSXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGZlZjA0MmUtMmE1Ny00ZTdmLWEzYTAtYTE2NWYxODgzZmY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDIwMCxcbiAgICAgIDExMyxcbiAgICAgIDIwMSxcbiAgICAgIDIyMSxcbiAgICAgIDgsXG4gICAgICA3NyxcbiAgICAgIDI5LFxuICAgICAgOTksXG4gICAgICAyMTMsXG4gICAgICAyNyxcbiAgICAgIDE0MCxcbiAgICAgIDk0LFxuICAgICAgMjAxLFxuICAgICAgMTE1LFxuICAgICAgMyxcbiAgICAgIDQxLFxuICAgICAgMjM0LFxuICAgICAgMTIyLFxuICAgICAgMTM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDEzNCxcbiAgICAgIDE5NyxcbiAgICAgIDc3LFxuICAgICAgOCxcbiAgICAgIDE0OCxcbiAgICAgIDYxLFxuICAgICAgOTMsXG4gICAgICA3NCxcbiAgICAgIDQsXG4gICAgICAxMTMsXG4gICAgICAyNDIsXG4gICAgICA0NSxcbiAgICAgIDEzNixcbiAgICAgIDI0NSxcbiAgICAgIDgxLFxuICAgICAgMTA2LFxuICAgICAgMjM3LFxuICAgICAgMjUwLFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzJZOVBIWUJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4NDA1NTA3OTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzE1ODUxMzk5NzAxNDk6OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJKTlIgQ1I3XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUE9XbWVVSEVLVGw1N01HR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRVkxHYjA0aE1GOFN4b2R1VWVVSzZoekdWSnhrQ3ZkUFZ1YUp1MlR3Z0NNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRvdlJIc255NWF5SGdWSVdtZnJoTVZHeVczZ1lQVFNNTTNUM0g1ZlNwa2tYYlNDYW9rdko1dDhxVTVDcGJTeUpFN3pZcU1Xb0tDdERxSjdRMWpWOUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5mL0xtSDdjODF2eW9FMlNYRkZQWWQ4SlFEeUh3Y0VhbkY1RUdOVGxIdk94VFFSdEdwSHI0R2hMUFR6SkNoTlNIT2toa3Y1QjAzV1ZEUW1DSEJxeUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4NDA1NTA3OTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MjY4MDA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBTUFBSEg2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFNQUFISDYuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
