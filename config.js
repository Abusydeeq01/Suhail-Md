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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348107036108";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_19_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDgwLFxuICAgICAgICA4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NixcbiAgICAgICAgMTEyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQyLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgNDYsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1LFxuICAgICAgICA2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgODIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA1LFxuICAgICAgICA5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgOTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAwLFxuICAgICAgICA3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYwLFxuICAgICAgICA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM1LFxuICAgICAgICA0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYWY4NCswcVhlYjhrS2xhM2FuMjFXWmZQU2N3RXVoaXBwNzZsRUpwcU5FST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiU0MwUkxHWjBRSHE3RW9UOG5CUmhrd1wiLFxuICBcInBob25lSWRcIjogXCJhZDVhNDA3OC1iNGVhLTQ1NTktOTY4NC0xOWE4YzliOTM1NjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk2LFxuICAgICAgMjQzLFxuICAgICAgMjExLFxuICAgICAgNjUsXG4gICAgICAxNjYsXG4gICAgICAxNzAsXG4gICAgICAxNTQsXG4gICAgICA3OCxcbiAgICAgIDc0LFxuICAgICAgNzQsXG4gICAgICA5LFxuICAgICAgNjEsXG4gICAgICA5OCxcbiAgICAgIDI4LFxuICAgICAgMjYsXG4gICAgICA2NixcbiAgICAgIDIyNyxcbiAgICAgIDY5LFxuICAgICAgMTksXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDQsXG4gICAgICAxNTgsXG4gICAgICAxNzUsXG4gICAgICAyMTcsXG4gICAgICA0MSxcbiAgICAgIDc0LFxuICAgICAgMjQ0LFxuICAgICAgMTYyLFxuICAgICAgMTU1LFxuICAgICAgMTMxLFxuICAgICAgMjA2LFxuICAgICAgMjUxLFxuICAgICAgMTQ4LFxuICAgICAgMjIyLFxuICAgICAgNTEsXG4gICAgICA0NSxcbiAgICAgIDkzLFxuICAgICAgMzAsXG4gICAgICA4MSxcbiAgICAgIDE5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHVE1MUFE3OFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwNzAzNjEwODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWJ1LXN5ZGVlcfCThZNcIixcbiAgICBcImxpZFwiOiBcIjE1OTM2OTM5MjA1NDM1MDozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xhNnBwQU1FUDI1NzdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYzdlaWtRc3V0TklsQWNPQzYvNlM4eC9LNFR0OVpXMlR4RGplRnRYZHVFQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3bFZjSE40ZStqeGZvTHF0WE5kRWpUN3F2eHR4UG9INE5mL2NHWCtUK0tDNlhscnZGRndiVzhDNFFZQVdsWlR5bFFBNW05NGhTSTBGOHQxTWtqWHZDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXUE5HcFV6QXd0cnBhY3FkZDVqKy9UTFQzd1ZOMzViKzdOTlVFQnVhUWxncFk3Q1RWWjg0MHpmTDIzMU0zUHZReHRXSEZVNjlKZ2JidnpWb0d2SXhEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA3MDM2MTA4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTM5MzUzNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
