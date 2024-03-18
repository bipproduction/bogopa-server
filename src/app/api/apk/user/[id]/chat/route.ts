export async function GET(request: Request, { params }: { params: { id: string } }) {
   return Response.json(
      { 'message': 'chat iduser = ' + params.id }
   )
}