import { Container, Dot, Header, Item, Row, Table } from "./styles";

export function History() {
  let status = 1;

  return (
    <Container>
      <label><span>Histórico de </span>Pedidos</label>
      <div>
        <Item>
          <div>
            <div>
              <p>000004</p>
            </div>
            <div>
              <Dot />
              <p>Pendente</p>
            </div>
            <div>
              <p>20/05 às 18h00</p>
            </div>
          </div>
          <div>
            <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
          </div>
        </Item>
        <Item>
          <div>
            <div>
              <p>000004</p>
            </div>
            <div>
              <Dot />
              <p>Pendente</p>
            </div>
            <div>
              <p>20/05 às 18h00</p>
            </div>
          </div>
          <div>
            <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
          </div>
        </Item>
        <Item>
          <div>
            <div>
              <p>000004</p>
            </div>
            <div>
              <Dot />
              <p>Pendente</p>
            </div>
            <div>
              <p>20/05 às 18h00</p>
            </div>
          </div>
          <div>
            <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
          </div>
        </Item>
        <Table>
          <Header>
            <div>
              <h1>Status</h1>
            </div>
            <div>
              <h1>Código</h1>
            </div>
            <div>
              <h1>Detalhamento</h1>
            </div>
            <div>
              <h1>Data e hora</h1>
            </div>
          </Header>
          <Row>
            <div>
              <Dot $status={status}/>
              <p>Pendente</p>
            </div>
            <div>
              <p>00000004</p>
            </div>
            <div>
              <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
            </div>
            <div>
              <p>20/05 às 18h00</p>
            </div>
          </Row>
          <Row>
            <div>
              <Dot />
              <p>Pendente</p>
            </div>
            <div>
              <p>00000003</p>
            </div>
            <div>
              <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
            </div>
            <div>
              <p>20/05 às 18h00</p>
            </div>
          </Row>
          <Row>
            <div>
              <Dot />
              <p>Pendente</p>
            </div>
            <div>
              <p>00000002</p>
            </div>
            <div>
              <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
            </div>
            <div>
              <p>20/05 às 18h00</p>
            </div>
          </Row>
          <Row>
            <div>
              <Dot />
              <p>Pendente</p>
            </div>
            <div>
              <p>00000001</p>
            </div>
            <div>
              <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
            </div>
            <div>
              <p>20/05 às 18h00</p>
            </div>
          </Row>
        </Table>
      </div>
    </Container>
  )
}