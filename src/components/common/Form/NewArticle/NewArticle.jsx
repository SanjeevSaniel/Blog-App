import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";

import axios from "axios";
import { URLContext } from "../../../../App";
import FormInput from "./../FormInput/FormInput";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const NewArticle = ({ handleClick }) => {
  const URL = useContext(URLContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");
  // const [dateAdded, setDateAdded] = useState("");
  const [url, setUrl] = useState("");

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleAdd = async (e) => {
    e.preventDefault();

    const dateAdded = new Date();

    const post = await axios.post(`${URL}BollywoodArticles`, {
      url,
      link,
      title,
      description,
      category,
      dateAdded: `${days[dateAdded.getDay()]}, ${dateAdded.getDate()}-${
        monthNames[dateAdded.getMonth()]
      }-${dateAdded.getFullYear()}`,
    });

    console.log("Date: ", dateAdded);
    console.log("Successfully Posted", post);

    handleClick(false);
  };

  return (
    <div>
      <Form
        style={{
          fontSize: "2rem",
          fontFamily: "sans-serif",
          marginBottom: "10rem",
        }}
        onSubmit={handleAdd}
      >
        <FormInput
          placeholder="Title"
          type="text"
          controlId="title"
          // label="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <FloatingLabel
          controlId="description"
          label="Description"
          className="mb-3"
          onChange={(e) => setDescription(e.target.value)}
        >
          <Form.Control as="textarea" />
        </FloatingLabel>

        <FormInput
          placeholder="Category"
          type="text"
          controlId="category"
          // label="Category"
          onChange={(e) => setCategory(e.target.value)}
        />

        <FloatingLabel
          controlId="link"
          label="Article Link"
          className="mb-3"
          onChange={(e) => setLink(e.target.value)}
        >
          <Form.Control as="textarea" />
        </FloatingLabel>

        <FloatingLabel
          controlId="url"
          label="Photo url"
          className="mb-3"
          onChange={(e) => setUrl(e.target.value)}
        >
          <Form.Control as="textarea" />
        </FloatingLabel>

        <Button
          // onClick={setShowForm(false)}
          style={{ fontSize: "1.5rem", float: "right" }}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewArticle;
