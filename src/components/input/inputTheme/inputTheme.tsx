import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const primaryInput = definePartsStyle({
  field: {
    border: "1px solid",
    borderColor: "#5A5A5A",
    background: "#1E1E1E",
    borderRadius: "2px",
    fontSize: "12px",
    _placeholder: { color: "white" },
  },
});

const loadInput = definePartsStyle({
  field: {
    border: "1px solid",
    borderColor: "#5A5A5A",
    background: "#1E1E1E",
    borderRadius: "2px",
    _placeholder: { color: "white" },

    fontSize: "14px",
    textAlign: "center",
    maxWidth: "64px",
  },
});

const primaryInput2 = definePartsStyle({
  field: {
    border: "1px solid #323232",
    background: "#323232",
    borderRadius: "10px",
    fontSize: "16px",
    width: "100%",
    height: "48px",
    _placeholder: { color: "#B7B7B7", fontSize: "16px" },
  },
});

export const inputTheme = defineMultiStyleConfig({
  variants: { primaryInput, loadInput, primaryInput2 },
});
