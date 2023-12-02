export const ListAllTickets = async () => {
    const allTickets = await fetch('http://127.0.0.1:8000/api/tickets');
    const {data, message} = await allTickets.json();
    return {message, data};
}