import { clerkClient } from "@clerk/express";

export const protectRoute = async (req, res, next) => {
    if(!req.auth.userId) {
        res.status(401).json({
            message: "Unauthorized, you must be logged in!",
        });
        return;
    };

    next();
};

export const requireAdmin = async (req, res, next) => {
    try {
        const currUser = await clerkClient.users.getUser(req.auth.userId);
        const isAdmin = process.env.ADMIN_URL === currUser.primaryEmailAddress?.emailAddress;

        if(!isAdmin) {
            return res.status(403).json({
                message: "Unauthorized, you must be an admin!",
            });
        }

        next();
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error: ", error
        });
    }
};