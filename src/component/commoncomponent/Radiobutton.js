import React from "react";

import '../../App.css';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const renderOptions = (options) => {
  return options.map((option) => (
    <FormControlLabel
      key={option}
      value={option}
      control={<Radio />}
      label={option}
    />
  ));
};

export const Radiobutton = ({
  field,
  form: { touched, errors },
  name,
  options,
  children,
  ...props
}) => {
  const fieldName = name || field.name;

  return (
    <React.Fragment>
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
        <label htmlFor={field.name}>Gender</label>
      </div>
      <div 
        style={{
          minWidth:"50%",
          marginBottom:"16px",
          marginRight:"15%",display: "flex",
          flexWrap: "wrap"
        }}
      >
        <RadioGroup row {...field} {...props} name={fieldName}>
        {/* Here you either map over the props and render radios from them,
         or just render the children if you're using the function as a child*/}
        {options ? renderOptions(options) : children}
      </RadioGroup>
      </div>
    </div>
      
    </React.Fragment>
  );
};
