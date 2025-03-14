let createTask = (description, day, month, year, hour, minute) => {
    let date = new Date(year, month - 1, day, hour, minute);
    let now = new Date();
    if (date < now) {
        return false;
    }
    return true;
}
module.exports = { createTask };