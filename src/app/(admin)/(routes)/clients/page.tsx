import { cookies } from "next/headers";
import { ClientInterface, columns } from "./client-columns";
import { DataTable } from "./client-data-table";

async function getData(): Promise<ClientInterface[]> {
  const cookieStore = cookies();
  const token = `${cookieStore.get("token")?.value}` || "";
  const response = await fetch(
    process.env.NEXT_PUBLIC_APP_URL + "/api/clients",
    {
      headers: {
        cookie: token,
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  );
  const data = await response.json();
  return data?.data;
}

const ClientPage = async () => {
  const data = await getData(); // Fetch data from the API
  return (
    <div className="m-6 p-6 bg-white rounded-xl shadow-md">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ClientPage;
