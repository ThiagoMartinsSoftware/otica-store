import pool from "./database.js";

async function testarConexao() {
    try {
        const resultado = await pool.query("SELECT NOW()");

        console.log("Conexão realizada com sucesso!");
        console.log(resultado.rows);

    } catch (erro) {
        console.error("Erro ao conectar:", erro.message);

    } finally {
        await pool.end();
    }
}

testarConexao();