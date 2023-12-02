import { ListAllTickets } from '../vendor/ticket/ListAllTickets';

export default async function Index() {
  const response = await ListAllTickets();
  console.log(response);

  return (
    <div className="px-64 w-full flex flex-col py-4">
      <section className="ml-16">
        <h2 className="text-lg font-medium text-blue-600">All Tickets</h2>
      </section>
    </div>
  );
}
