import { Cliente, ClienteModel } from "../models/cliente.model";

export class RotaService {
    public async get(): Promise<GetRotaResponse> {
        const clientes = await ClienteModel.list();

        // Inserção de um cliente falso para representar a origem (0, 0)
        const origem: Cliente = {
            nome: "origem",
            email: "",
            telefone: "",
            coord_x: 0,
            coord_y: 0,
        }

        const ordered = this.shortestPath([origem, ...clientes]);
        return {
            clientes: ordered.splice(1)
        }
    }

    /*  Buscar a menor rota entre clientes equivale ao conhecido "problema do
    *   caixeiro-viajante". Existem vários algoritmos para solucionar esse problema.
    *   A simples iteração dos pontos para calcular o melhor caminho resulta em uma
    *   sequencia combinatório com complexidade O(n!), logo é preciso utilizar
    *   alguma heurística para aproximar o caminho ideal.
    *
    *   Um bom compromisso entre processamento e exatidão é utilizar um algoritmo
    *   2-opt, também chamado de algoritimo de monte carlo, que calcula a distância
    *   total dos pontos no estado inicial, e então realiza permitação de conexões
    *   entre pontos e compara a nova distância total, até o fim das possíveis
    *   permutações.
    */


    // Usando Monte Carlo, permutação 2-opt
    private shortestPath(clientes: Cliente[]): Cliente[] {
        let shortest = this.pathLength(clientes);
        let tempClientes = clientes;

        for (let i = 0; i < tempClientes.length - 2; i++) {
            for (let j = i + 2; j < tempClientes.length - 1; j++) {
                // console.log("permutating " + i + " + " + j);
                let reorderedClientes = this.permutation(tempClientes, i, j);
                let newLength = this.pathLength(reorderedClientes);

                if (newLength < shortest) {
                    tempClientes = reorderedClientes;
                    shortest = newLength;
                }
            }
        }

        return tempClientes;
    }

    private distance(first: Cliente, last: Cliente) {
        const dx = first.coord_x - last.coord_x;
        const dy = first.coord_y - last.coord_y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }

    private pathLength(clientes: Cliente[]) {
        let length = 0;

        for (let i = 0; i < clientes.length - 1; i++) {
            length += this.distance(clientes[i], clientes[i + 1]);
        }

        return length;
    }

    private permutation(clientes: Cliente[], i: number, j: number): Cliente[] {
        const before = clientes.slice(0, i + 1);
        const during = clientes.slice(i + 1, j + 1).reverse();
        const after = clientes.slice(j + 1);
        const reordered = [...before, ...during, ...after];
        return reordered;
    }
}

export interface GetRotaResponse {
    clientes: Cliente[],
}