import { AZUL, PRIMARY, ROSA, VERDE } from '../configs'

export const produts =
    [
        {
            id: 1,
            name: "Cachorro-quente",
            Image: require('../assets/imgs/comida.png'),
            price: 1200,
            gm: 100,

            description: "Um pãozinho recheado com uma salsicha, geralmente acompanhado de molho de tomate, mostarda, ketchup, cebola, e outras coberturas.",
        }, {
            id: 2,
            name: "Hambúrguer",
            Image: require('../assets/imgs/Rectangle5.png'),
            price: 500,
            gm: 200,

            description: "Carne moída grelhada ou frita, geralmente servida dentro de um pão com diversos acompanhamentos, como alface, tomate, queijo, e molhos.",
        }, {
            id: 3,
            name: "Peixe e batatas fritas",
            Image: require('../assets/imgs/comida1.png'),
            price: 200,
            gm: 300,

            description: "Peixe empanado e frito, servido com batatas cortadas em tiras e também fritas. Pode ser acompanhado de molho tártaro.",
        }
        , {
            id: 4,
            name: "Peixe fritas",
            Image: require('../assets/imgs/comida2.png'),
            price: 700,
            gm: 400,
            description: "Peixe empanado e frito, servido com batatas cortadas em tiras e também fritas. Pode ser acompanhado de molho tártaro.",
        }
    ]

export const PaymentMZ =
    [
        {
            id: 1,
            prince: 4,
            name: "M-Pesa ",
            Image: require('../assets/imgs/mpesalogo.png'),
            description: "Uma variedade de ",
        }, {
            id: 2,
            prince: 0,
            name: "E-Mola ",
            Image: require('../assets/imgs/emola.png'),
            description: "Pedaços de frango .",
        }, {
            id: 3,
            prince: 0,
            name: "MKesh ",
            Image: require('../assets/imgs/mkesh.png'),
            description: "Uma salada feita com ",
        }
    ]

export const OthersProduts =
    [
        {
            id: 1,
            prince: 100.80,
            gm: 100,
            color: AZUL,
            name: "Sushi",
            Image: require('../assets/imgs/Rectangle9.png'),
            description: "Uma variedade de ",
        }, {
            id: 2,
            prince: 200.80,
            gm: 200,
            color: VERDE,
            name: "Frango ao curry",
            Image: require('../assets/imgs/Rectangle6.png'),
            description: "Pedaços de frango .",
        }, {
            id: 3,
            prince: 300.80,
            gm: 400,
            color: ROSA,
            name: "Salada Caesar",
            Image: require('../assets/imgs/Rectangle8.png'),
            description: "Uma salada feita com ",
        }
    ]

export const AnimalCategory =
    [
        {
            id: 1,
            name: 'Cat',
        }, {
            id: 2,
            name: 'Dog',
        },
        {
            id: 3,
            name: 'Pug',
        },
        {
            id: 4,
            name: 'Robbit',
        }, {
            id: 5,
            name: 'turtle',
        }
    ]

