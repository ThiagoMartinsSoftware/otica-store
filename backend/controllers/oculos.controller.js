const oculos = [];

export function listarOculos(req, res) {
    res.json(oculos);
}

export function cadastrarOculos(req, res) {
    const dados = req.body;

    oculos.push(dados);

    res.status(201).json({
        mensagem: "Óculos cadastrado com sucesso!",
        oculos: dados
    });
}