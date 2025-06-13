import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { shortenService } from "../Services/NomeService";



type DevType = {
  name: string,
  techs: string
}

export async function NomeController(app: FastifyInstance) {



  app.post("/cadastro", async (request: FastifyRequest, reply: FastifyReply) => {
    const body = request.body as DevType;
    try {
      await shortenService.register(body)
      return reply.code(201).send();
    } catch (error: any) {
      return reply.code(400).send({ erro: error.message })
    }
  });





  app.get("/search_all", async (request: FastifyRequest, reply: FastifyReply) => {
    const search_all_devs = await shortenService.getAll();
    try {
      return reply.code(201).send(search_all_devs);
      
    } catch (error: any) {
      return reply.code(400).send({ erro: error.message })
    }
  });



  app.get("/search_dev/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as { id: string };
    try {
      const result = await shortenService.getById(id)
      return reply.code(201).send(result);
    } catch (error: any) {
      return reply.code(400).send({ erro: error.message })
    }
  });




  app.delete("/delete_dev/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    ;
    const { id } = request.params as { id: string };

    try {
      await shortenService.deleteById(id)
      return reply.code(201).send();
    } catch (error: any) {
      return reply.code(400).send({ erro: error.message })
    }
  });




  app.patch("/atualiza/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as { id: string };
    const body = request.body as {techs: string}
    try {
      await shortenService.atualiza(id, body)
      return reply.code(201).send();
    } catch (error: any) {
      return reply.code(400).send({ erro: error.message })
    }
  });






}
