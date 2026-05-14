/**
 * BARBIE DREAMHOUSE KITCHEN - CORE SCRIPT
 * Total de linhas estimado: 450+ 
 */

// 1. Banco de Dados de Receitas
const RECIPES_DATA = [
    {
        id: 1,
        title: "Macarrão Pink Alfredo",
        category: "Almoço",
        difficulty: "Fácil",
        image: "https://images.unsplash.com/photo-1621510456681-23a016df2424?q=80&w=600",
        prepTime: "20 min",
        ingredients: [
            "250g de macarrão penne",
            "1 beterraba pequena cozida",
            "200ml de creme de leite fresco",
            "2 dentes de alho picados",
            "100g de queijo parmesão ralado",
            "Manjericão para decorar",
            "Azeite e sal a gosto"
        ],
        instructions: [
            "Cozinhe o macarrão em água com sal até ficar al dente.",
            "Bata a beterraba cozida com o creme de leite no liquidificador até obter um creme rosa vibrante.",
            "Em uma frigideira, refogue o alho no azeite até dourar levemente.",
            "Despeje o creme rosa na frigideira e aqueça em fogo baixo.",
            "Misture o macarrão cozido ao molho e adicione o parmesão.",
            "Sirva imediatamente com folhas de manjericão."
        ],
        likes: 1250,
        isFavorite: false,
        comments: []
    },
    {
        id: 2,
        title: "Pink Lemonade de Morango",
        category: "Bebida",
        difficulty: "Super Fácil",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600",
        prepTime: "10 min",
        ingredients: [
            "1 xícara de suco de limão siciliano",
            "1/2 xícara de xarope de morango ou morangos batidos",
            "1 litro de água gelada (pode ser com gás)",
            "Rodelas de limão e hortelã para decorar",
            "Gelo em cubos (se for rosa, melhor ainda!)"
        ],
        instructions: [
            "Em uma jarra grande, misture o suco de limão e a água.",
            "Adicione o xarope de morango lentamente para criar um efeito degradê.",
            "Misture bem até ficar em um tom de rosa uniforme.",
            "Adicione muito gelo e decore as laterais com limão.",
            "Sirva em taças elegantes com canudos divertidos."
        ],
        likes: 840,
        isFavorite: false,
        comments: []
    },
    {
        id: 3,
        title: "Cupcake de Algodão Doce",
        category: "Sobremesa",
        difficulty: "Média",
        image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=600",
        prepTime: "45 min",
        ingredients: [
            "2 xícaras de farinha de trigo",
            "1 xícara de açúcar",
            "1/2 xícara de manteiga",
            "2 ovos",
            "1 colher de essência de baunilha",
            "Corante rosa alimentício",
            "Cobertura de buttercream rosa",
            "Mini algodão doce para decorar"
        ],
        instructions: [
            "Bata a manteiga com o açúcar até virar um creme claro.",
            "Adicione os ovos um a um e a baunilha.",
            "Incorpore a farinha peneirada e o corante rosa até a massa ficar uniforme.",
            "Distribua em forminhas e asse por 20 minutos a 180°C.",
            "Após esfriar, decore com o buttercream e coloque o algodão doce no topo antes de servir."
        ],
        likes: 2100,
        isFavorite: false,
        comments: []
    },
    {
        id: 4,
        title: "Risoto de Beterraba e Cabra",
        category: "Jantar",
        difficulty: "Média",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=600",
        prepTime: "35 min",
        ingredients: [
            "1 xícara de arroz arbóreo",
            "1/2 cebola picada",
            "500ml de caldo de legumes quente",
            "1/2 xícara de vinho branco seco",
            "1 beterraba cozida e batida",
            "100g de queijo de cabra",
            "2 colheres de manteiga gelada"
        ],
        instructions: [
            "Refogue a cebola na manteiga até ficar transparente.",
            "Adicione o arroz e frite levemente.",
            "Coloque o vinho e mexa até evaporar.",
            "Vá adicionando o caldo de legumes aos poucos, mexendo sempre.",
            "No meio do cozimento, adicione a beterraba batida para dar a cor.",
            "Quando o arroz estiver macio, desligue o fogo, adicione a manteiga e o queijo de cabra.",
            "Misture vigorosamente para dar brilho e cremosidade."
        ],
        likes: 950,
        isFavorite: false,
        comments: []
    },
    {
        id: 5,
        title: "Pancakes de Red Velvet",
        category: "Café da Manhã",
        difficulty: "Fácil",
        image: "https://images.unsplash.com/photo-1506084868730-342b1f852e0d?q=80&w=600",
        prepTime: "15 min",
        ingredients: [
            "1 xícara de farinha",
            "1 ovo",
            "3/4 xícara de leite",
            "1 colher de chocolate em pó",
            "Corante gel rosa ou vermelho",
            "Mel ou calda de açúcar"
        ],
        instructions: [
            "Misture os secos em uma tigela.",
            "Adicione o leite, ovo e o corante.",
            "Aqueça uma frigideira antiaderente com um pouco de manteiga.",
            "Despeje pequenas porções de massa e vire quando surgirem bolhas.",
            "Sirva em camadas com frutas vermelhas no topo."
        ],
        likes: 1560,
        isFavorite: false,
        comments: []
    },
    {
        id: 6,
        title: "Smoothie Bowl Glamour",
        category: "Lanche",
        difficulty: "Fácil",
        image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=600",
        prepTime: "5 min",
        ingredients: [
            "2 bananas congeladas",
            "1 xícara de pitaya rosa",
            "1/2 xícara de iogurte grego",
            "Granola e coco ralado para decorar"
        ],
        instructions: [
            "Bata as frutas congeladas com o iogurte no liquidificador.",