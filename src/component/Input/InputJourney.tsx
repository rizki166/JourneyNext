import { Box, Button } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';

export const InputJourney = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%", mt: 2 }}>
            <input
                placeholder="Find Journey"
                style={{
                    width: "80%",
                    backgroundColor: "white",
                    border: "1px solid #ccc",
                    borderRadius: "10px 0 0 10px",
                    padding: "10px 15px",
                    outline: "none",
                    fontSize: "16px",
                    transition: "border-color 0.3s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#4486de")}
                onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
            <Button
                sx={{
                    backgroundColor: "#4486de",
                    color: "white",
                    borderRadius: "0 10px 10px 0",
                    minWidth: "50px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    '&:hover': {
                        backgroundColor: "#357ABD",
                    },
                }}
            >
                Search
            </Button>
        </Box>
    );
}

export default InputJourney;
