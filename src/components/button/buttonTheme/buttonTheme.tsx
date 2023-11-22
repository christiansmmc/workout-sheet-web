import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const primaryActionButton = defineStyle({
  border: "1px solid #5A5A5A",
  color: "white",
  borderRadius: "2px",
  textColor: "white",
  marginTop: "12px",
  fontSize: "12px",
  fontWeight: "bold",
  width: "100%",
});

const PrimaryActionButtonNewUi = defineStyle({
  backgroundColor: "#d60e0e",
  borderRadius: "10px",
  textColor: "white",
  marginTop: "12px",
  fontSize: "14px",
  width: "100%",
  height: "48px",
});

export const buttonTheme = defineStyleConfig({
  variants: { primaryActionButton, PrimaryActionButtonNewUi },
});
