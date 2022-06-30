import type { RequestHandler } from "@sveltejs/kit";
import postgres from 'postgres';

let staffArray: Staff[] = []; //to be in the database

//https://www.npmjs.com/package/postgres#connection-details

const postgresql = require("full_stack_db");
const sqlConnection = postgres('postgres://postgres:postgres@localhost:5432/full_stack_db');
  export default sqlConnection;

export const handle = async ({ event, resolve}) => {
  const sqlconnection =  postgres({'postgres://postgres:postgres@localhost:5432/full_stack_db'});
  export default sqlconnection;

  event.locals = {
    sqlconnection = sqlconnection
  };
  const response = await resolve(event);
  return response;

}


// get --auto create a staff.json file --:RequestHandler is typescript
export async function get() {
  return {
    status: 200,
    body: staffArray
  }
}

// post
export const post: RequestHandler = async ({ request }) => {
  const staffData = await request.formData();
  staffArray.push({
    firstname: staffData.get('firstname') as string,
    lastname: staffData.get('lastname') as string
  });

  return {
    status: 303,
    headers: {
      location: "/src/routes/staffDetails.svelte"
    },
    body: staffData.get('firstname') as string,
    lastname: staffData.get('lastname') as string
  }
}

// export async function get({  }) {
//     const member = await 
// }