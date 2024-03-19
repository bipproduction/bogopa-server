'use server'
import { prisma } from "@/module/_global"

export default async function funGetAllComponent() {
   const data = await prisma.adminComponent.findMany()
   const result = data.map(a => a.name);
   return result
}