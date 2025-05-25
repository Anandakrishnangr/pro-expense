// utils/jwt.ts
import {  JWT_REFRESH_SECRET, JWT_SECRET } from '@/config/config';
import jwt from 'jsonwebtoken';

export const generateAccessToken = (userId: string) => {
  return jwt.sign({ userId }, JWT_SECRET!, { expiresIn: '1hr' });
};

export const generateRefreshToken = (userId: string) => {
  return jwt.sign({ userId }, JWT_REFRESH_SECRET!, { expiresIn: '7d'});
};

export const verifyToken = (token: string, secret: string) =>
  jwt.verify(token, secret);
