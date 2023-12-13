import prisma from '../../../../../Prisma/prisma'
import jwt, { Secret } from 'jsonwebtoken';
import 'dotenv/config'
import { hash } from 'bcrypt';


type User = {
    name: string,
    email: string,
    password: string,
}


export async function POST(req: Request, res: Response) {
    const user: User= req.body 
    console.log("rota: register")
    // const hashedPassword = await hash(user.password, 10)

    const secret = process.env.NEXT_PUBLIC_JWT_SECRET as Secret;

    const jwtToken = jwt.sign({ user }, secret);

    return Response.json({"accessToken": jwtToken})
}