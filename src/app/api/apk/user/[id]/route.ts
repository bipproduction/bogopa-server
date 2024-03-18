export async function GET(request: Request, { params }: { params: { id: string } }) {
   return Response.json(
      { 'message': 'detail iduser = ' + params.id }
   )
}