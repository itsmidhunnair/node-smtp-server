const SMTPServer = require("smtp-server").SMTPServer;

// Create an SMTP server instance
const server = new SMTPServer({
  authOptional: true,
  onData(stream, session, callback) {
    let emailData = "";

    stream.on("data", (chunk) => {
      emailData += chunk.toString();
    });

    stream.on("end", () => {
      console.log("Received email:", emailData);
      callback(null, "Message received");
    });

    stream.on("error", (err) => {
      console.error("Stream error:", err);
      callback(err);
    });
  },
});

// Start the SMTP server
server.listen(2025, () => {
  console.log("SMTP server is listening on port 2025");
});

// TODO Use the below in the nodemailer config
// host: 'localhost',
//   port: 2025,
//   secure: false,
//   tls: {
//     rejectUnauthorized: false,
//   },
