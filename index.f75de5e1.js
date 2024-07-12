"use strict";
const pushNotification = (posTop, posRight, title, description, type)=>{
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.style.top = `${posTop}px`;
    notification.style.right = `${posRight}px`;
    const titleElement = document.createElement("h2");
    titleElement.className = "title";
    titleElement.textContent = title;
    notification.appendChild(titleElement);
    const messageElement = document.createElement("p");
    messageElement.textContent = description;
    notification.appendChild(messageElement);
    document.body.appendChild(notification);
    setTimeout(()=>{
        notification.style.display = "none";
    }, 2000);
};
pushNotification(10, 10, "Title of Success message", "Message example.\n Notification should contain title and description.", "success");
pushNotification(150, 10, "Title of Error message", "Message example.\n Notification should contain title and description.", "error");
pushNotification(290, 10, "Title of Warning message", "Message example.\n Notification should contain title and description.", "warning");

//# sourceMappingURL=index.f75de5e1.js.map