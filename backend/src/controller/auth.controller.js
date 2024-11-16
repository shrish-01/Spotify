import { User } from "../models/user.model.js"

export const authCallback = async (req, res) => {
    try {
        const { id, firstName, lastName, imageUrl } = req.body;
        // if user already exists:
        const user = await User.findOne({
            clerkId: id,
        });

        if(!user) {
            // signup
            await User.create({
                clerkId: id,
                fullName: `${firstName} ${lastName}`,
                imageUrl: imageUrl
            });
        };

        res.status(200).json({success: true});
    } catch (error) {
        console.log("Error in auth callback");
        res.status(500).json({success: false});
    }
}