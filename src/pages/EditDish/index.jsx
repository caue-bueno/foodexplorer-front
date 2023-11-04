import { ButtonWrapper, Container } from "./styles";
import { DishForm } from "../../components/DishForm";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { UploadInput } from "../../components/UploadInput";
import { IngredientsField } from "../../components/IngredientsField";
import { IngredientButton } from "../../components/IngredientButton";
import { BackButton } from "../../components/BackButton";


export function EditDish() {

  return (
    <Container>
      <BackButton />
      <DishForm title="Editar prato">
        <UploadInput title={"Selecione imagem para alterá-la"} />
        <Input
          label={"Nome"}
          placeholder={"Ex.: Salada Ceasar"}
          type="text"
        />
        {/* <option>

        </option> */}
        <IngredientsField>
          <IngredientButton value={"Pão Naan"} />
          <IngredientButton placeholder={"Adicionar"} isNew />
        </IngredientsField>
        <Input
          label={"Preço"}
          placeholder={"R$ 00,00"}
          type="text"
        />
        <TextArea
          label={"Descrição"}
          placeholder={"Fale brevemente sobre o prato, seus ingredientes e composição"}
        />
        <ButtonWrapper>
          <Button title={"Excluir prato"} />
          <Button title={"Salvar alterações"} $primary disabled/>
        </ButtonWrapper>
      </DishForm>
    </Container>
  )
}