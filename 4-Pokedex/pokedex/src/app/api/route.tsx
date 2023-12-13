export function GET(){
    console.log('rota: root')
    return Response.json({"Hello": "world"})
}