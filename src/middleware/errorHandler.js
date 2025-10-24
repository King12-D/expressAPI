export const errorHandler = (err, req, res, next) => {
    console.log("Error:", err.message);
    const statusCode = err.statusCode;
    const message = err.message || "Something went wrong";

    res.status(400).json({
        status: statusCode,
        message: message,
        success: false
    });
};