import React from "react";
import Select, { StylesConfig, components } from "react-select";

interface Props {
  placeholder: string;
  options: any;
}

const customStyles: StylesConfig = {
  control: (base: any, state: any) => ({
    ...base,
    color: "white",
    background: "#373737",
    borderColor: state.isFocused ? "#c53458" : "#373737",
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      borderColor: state.isFocused ? "#c53458" : "#4d4d4d",
    },
  }),
  option: (styles) => {
    return {
      ...styles,
      color: "white",
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: "#c53458",
    borderRadius: "none",
    backgroundColor: "#4d4d4d",
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: "white",
    borderRadius: "none",
    backgroundColor: "#4d4d4d",
    ":hover": {
      backgroundColor: "#4d4d4d",
      color: "#c53458",
    },
  }),
};

const CaretDownIcon = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 5.625L7.5 9.375L11.25 5.625"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  );
};

const MultiSelectField = ({ placeholder, options }: Props) => {
  return (
    <Select
      placeholder={placeholder}
      isMulti
      options={options}
      styles={customStyles}
      components={{ DropdownIndicator }}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          neutral0: "#373737",
          primary25: "#4d4d4d",
          neutral90: "white",
        },
      })}
    />
  );
};

export default MultiSelectField;
