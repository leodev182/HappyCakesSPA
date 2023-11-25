import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    comentarios: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    }
    if (!formData.apellido.trim()) {
      newErrors.apellido = "El apellido es obligatorio";
    }
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Formato de correo electrónico no válido";
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio";
    } else if (!/^\d+$/.test(formData.telefono)) {
      newErrors.telefono = "Número de teléfono inválido";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Formulario enviado:", formData);

      // Para reiniciar los valores del formulario
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        comentarios: "",
      });

      // Para reiniciar los errores
      setErrors({});
    }
  };

  return (
    <>
      <div
        style={{
          paddingTop: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>Cuéntanos ¿en qué te podemos ayudar?</h1>
      </div>
      <Container className="mt-5">
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="nombre">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  isInvalid={!!errors.nombre}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.nombre}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="apellido">
                <Form.Label>Apellido:</Form.Label>
                <Form.Control
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleInputChange}
                  isInvalid={!!errors.apellido}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.apellido}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label>Correo:</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="telefono">
                <Form.Label>Teléfono:</Form.Label>
                <Form.Control
                  type="text"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  isInvalid={!!errors.telefono}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.telefono}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId="comentarios">
                <Form.Label>Comentarios:</Form.Label>
                <Form.Control
                  as="textarea"
                  name="comentarios"
                  value={formData.comentarios}
                  onChange={handleInputChange}
                  isInvalid={!!errors.comentarios}
                  rows={4}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.comentarios}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit">Enviar</Button>
        </Form>
      </Container>
    </>
  );
};
