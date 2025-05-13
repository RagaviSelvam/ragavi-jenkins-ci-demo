// Author: Ragavi Selvam
// Purpose: Demonstration app for Jenkins CI pipeline

function showMessage() {
    const timestamp = new Date().toISOString();
    console.log(`CI Pipeline Test - Run on ${timestamp}`);
    console.log("Hello from Ragavi's Jenkins CI Demo Project!");
}

showMessage();
