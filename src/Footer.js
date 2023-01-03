import Sheet from "@mui/joy/Sheet"
import Typography from "@mui/joy/Typography"

const Footer = () => {
    return (
        <div>
            <Sheet sx={{
                width: "100%",
                maxWidth: "720px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2,
                px: 4,
                my: 1,
                mx: "auto",
                borderRadius: 20,
            }}>
                <Typography level="h6" sx={{
                    width: "100%",
                    textAlign: 'end'
                }}>
                    Made by Tigran <Typography level="body2">using Joy UI</Typography>
                </Typography>

            </Sheet>
        </div>
    )
}

export default Footer