import { prisma } from "../prisma/client"
import crypto from 'crypto'
class DevService {

    public async register(body: any): Promise<void> {
        const dev = {
            id: crypto.randomUUID(),
            name: body.name,
            techs: body.techs
        }
        await prisma.dev.create({ data: dev })
    }

    public async getAll() {
        const devs = await prisma.dev.findMany({});
        return devs;
    }

    public async getById(id: string) {
        const search_dev = await prisma.dev.findUnique({
            where: { id: id }
        });
        return search_dev;

    }


    public async deleteById(id: string) {
        return await prisma.dev.delete({ where: { id: id } })
    }

    public async atualiza(id: string, body : any) {
        const search_dev = await prisma.dev.update({
            where: { id: id },
            data: body
        });
    }
}

export const shortenService = new DevService();