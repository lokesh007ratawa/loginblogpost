import React from "react";
import { Select, MenuItem } from "@material-ui/core";
import { ErrorMessage, useField } from "formik";
export const Dropdowns = ({ label, chck, ...props }) => {
  const [field, meta] = useField(props);
  console.log("drop", props,field.name);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: "green",
      }}
    >
      <div
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            minWidth: "22%",
            paddingLeft:"2%",
        }}
      >
        <label
          style={{
          }}
          htmlFor={field.name}
        > {label}
        </label>
      </div>
      <div
        style={{
            minWidth:"52%",
            marginBottom:"16px",
            marginRight:"15%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
        }}
      >
        {" "}
        <Select
          className={`${meta.touched && meta.error && "dropdown_error"}`}
          style={{ width: "100%" }}          
          {...field}
          {...props}         
        />
      </div>
     
    </div>
  );
};
