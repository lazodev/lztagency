import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key'; // Substitua com sua chave secreta

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error('Token inválido');
  }
};

export const authMiddleware = (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(' ')[1]; // Pega o token após 'Bearer'

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded; // Armazena os dados do usuário decodificados na requisição
    next(); // Continuação para o próximo middleware ou função de rota
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido ou expirado' });
  }
};
