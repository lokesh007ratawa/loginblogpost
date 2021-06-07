import React from "react";
import { TextField } from "@material-ui/core";
import { ErrorMessage, useField } from "formik";

export const Textfields = ({ label, chck, ...props }) => {
  const [field, metas] = useField(props);
  console.log("field name check",field.name);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-start",
        // backgroundColor: "red",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          minWidth: "28%",
        }}
      >
        <label htmlFor={field.name}>{label}</label>
      </div>
      <div
        style={{
          minWidth:"50%",
          marginBottom:"16px",
          marginRight:"15%",display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        {" "}
        <TextField
          className={`${metas.touched && metas.error && "text_error"}`}
          style={{ width: "100%" }}
          variant="standard"
          {...field}
          {...props}
        />
        {/* <ErrorMessage component="div" className="error" name={field.name} /> */}
      </div>
    </div>
  );
};
