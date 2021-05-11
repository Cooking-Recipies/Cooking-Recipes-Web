import { useState } from "react";

const EditProfile = () => {
    const [profile, setProfile] = useState({
        id: 0,
        user_id: 0,
        profile_photo_id: 0,
        user_name: '',
        description: '',
        created_at: '',
        updated_at: ''
    });

    return(
        <div></div>
    );
}

export default EditProfile;