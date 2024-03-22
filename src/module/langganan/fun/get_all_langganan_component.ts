'use server'
import { prisma } from "@/module/_global"

export default async function funGetAllLanggananComponent() {
   const data = await prisma.langgananComponent.findMany()
   const result = data.map(a => a.name)
   return result
}