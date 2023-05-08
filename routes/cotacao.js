const express = require("express");
const axios = require("axios");
const dotenv = require('dotenv');
const router = express.Router();

const authToken = require('../configs/authToken');

dotenv.config();

router.get("/", async (req, res) => {
    res.sendFile("cotacao.html", { root: "public" });
});

router.post("/", async (req, res) => {
    let token = await authToken();
    let url = "http://hml-admin.heroseguros.com.br/api/cotation";
    let header = { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } };
    let data = {
        "dateFormat": "d/m/Y",
        "departure": "01/06/2023",
        "arrival": "10/06/2023",
        "destinyGroup": 1,
        "passengers": [ { "type": "age", "age": 25 } ]
    };

    let request = await axios.post( url, data, header );
    let response = request.data;

    res.status(200).json(response.data);
    //console.log(groups);
});

module.exports = router;
/*let a = {
    "success": "true",
    "data": [
        {
            "name": "PRIME 60",
            "slug": "ts-60",
            "group": "60k",
            "currency": "USD",
            "is": "60000,00",
            "plan_id": 31,
            "price": "184.13",
            "price_raw": "18413",
            "days": 10,
            "additional_id": 0,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "60000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "300,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "300,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "1200,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "700,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                }
            ]
        },
        {
            "id": 5,
            "name": "PRIME 60 DMH Covid 5 mil",
            "slug": "ts-60",
            "group": "60k",
            "currency": "USD",
            "is": "60000,00",
            "plan_id": 31,
            "price": "228.92",
            "price_raw": "22892",
            "days": 10,
            "additional_id": 32,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "60000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "300,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "300,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "1200,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "700,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 32,
                    "is": "5000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 5,
            "name": "PRIME 60 DMH Covid 10 mil",
            "slug": "ts-60",
            "group": "60k",
            "currency": "USD",
            "is": "60000,00",
            "plan_id": 31,
            "price": "261.27",
            "price_raw": "26127",
            "days": 10,
            "additional_id": 33,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "60000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "300,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "300,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "1200,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "700,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 33,
                    "is": "10000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 5,
            "name": "PRIME 60 DMH Covid 20 mil",
            "slug": "ts-60",
            "group": "60k",
            "currency": "USD",
            "is": "60000,00",
            "plan_id": 31,
            "price": "301.08",
            "price_raw": "30108",
            "days": 10,
            "additional_id": 34,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "60000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "300,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "300,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "1200,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "700,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 34,
                    "is": "20000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 5,
            "name": "PRIME 60 DMH Covid 30 mil",
            "slug": "ts-60",
            "group": "60k",
            "currency": "USD",
            "is": "60000,00",
            "plan_id": 31,
            "price": "333.42",
            "price_raw": "33342",
            "days": 10,
            "additional_id": 35,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "60000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "300,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "300,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "1200,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "700,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 35,
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 5,
            "name": "PRIME 60 COVID - DMH 5 mil + Prorrogação de Estadia",
            "slug": "ts-60",
            "group": "60k",
            "currency": "USD",
            "is": "60000,00",
            "plan_id": 31,
            "price": "327.45",
            "price_raw": "32745",
            "days": 10,
            "additional_id": 36,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "60000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "300,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "300,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "1200,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "700,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 36,
                    "is": "5000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                },
                {
                    "additional_id": 36,
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "name": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "slug": "prorrogacao-obrigatoria-de-viagem-quarentena-devido-a-diagnostico-de-covid-19",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 5,
            "name": "PRIME 60 COVID - DMH 10 mil + Prorrogação de Estadia",
            "slug": "ts-60",
            "group": "60k",
            "currency": "USD",
            "is": "60000,00",
            "plan_id": 31,
            "price": "359.30",
            "price_raw": "35930",
            "days": 10,
            "additional_id": 38,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "60000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "300,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "300,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "1200,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "700,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 38,
                    "is": "10000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                },
                {
                    "additional_id": 38,
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "name": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "slug": "prorrogacao-obrigatoria-de-viagem-quarentena-devido-a-diagnostico-de-covid-19",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 5,
            "name": "PRIME 60 COVID - DMH 20 mil + Prorrogação de Estadia",
            "slug": "ts-60",
            "group": "60k",
            "currency": "USD",
            "is": "60000,00",
            "plan_id": 31,
            "price": "399.11",
            "price_raw": "39911",
            "days": 10,
            "additional_id": 46,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "60000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "300,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "300,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "1200,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "700,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 46,
                    "is": "20000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                },
                {
                    "additional_id": 46,
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "name": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "slug": "prorrogacao-obrigatoria-de-viagem-quarentena-devido-a-diagnostico-de-covid-19",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 5,
            "name": "PRIME 60 COVID - DMH 30 mil + Prorrogação de Estadia",
            "slug": "ts-60",
            "group": "60k",
            "currency": "USD",
            "is": "60000,00",
            "plan_id": 31,
            "price": "431.96",
            "price_raw": "43196",
            "days": 10,
            "additional_id": 47,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "60000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "300,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "300,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "1200,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "700,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "600,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 47,
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                },
                {
                    "additional_id": 47,
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "name": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "slug": "prorrogacao-obrigatoria-de-viagem-quarentena-devido-a-diagnostico-de-covid-19",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "name": "PRIME 150",
            "slug": "prime-15",
            "group": "150k",
            "currency": "USD",
            "is": "150000,00",
            "plan_id": 34,
            "price": "253.80",
            "price_raw": "25380",
            "days": 10,
            "additional_id": 0,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "150000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "1200,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "700,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                }
            ]
        },
        {
            "id": 26,
            "name": "PRIME 150 DMH Covid 5 mil",
            "slug": "prime-15",
            "group": "150k",
            "currency": "USD",
            "is": "150000,00",
            "plan_id": 34,
            "price": "298.59",
            "price_raw": "29859",
            "days": 10,
            "additional_id": 32,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "150000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "1200,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "700,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 32,
                    "is": "5000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 26,
            "name": "PRIME 150 DMH Covid 10 mil",
            "slug": "prime-15",
            "group": "150k",
            "currency": "USD",
            "is": "150000,00",
            "plan_id": 34,
            "price": "330.94",
            "price_raw": "33094",
            "days": 10,
            "additional_id": 33,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "150000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "1200,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "700,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 33,
                    "is": "10000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 26,
            "name": "PRIME 150 DMH Covid 20 mil",
            "slug": "prime-15",
            "group": "150k",
            "currency": "USD",
            "is": "150000,00",
            "plan_id": 34,
            "price": "370.75",
            "price_raw": "37075",
            "days": 10,
            "additional_id": 34,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "150000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "1200,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "700,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 34,
                    "is": "20000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 26,
            "name": "PRIME 150 DMH Covid 30 mil",
            "slug": "prime-15",
            "group": "150k",
            "currency": "USD",
            "is": "150000,00",
            "plan_id": 34,
            "price": "403.09",
            "price_raw": "40309",
            "days": 10,
            "additional_id": 35,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "150000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "1200,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "700,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 35,
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 26,
            "name": "PRIME 150 COVID - DMH 5 mil + Prorrogação de Estadia",
            "slug": "prime-15",
            "group": "150k",
            "currency": "USD",
            "is": "150000,00",
            "plan_id": 34,
            "price": "397.12",
            "price_raw": "39712",
            "days": 10,
            "additional_id": 36,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "150000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "1200,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "700,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 36,
                    "is": "5000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                },
                {
                    "additional_id": 36,
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "name": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "slug": "prorrogacao-obrigatoria-de-viagem-quarentena-devido-a-diagnostico-de-covid-19",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 26,
            "name": "PRIME 150 COVID - DMH 10 mil + Prorrogação de Estadia",
            "slug": "prime-15",
            "group": "150k",
            "currency": "USD",
            "is": "150000,00",
            "plan_id": 34,
            "price": "428.97",
            "price_raw": "42897",
            "days": 10,
            "additional_id": 38,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "150000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "1200,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "700,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 38,
                    "is": "10000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                },
                {
                    "additional_id": 38,
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "name": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "slug": "prorrogacao-obrigatoria-de-viagem-quarentena-devido-a-diagnostico-de-covid-19",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 26,
            "name": "PRIME 150 COVID - DMH 20 mil + Prorrogação de Estadia",
            "slug": "prime-15",
            "group": "150k",
            "currency": "USD",
            "is": "150000,00",
            "plan_id": 34,
            "price": "468.78",
            "price_raw": "46878",
            "days": 10,
            "additional_id": 46,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "150000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "1200,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "700,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 46,
                    "is": "20000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                },
                {
                    "additional_id": 46,
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "name": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "slug": "prorrogacao-obrigatoria-de-viagem-quarentena-devido-a-diagnostico-de-covid-19",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 26,
            "name": "PRIME 150 COVID - DMH 30 mil + Prorrogação de Estadia",
            "slug": "prime-15",
            "group": "150k",
            "currency": "USD",
            "is": "150000,00",
            "plan_id": 34,
            "price": "501.63",
            "price_raw": "50163",
            "days": 10,
            "additional_id": 47,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "150000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "1200,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "700,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "30000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "2000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "40000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 47,
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                },
                {
                    "additional_id": 47,
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "name": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "slug": "prorrogacao-obrigatoria-de-viagem-quarentena-devido-a-diagnostico-de-covid-19",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "name": "PRIME EURO 30",
            "slug": "prime-euro-30",
            "group": "PRIME EURO 30",
            "currency": "USD",
            "is": "30000,00",
            "plan_id": 38,
            "price": "165.71",
            "price_raw": "16571",
            "days": 10,
            "additional_id": 0,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "30000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "100,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "100,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "10000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "10000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                }
            ]
        },
        {
            "id": 27,
            "name": "PRIME EURO 30 DMH Covid 5 mil",
            "slug": "prime-euro-30",
            "group": "PRIME EURO 30",
            "currency": "USD",
            "is": "30000,00",
            "plan_id": 38,
            "price": "210.50",
            "price_raw": "21050",
            "days": 10,
            "additional_id": 32,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "30000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "100,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "100,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "10000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "10000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 32,
                    "is": "5000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 27,
            "name": "PRIME EURO 30 DMH Covid 10 mil",
            "slug": "prime-euro-30",
            "group": "PRIME EURO 30",
            "currency": "USD",
            "is": "30000,00",
            "plan_id": 38,
            "price": "242.85",
            "price_raw": "24285",
            "days": 10,
            "additional_id": 33,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "30000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "100,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "100,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "10000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "10000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 33,
                    "is": "10000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 27,
            "name": "PRIME EURO 30 DMH Covid 20 mil",
            "slug": "prime-euro-30",
            "group": "PRIME EURO 30",
            "currency": "USD",
            "is": "30000,00",
            "plan_id": 38,
            "price": "282.66",
            "price_raw": "28266",
            "days": 10,
            "additional_id": 34,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "30000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "100,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "100,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "10000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "10000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 34,
                    "is": "20000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 27,
            "name": "PRIME EURO 30 DMH Covid 30 mil",
            "slug": "prime-euro-30",
            "group": "PRIME EURO 30",
            "currency": "USD",
            "is": "30000,00",
            "plan_id": 38,
            "price": "315.00",
            "price_raw": "31500",
            "days": 10,
            "additional_id": 35,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "30000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "100,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "100,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "10000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "10000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 35,
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 27,
            "name": "PRIME EURO 30 COVID - DMH 5 mil + Prorrogação de Estadia",
            "slug": "prime-euro-30",
            "group": "PRIME EURO 30",
            "currency": "USD",
            "is": "30000,00",
            "plan_id": 38,
            "price": "309.03",
            "price_raw": "30903",
            "days": 10,
            "additional_id": 36,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "30000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "100,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "100,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "10000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "10000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 36,
                    "is": "5000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                },
                {
                    "additional_id": 36,
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "name": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "slug": "prorrogacao-obrigatoria-de-viagem-quarentena-devido-a-diagnostico-de-covid-19",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 27,
            "name": "PRIME EURO 30 COVID - DMH 10 mil + Prorrogação de Estadia",
            "slug": "prime-euro-30",
            "group": "PRIME EURO 30",
            "currency": "USD",
            "is": "30000,00",
            "plan_id": 38,
            "price": "340.88",
            "price_raw": "34088",
            "days": 10,
            "additional_id": 38,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "30000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "100,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "100,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "10000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "10000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 38,
                    "is": "10000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                },
                {
                    "additional_id": 38,
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "name": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "slug": "prorrogacao-obrigatoria-de-viagem-quarentena-devido-a-diagnostico-de-covid-19",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 27,
            "name": "PRIME EURO 30 COVID - DMH 20 mil + Prorrogação de Estadia",
            "slug": "prime-euro-30",
            "group": "PRIME EURO 30",
            "currency": "USD",
            "is": "30000,00",
            "plan_id": 38,
            "price": "380.69",
            "price_raw": "38069",
            "days": 10,
            "additional_id": 46,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "30000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "100,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "100,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "10000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "10000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 46,
                    "is": "20000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                },
                {
                    "additional_id": 46,
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "name": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "slug": "prorrogacao-obrigatoria-de-viagem-quarentena-devido-a-diagnostico-de-covid-19",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        },
        {
            "id": 27,
            "name": "PRIME EURO 30 COVID - DMH 30 mil + Prorrogação de Estadia",
            "slug": "prime-euro-30",
            "group": "PRIME EURO 30",
            "currency": "USD",
            "is": "30000,00",
            "plan_id": 38,
            "price": "413.54",
            "price_raw": "41354",
            "days": 10,
            "additional_id": 47,
            "currency_bill": "BRL",
            "coverages": [
                {
                    "is": "30000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "name": "Despesas médicas e hospitalares (incluindo doenças pré-existentes, prática de esportes amadores e gestantes até a 28a semana)",
                        "slug": "despesas-medicas-e-hospitalares",
                        "highlight": "",
                        "content": "",
                        "display_order": 1
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 2,
                        "title": "Despesas odontológicas",
                        "name": "Despesas odontológicas",
                        "slug": "despesas-odontologicas",
                        "highlight": "",
                        "content": "",
                        "display_order": 3
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 3,
                        "title": "Despesas farmacêuticas",
                        "name": "Despesas farmacêuticas",
                        "slug": "despesas-farmaceuticas",
                        "highlight": "",
                        "content": "",
                        "display_order": 4
                    }
                },
                {
                    "is": "100,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 4,
                        "title": "Atraso de bagagem (superior 8h)",
                        "name": "Atraso de bagagem (superior 8h)",
                        "slug": "atraso-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 6
                    }
                },
                {
                    "is": "100,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 5,
                        "title": "Cancelamento ou Atraso de voo (superior 8h)",
                        "name": "Cancelamento ou Atraso de voo (superior 8h)",
                        "slug": "atraso-de-voo",
                        "highlight": "",
                        "content": "",
                        "display_order": 8
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 6,
                        "title": "Perda de bagagem",
                        "name": "Perda de bagagem",
                        "slug": "perda-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 5
                    }
                },
                {
                    "is": "500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 7,
                        "title": "Cancelamento de viagem",
                        "name": "Cancelamento de viagem",
                        "slug": "cancelamento-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 9
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 9,
                        "title": "Hospedagem de acompanhante do segurado",
                        "name": "Hospedagem de acompanhante do segurado",
                        "slug": "hospedagem-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 17
                    }
                },
                {
                    "is": "200,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 10,
                        "title": "Interrupção de viagem",
                        "name": "Interrupção de viagem",
                        "slug": "interrupcao-de-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 11
                    }
                },
                {
                    "is": "10000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 11,
                        "title": "Invalidez permanente total ou parcial por acidente em viagem",
                        "name": "Invalidez permanente total ou parcial por acidente em viagem",
                        "slug": "invalidez-permanente-total-ou-parcial-por-acidente",
                        "highlight": "",
                        "content": "",
                        "display_order": 20
                    }
                },
                {
                    "is": "10000,00",
                    "coverage_type": "BRL",
                    "coverage": {
                        "id": 12,
                        "title": "Morte acidental em viagem",
                        "name": "Morte acidental em viagem",
                        "slug": "morte-acidental",
                        "highlight": "",
                        "content": "",
                        "display_order": 21
                    }
                },
                {
                    "is": "400,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 13,
                        "title": "Prorrogação de estadia",
                        "name": "Prorrogação de estadia",
                        "slug": "prorrogacao-de-estadia",
                        "highlight": "",
                        "content": "",
                        "display_order": 15
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 14,
                        "title": "Regresso sanitário",
                        "name": "Regresso sanitário",
                        "slug": "regresso-sanitário",
                        "highlight": "",
                        "content": "",
                        "display_order": 18
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 15,
                        "title": "Retorno antecipado de acompanhantes",
                        "name": "Retorno antecipado de acompanhantes",
                        "slug": "retorno-de-acompanhante",
                        "highlight": "",
                        "content": "",
                        "display_order": 13
                    }
                },
                {
                    "is": "1500,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 16,
                        "title": "Retorno antecipado do segurado",
                        "name": "Retorno antecipado do segurado",
                        "slug": "retorno-antecipado-do-segurado",
                        "highlight": "",
                        "content": "",
                        "display_order": 12
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 17,
                        "title": "Traslado de corpo",
                        "name": "Traslado de corpo",
                        "slug": "traslado-de-corpo",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "20000,00",
                    "coverage_type": "EUR",
                    "coverage": {
                        "id": 18,
                        "title": "Traslado médico",
                        "name": "Traslado médico",
                        "slug": "traslado-medico",
                        "highlight": "",
                        "content": "",
                        "display_order": 19
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 22,
                        "title": "Concierge",
                        "name": "Concierge",
                        "slug": "concierge",
                        "highlight": "",
                        "content": "",
                        "display_order": 23
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 23,
                        "title": "Auxílio na localização de bagagem",
                        "name": "Auxílio na localização de bagagem",
                        "slug": "auxilio-na-localizacao-de-bagagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 24
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 24,
                        "title": "Transferência de fundos",
                        "name": "Transferência de fundos",
                        "slug": "transferencia-de-fundos",
                        "highlight": "",
                        "content": "",
                        "display_order": 25
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 25,
                        "title": "Transmissão de mensagens urgentes",
                        "name": "Transmissão de mensagens urgentes",
                        "slug": "transmissao-de-mensagens-urgentes",
                        "highlight": "",
                        "content": "",
                        "display_order": 26
                    }
                },
                {
                    "is": "0,00",
                    "coverage_type": "INCLUSO",
                    "coverage": {
                        "id": 26,
                        "title": "Informação em caso de perda ou roubo de documentos",
                        "name": "Informação em caso de perda ou roubo de documentos",
                        "slug": "informacao-em-caso-de-perda-ou-roubo-de-documentos",
                        "highlight": "",
                        "content": "",
                        "display_order": 27
                    }
                },
                {
                    "is": "2500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 30,
                        "title": "Fiança e Despesas Legais",
                        "name": "Fiança e Despesas Legais",
                        "slug": "despesas-com-fianca-e-despesas-legais-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "is": "1000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 31,
                        "title": "Assistência Jurídica",
                        "name": "Assistência Jurídica",
                        "slug": "despesas-juridicas-em-viagem",
                        "highlight": "",
                        "content": "",
                        "display_order": 22
                    }
                },
                {
                    "additional_id": 47,
                    "is": "30000,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 1,
                        "title": "Despesas médicas e hospitalares por COVID 19",
                        "name": "Despesas médicas e hospitalares por COVID 19",
                        "slug": "dmh-covid-5k",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                },
                {
                    "additional_id": 47,
                    "is": "1500,00",
                    "coverage_type": "USD",
                    "coverage": {
                        "id": 2,
                        "title": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "name": "Prorrogação obrigatória de viagem (QUARENTENA) devido a diagnóstico de COVID-19",
                        "slug": "prorrogacao-obrigatoria-de-viagem-quarentena-devido-a-diagnostico-de-covid-19",
                        "highlight": "",
                        "content": "",
                        "display_order": null
                    }
                }
            ]
        }
    ],
    "notifications": []
}*/