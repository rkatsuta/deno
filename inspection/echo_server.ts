const listner = Deno.listen({port: 8080});
console.log("listening on 0.0.0.0:8080");
for await (const conn of listner) {
  console.log(conn.rid + "was inputted");
  Deno.copy(conn, conn);
}
