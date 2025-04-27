import * as jsonServer from 'json-server';
import { Request, Response } from 'express';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom route for login
server.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log('Login request received:', { email, password });
  const users = (router.db.get('users') as any).value();
  console.log('Users in db:', users);
  const user = users.find((u: any) => u.email === email && u.password === password);

  if (user) {
    console.log('User found:', user);
    const token = `fake-jwt-${user.id}-${Date.now()}`;
    res.json({ token, user: { id: user.id, email: user.email, username: user.username } });
  } else {
    console.log('User not found or invalid credentials');
    res.status(401).json({ error: 'Invalid email or password' });
  }
});

// Mount json-server router after custom routes
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});