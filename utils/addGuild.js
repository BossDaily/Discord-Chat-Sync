const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const  main = async () => {
    await prisma.guild.create({
        data:{
            
        }
    })
}

main()