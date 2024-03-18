import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
   const searchParams = request.nextUrl.searchParams
   const kat = searchParams.get('kat')
   return Response.json(
      { 'message': 'get list live kategori : ' + kat }
   )
}