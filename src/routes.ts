import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from "fastify";
import { CreateNutritionController } from "./controlles/CreateNutritionController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {

        let responseText: "```json\n{\n  \"nome\": \"Eduardo\",\n  \"sexo\": \"masculino\",\n  \"idade\": 40,\n  \"altura\": 1.90,\n  \"peso\": 90,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"7:00\",\n      \"nome\": \"Cafe da manha\",\n      \"alimentos\": [\n        \"4 claras de ovo\",\n        \"1 gema de ovo\",\n        \"1 fatia de pão integral\",\n        \"50g de peito de frango\",\n        \"1 colher de sopa de aveia\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da manha\",\n        \"alimentos\": [\n        \"1 banana\",\n        \"50g de amendoim\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"200g de carne vermelha magra\",\n        \"1 concha de arroz integral\",\n        \"1 concha de feijão\",\n        \"Salada verde a vontade\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"Shake de proteína com leite desnatado\",\n        \"1 fruta (maçã ou pera)\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe branco\",\n        \"1 concha de batata doce\",\n        \"Salada verde a vontade\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche antes de dormir\",\n      \"alimentos\": [\n        \"Caseina 30g com leite desnatado\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Creatina\",\n    \"Whey protein\",\n    \"BCAA\",\n    \"Glutamina\"\n  ]\n}\n```"

        try {
            //extrair o JSON
            let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim()

            return reply.send({data: jsonString});

        } catch (err) {
            console.log(err)
        }


        reply.send({ ok: true })
    })

    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutritionController().handle(request, reply)
    })

}