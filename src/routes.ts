import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from "fastify";
import { CreateNutritionController } from "./controlles/CreateNutritionController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {

        let responseText: "```json\n{\n  \"nome\": \"Eduardo\",\n  \"sexo\": \"masculino\",\n  \"idade\": 40,\n  \"altura\": 1.90,\n  \"peso\": 90,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"7:00\",\n      \"nome\": \"Cafe da manha\",\n      \"alimentos\": [\n        \"4 claras de ovo + 2 gemas\",\n        \"100g de aveia\",\n        \"200ml de leite desnatado\",\n        \"1 banana\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da manha\",\n      \"alimentos\": [\n        \"150g de iogurte grego\",\n        \"30g de granola\",\n        \"1 fruta (maçã ou pera)\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"200g de frango grelhado\",\n        \"150g de batata doce\",\n        \"1 xicara de brócolis\",\n        \"Salada verde a vontade\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"1 scoop de whey protein\",\n        \"1 fruta (banana ou laranja)\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Janta\",\n      \"alimentos\": [\n        \"150g de peixe grelhado\",\n        \"100g de arroz integral\",\n        \"1 xicara de espinafre\",\n        \"Salada verde a vontade\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche antes de dormir\",\n      \"alimentos\":[\n        \"Caseina 30g\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey protein\",\n    \"Creatina\",\n    \"BCAA\",\n    \"Omega 3\"\n  ]\n}\n```\n"

        try {
            //extrair o JSON
            let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();
            
            let jsonObject = JSON.parse(jsonString)

            return reply.send({data: jsonObject});

        } catch (err) {
            console.log(err)
        }


        reply.send({ ok: true })
    })

    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutritionController().handle(request, reply)
    })
 
}