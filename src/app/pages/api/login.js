import axios from "axios";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { email, password } = req.body;

        try {
            const response = await axios.post("http://localhost:5000/login", {
                email,
                password,
            });

            const { token } = response.data;
            if (token) {
                res.status(200).json({ token });
            } else {
                res.status(400).json({ error: "Token tidak ditemukan" });
            }
        } catch (error) {
            res.status(500).json({ error: "Terjadi kesalahan saat login" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}