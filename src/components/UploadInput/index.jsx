/* eslint-disable react/prop-types */
import { Container } from "./styles"
import Upload from "../../assets/icons/Upload.svg";


export function UploadInput({ title, ...rest }) {
  return (
    <Container>
      <label>Imagem do prato</label>
      <div>
        <label htmlFor="photo">
          <img src={Upload} />
          {title}
          <input id="photo" type="file" {...rest} />
        </label>
      </div>
    </Container>
  )
}