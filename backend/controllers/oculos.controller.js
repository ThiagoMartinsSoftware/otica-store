const oculos = [];

export function listarOculos(req, res) {
    res.json(oculos);
}


export function buscarOculosPorId(req, res) {
    const id = Number(req.params.id);

    const oculosEncontrado = oculos.find(item => item.id === id);

    if (!oculosEncontrado) {
        return res.status(404).json({
            mensagem: "Óculos não encontrado!"
        });
    }

    res.json(oculosEncontrado);
}


export function atualizarOculos(req, res) {
    const id = Number(req.params.id);

    const indice = oculos.findIndex(item => item.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Óculos não encontrado!"
        });
    }

    oculos[indice] = {
        id,
        ...req.body
    };

    res.json({
        mensagem: "Óculos atualizado com sucesso!",
        oculos: oculos[indice]
    });
}




export function excluirOculos(req, res) {
    const id = Number(req.params.id);

    const indice = oculos.findIndex(item => item.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Óculos não encontrado!"
        });
    }

    oculos.splice(indice, 1);

    res.json({
        mensagem: "Óculos excluído com sucesso!"
    });
}


export function cadastrarOculos(req, res) {
   const dados = {
    id: oculos.length + 1,
    ...req.body
};

oculos.push(dados);

    res.status(201).json({
        mensagem: "Óculos cadastrado com sucesso!",
        oculos: dados
    });
}