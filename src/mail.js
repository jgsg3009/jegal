var nodemailer = require('nodemailer')
var smtpPool = require('nodemailer-smtp-pool')
// nodemailer 의 createTransport는 transporter 객체를 만드는 메소드인데
// nodemailer-smtp-pool 객체 인스턴스가 이 메소드의 인자로 쓴다.

var smtpTransport = nodemailer.createTransport(
  smtpPool({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'zazxz131@gmail.com',
      pass: 'guswnd123'
    },
    maxConnections: 5,
    maxMessages: 10
  })
)

var mailOpt = {
  from: 'zazxz131@gmail.com',
  to: 'zazxz131@gmail.com',
  subject: 'mail test',
  text: 'mail test'
}
smtpTransport.sendMail(mailOpt, function (err, res) {
  if (err) {
    console.log(err)
  } else {
    console.log('Message send :' + res)
  }

  smtpTransport.close()
})
