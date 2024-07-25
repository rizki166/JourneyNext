import API from "@/lib/call";
import { useAppDispatch } from "@/store";
import { getJourneyAsync } from "@/store/async/journey";
import { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";

interface ButtonProps {
    journeyId: number;
}

const BottonBookmark: React.FC<ButtonProps> = ({ journeyId }) => {
    const [isMarked, setIsMarked] = useState(false);
    const dispatch = useAppDispatch();

    // Function to get bookmark status
    const getMark = async () => {
        try {
            const token = localStorage.getItem("authToken") || "";
            if (!token) {
                console.error("Token tidak ditemukan");
                return;
            }

            const res = await API.get(`bookmarks`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });


            const bookmarkedJourneys = res.data.map((item: { id: number }) => item.id);
            setIsMarked(bookmarkedJourneys.includes(journeyId));
        } catch (error) {
            console.log(error);
        }
    };

    // Function to handle bookmark action
    const handleBookmark = async () => {
        try {
            const token = localStorage.getItem("authToken") || "";
            if (!token) {
                console.error("Token tidak ditemukan");
                return;
            }

            const res = await API.post(`bookmark`, { journeyId: journeyId }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            console.log(res, 'Bookmark action response');
            dispatch(getJourneyAsync());
            setIsMarked(!isMarked);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getMark();
    }, []);

    return (
        <button
            onClick={handleBookmark}
            style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 1,
                border: "1px solid #4486de",
                width: "30px",
                height: "30px",
                borderRadius: "100%",
                backgroundColor: "transparent",
                cursor: "pointer",
            }}
        >
            <CiBookmark style={{ color: isMarked ? "#4486de" : "gray" }} size={20} />
        </button>
    );
};

export default BottonBookmark;
