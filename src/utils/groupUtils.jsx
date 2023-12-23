export const groupStatus = (tickets) => {
    const groupedStatus={};
    tickets.forEach((ticket) => {
        const status = ticket.status;
        if (!groupedStatus[status]) {
            groupedStatus[status] = [];
        }
        groupedStatus[status].push(ticket);
    })
    return groupedStatus;
}
export const groupUsers = (tickets) => {
    const groupedUsers={};
    tickets.forEach((ticket) => {
        const uId = ticket.userId;
        if (!groupedUsers[uId]) {
            groupedUsers[uId] = [];
        }
        groupedUsers[uId].push(ticket);
    })
    return groupedUsers;
}
export const groupPriority = (tickets) => {
    const groupedPriority={};
    tickets.forEach((ticket) => {
        const priority = ticket.priority;
        if (!groupedPriority[priority]) {
            groupedPriority[priority] = [];
        }
        groupedPriority[priority].push(ticket);
    })
    return groupedPriority;
}
    

