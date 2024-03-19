'use server'
import { prisma } from "@/module/_global";
import _, { ceil } from 'lodash'
import moment from 'moment'


export default async function funGetLogAdmin({ body }: { body: any }) {
   let kondisi

   const tglAwal = body.dateFrom + ' 00:00:00';
   const tglAkhir = body.dateTo + ' 23:59:59';

   const dataSkip = _.toNumber(body.page) * 25 - 25;


   if (_.isNull(body.user) || body.user == "") {
      kondisi = {
         isActive: true,
         createdAt: {
            gte: new Date(tglAwal).toISOString(),
            lte: new Date(tglAkhir).toISOString(),
         }
      }
   } else {
      kondisi = {
         isActive: true,
         idAdminUser: Number(body.user),
         createdAt: {
            gte: new Date(tglAwal).toISOString(),
            lte: new Date(tglAkhir).toISOString(),
         }
      }
   }

   const data = await prisma.adminLog.findMany({
      skip: dataSkip,
      take: 25,
      where: kondisi,
      select: {
         activity: true,
         createdAt: true,
         description: true,
         idContent: true,
         tableContent: true,
         AdminUser: {
            select: {
               name: true,
               AdminRole: {
                  select: {
                     name: true,
                  }
               }
            }
         }
      },
      orderBy: {
         createdAt: 'desc',
      }
   })

   const result = data.map((v) => ({
      ..._.omit(v, ['AdminRole', 'AdminUser', 'createdAt']),
      role: v.AdminUser.AdminRole.name,
      name: v.AdminUser.name,
      time: moment(v.createdAt).format('DD-MM-YYYY HH:mm:ss')
   }))

   const nData = await prisma.adminLog.count({
      where: kondisi,
   })

   const allData = {
      data: result,
      nPage: ceil(nData / 25)
   }

   return allData
}