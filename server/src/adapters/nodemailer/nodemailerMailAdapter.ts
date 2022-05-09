import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mailAdapter';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1159f490344b2b",
    pass: "cf6dbe74396d50"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Juvenal Yoshikawa <yoshikawa.juvenal@gmail.com>',
      subject,
      html: body,
    });
  };
}