import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    solidBg: "#E6A919",
                    solidHoverBg: "#E69C16",
                    solidActiveBg: "#E68E13",
                },
                info: {
                    solidBg: "#00B8D4",
                    solidHoverBg: "#00B0D1",
                    solidActiveBg: "#00A8CF",
                },
                success: {
                    solidBg: "#2DA44E",
                    solidHoverBg: "#2C974B",
                    solidActiveBg: "#298E46",
                },
                warning: {
                    solidBg: "#FFAB00",
                    solidHoverBg: "#FFA200",
                    solidActiveBg: "#FF9900",
                },
                danger: {
                    solidBg: "#D0021B",
                    solidHoverBg: "#CF0019",
                    solidActiveBg: "#CE0018",
                },
                neutral: {
                    outlinedBg: "#F6F8FA",
                    outlinedHoverBg: "#F3F4F6",
                    outlinedActiveBg: "rgba(238, 239, 242, 1)",
                    outlinedBorder: "rgba(27, 31, 36, 0.15)",
                },
                focusVisible: "rgba(3, 102, 214, 0.3)",
            },
        },
        dark: {
            palette: {
                primary: {
                    solidBg: "#9E9E9E",
                    solidHoverBg: "#757575",
                    solidActiveBg: "#616161",
                },
                info: {
                    solidBg: "#00B0FF",
                    solidHoverBg: "#00A5E5",
                    solidActiveBg: "#0099CC",
                },
                success: {
                    solidBg: "#00C853",
                    solidHoverBg: "#00BB4D",
                    solidActiveBg: "#00AE47",
                },
                warning: {
                    solidBg: "#FB8C00",
                    solidHoverBg: "#F57C00",
                    solidActiveBg: "#EF6C00",
                },
                danger: {
                    solidBg: "#B71C1C",
                    solidHoverBg: "#A40000",
                    solidActiveBg: "#920000",
                },
                neutral: {
                    outlinedBg: "#212121",
                    outlinedHoverBg: "#282828",
                    outlinedActiveBg: "#212121",
                    outlinedBorder: "rgba(255, 255, 255, 0.15)",
                },
                focusVisible: "rgba(255, 255, 255, 0.3)",
            },
        },
    },
    fontFamily: {
        body: "-apple-system,BlinkMacSystemFont, Roboto, Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
    },
    focus: {
        default: {
            outlineWidth: "1px",
            outlineOffset: "1px",
            outlineColor: "#339af0",
        },
    },
    components: {
        JoyButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    transition: "initial",
                    borderRadius: "4px",
                    fontWeight: 600,
                    ...(ownerState.size === "md" && {
                        minHeight: "36px",
                        fontSize: "14px",
                        paddingInline: "18px",
                    }),
                    "&:active": {
                        transform: "translateY(1px)",
                    },
                }),
            },
        },
    },
});

export default theme;
