export async function GET(request: Request, { params }: { params: { id: string } }) {
   return Response.json(
      { 'message': 'photo iduser = ' + params.id }
   )
}