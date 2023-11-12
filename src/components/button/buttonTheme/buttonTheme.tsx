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

export const buttonTheme = defineStyleConfig({
    variants: { primaryActionButton },
});
