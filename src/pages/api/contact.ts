import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
      },
    });

    const mailOptions = {
      from: process.env.SENDGRID_FROM_EMAIL,
      to: 'contato@lazotec.com',
      subject: 'Nova Mensagem de Contato do Formulário',
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      res.status(500).json({ error: 'Erro ao enviar a mensagem.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
