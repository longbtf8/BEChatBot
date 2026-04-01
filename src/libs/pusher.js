const Pusher = require("pusher");

const pusher = new Pusher({
  appId: process.env.SOKETI_APP_ID,
  key: process.env.SOKETI_APP_KEY,
  secret: process.env.SOKETI_APP_SECRET,
  cluster: "",
  useTLS: true,
  host: "soketi-fy9d.onrender.com",
  port: "443",
});

module.exports = pusher;
