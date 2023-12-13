import { verify } from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'


export function middleware(req: Request, res: NextResponse){
    // const authHeader = req.headers['authorization']
    // const token = authHeader && authHeader.split(' ')[1]

    // if(token == null) {
    //     return NextResponse.json({"msg": "Token inválido"})
    // }

    // verify(token, )
    console.log("middleware")
    return NextResponse.next()
}

export const config = {
    matcher: '/api/user/register',
}