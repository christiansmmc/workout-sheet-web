import {inputAnatomy} from "@chakra-ui/anatomy";
import {createMultiStyleConfigHelpers} from "@chakra-ui/react";

const {definePartsStyle, defineMultiStyleConfig} =
    createMultiStyleConfigHelpers(inputAnatomy.keys);

const primaryInput = definePartsStyle({
    field: {
        border: "1px solid",
        borderColor: "#5A5A5A",
        background: "#1E1E1E",
        borderRadius: "2px",
        fontSize: "12px",
        _placeholder: {color: "white"},
    },
});

const loadInput = definePartsStyle({
    field: {
        border: "1px solid",
        borderColor: "#5A5A5A",
        background: "#1E1E1E",
        borderRadius: "2px",
        _placeholder: {color: "white"},

        fontSize: "14px",
        textAlign: "center",
        maxWidth: "64px"
    },
});

export const inputTheme = defineMultiStyleConfig({
    variants: {primaryInput, loadInput},
});
