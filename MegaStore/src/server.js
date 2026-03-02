import { createTables } from "./config/postgres.js"; 
import { migrate } from "./services/migration_services.js";


try{
    console.log("Connecting to postgres...");
    await createTables();
    console.log("Connected to postgres successfully");

    // console.log("Connecting to mongodb...");
    // await connectMongo();
    // console.log("Connected to mongodb successfully");
    
    console.log("Migrating data...");
    await migrate(false);
    console.log("Data migrated successfully");


}catch(error){
    console.error("Error starting server:", error);
    process.exit(1);
}