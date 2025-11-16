export default function ListaProdutos() {
  return (
    <>
      <main class="container py-4">
        <div class="row">
          <div class="col-12">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h3 class="mb-0">Lista de Produtos</h3>
            </div>
            <div class="card">
              <div class="card-body p-2">
                <div class="table-responsive">
                  <table id="alunos-table" class="table table-sm table-hover mb-0">
                    <thead class="table-light">
                      <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Categoria</th>
                        <th>Preço</th>
                        <th>Qtd. Estoque</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Camiseta</td>
                        <td>Vestuário</td>
                        <td>159.90</td>
                        <td>459</td>
                        <td><a href='/product/1' class= "btn btn-sm btn-primary">Detalhes</a></td>
                      </tr>
                      <tr>
                        <td>45</td>
                        <td>Calça cós alto</td>
                        <td>Vestuário</td>
                        <td>249.90</td>
                        <td>59</td>
                        <td><a href='/product/45' class= "btn btn-sm btn-primary">Detalhes</a></td>
                      </tr>
                      <tr>
                        <td>28</td>
                        <td>Porta retrato</td>
                        <td>Decoração</td>
                        <td>89.90</td>
                        <td>8</td>
                        <td><a href='/product/28' class= "btn btn-sm btn-primary">Detalhes</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}