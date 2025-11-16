export default function DetalhesProduto() {
    return (
        <>
            <div class="container">
                <h3 id="form-title">Novo Aluno</h3>
                <div class="card">
                    <div class="mb-3">
                        <strong>ID</strong>&nbsp;
                        <span>1</span>
                    </div>
                    <div class="mb-3">
                        <strong>Produto</strong>&nbsp;
                        <span>Camiseta</span>
                    </div>
                    <div class="mb-3">
                        <strong>Categoria</strong>&nbsp;
                        <span>Vestuário</span>
                    </div>
                    <div class="mb-3">
                        <strong>Preço</strong>&nbsp;
                        <span>159.90</span>
                    </div>
                    <div class="mb-3">
                        <strong>Qtd. Estoque</strong>&nbsp;
                        <span>459</span>
                    </div>
                    <div class="d-flex gap-2">
                        <a id="btn-cancel" class="btn btn-secondary" href="/">Cancelar</a>
                    </div>
                </div>
            </div>
        </>
    );
}