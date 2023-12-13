import prisma from '../../../../../Prisma/prisma'
import jwt, { Secret } from 'jsonwebtoken';
import 'dotenv/config'
import { hash } from 'bcrypt';
import { mockUser } from '@/mockUser/mockUser';


type User = {
    name: string,
    email: string,
    password: string,
}


export async function POST(req: Request, res: Response) {
    const user: User = await req.json()
    // const hashedPassword = await hash(user.password, 10)
    console.log(user)

    if(user.email == mockUser.email && user.password == mockUser.password){
        const secret = process.env.NEXT_PUBLIC_JWT_SECRET as Secret;
        const jwtToken = jwt.sign({ user }, secret);
        return Response.json({"msg": "successful logged in", "accessToken": jwtToken})
    } else {
        return Response.json({"msg": "failed to log in", "accessToken": ""})
    }
}