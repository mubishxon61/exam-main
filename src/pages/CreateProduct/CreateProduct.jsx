// Har bir productning id, title, description, price hossalari bo'lishi kerak.
import { useState } from "react";
import { useProducts } from "../../context/ProductContext";
import { Form, FormGroup, FormControl, FormControlLabel, Button, Schema } from "rsuite";

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  title: StringType().isRequired("Title yozing"),
  description: StringType().isRequired("Description yozing"),
  price: NumberType("Faqat raqam kiriting").isRequired("Price yozing"),
});

function CreateProduct() {
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    price: ""
  });
  const { addProduct } = useProducts();

  const handleSubmit = () => {
    addProduct(formValue);
    setFormValue({ title: "", description: "", price: "" });
  };

  return (
    <Form
      fluid
      model={model}
      formValue={formValue}
      onChange={setFormValue}
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <FormControlLabel>Title</FormControlLabel>
        <FormControl name="title" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel>Description</FormControlLabel>
        <FormControl name="description" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel>Price</FormControlLabel>
        <FormControl name="price" type="number" />
      </FormGroup>
      <Button appearance="primary" type="submit">
        Create Product
      </Button>
    </Form>
  );
}

export default CreateProduct;