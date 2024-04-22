const mailgun = require("mailgun-js");
const DOMAIN = "sandboxd887277c66e949d78a68c13b595d6887.mailgun.org";
const mg = mailgun({
  apiKey: `${process.env.MAILGUN_PRIVATE_API_KEY}`,
  domain: DOMAIN,
});
const data = {
  from: "Mailgun Sandbox <postmaster@sandboxd887277c66e949d78a68c13b595d6887.mailgun.org>",
  to: "mail.umarbashir@gmail.com",
  subject: "Hello",
  text: "Testing some Mailgun awesomness!",
};
mg.messages().send(data, function (error: any, body: any) {
  console.log(body);
});
