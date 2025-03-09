import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface CustomRequest extends Request {
    user?: { id: string, username: string, isAdmin: boolean };
}

interface Payload extends JwtPayload { 
    id: string, 
    username: string, 
    isAdmin: boolean 
};

const authenticate = (req: CustomRequest, res: Response, next: NextFunction) => { // authenticate Authorization token
    try {
        const token: string | undefined = req.cookies.token; // changed from req.headers.authorization

        if (!token) {
            res.status(401).json({ message: 'Token not found.' });
        } else {
            const verified: Payload = jwt.verify(token, process.env.JWT_SECRET as string) as Payload;
            req.user = verified;
            next();
        }
    } catch (error: any) {
        console.error(`Error during token validation: ${error}`);
        res.status(400).json({ message: 'Invalid token.' });
        return;
    }
};

// const isAdmin = (req: CustomRequest, res: Response, next: NextFunction) => { // added later for admin access
//     if (!req.user?.isAdmin) {
//         res.status(403).json({ message: 'Access denied.' });
//         return;
//     }
//     next();
// };

export { CustomRequest, authenticate }; //, isAdmin };