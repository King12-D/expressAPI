const sendEmail = new Promise((resolve, reject) => {
    console.log("Sending email....");

    setTimeout(() => {
        const sent = true

        if (sent) {
            resolve("Email sent");
        } else {
            reject("failed to send email");
        }
    }, 2000)
})

sendEmail.then(() => {
    console.log("Sending email...");
}).catch((error) => {
    console.error(error);
})
