import { seederAdminAccess, seederAdminComponent, seederAdminRole, seederAdminUser, seederLanggananComponent } from '@/module/seeder'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
   // ROLE ADMIN
   for (let data of seederAdminRole) {
      await prisma.adminRole.upsert({
         where: {
            id: data.id
         },
         update: {
            name: data.name
         },
         create: {
            id: data.id,
            name: data.name
         },
      })
   }

   // USER ADMIN
   for (let data of seederAdminUser) {
      await prisma.adminUser.upsert({
         where: {
            id: data.id
         },
         update: {
            name: data.name
         },
         create: {
            id: data.id,
            idAdminRole: data.idRole,
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: data.password
         },
      })
   }

   // COMPONENT
   for (let data of seederAdminComponent) {
      await prisma.adminComponent.upsert({
         where: {
            id: data.id
         },
         update: {
            name: data.name,
            grup: data.grup,
            link: data.link
         },
         create: {
            id: data.id,
            name: data.name,
            grup: data.grup,
            link: data.link
         },
      })
   }

   // ADMIN ROLE ACCESS
   for (let data of seederAdminAccess) {
      await prisma.adminAccess.upsert({
         where: {
            id: data.id
         },
         update: {
            idAdminComponent: data.idComponent,
            idAdminRole: data.idRole
         },
         create: {
            id: data.id,
            idAdminComponent: data.idComponent,
            idAdminRole: data.idRole
         },
      })
   }

   // ADMIN KOMPONEN LANGGANAN
   for (let data of seederLanggananComponent) {
      await prisma.langgananComponent.upsert({
         where: {
            id: data.id
         },
         update: {
            name: data.name,
            description: data.desc
         },
         create: {
            id: data.id,
            name: data.name,
            description: data.desc
         }
      })
   }
}


main().then(async () => {
   await prisma.$disconnect()
}).catch(async (e) => {
   console.error(e)
   await prisma.$disconnect()
   process.exit(1)
})