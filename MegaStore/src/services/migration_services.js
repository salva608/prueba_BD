import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { parse } from 'csv-parse/sync';
import { pool } from '../config/postgres.js';
import { env } from '../config/env.js';
// import { PatientHistory } from '../config/mongodb.js';

export async function migrate(clearBefore = false) {
    try{
        const csvPath = resolve(env.fileDataCsv);
        let fileContent = await readFile(csvPath, 'utf-8');
        const rows = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            trim: true,
        });

        //console.log(rows);
        console.log(`Read ${rows.length} rows from CSV file`);

        // --- Clear existing data if requested
        if(clearBefore){

            // clear postgres data
            await pool.query('BEGIN');
            await pool.query(`TRUNCATE TABLE customer, product, supplier, category,detail_transaction ,transaction CASCADE`);
            await pool.query('COMMIT');
            console.log(' previous data cleared successfully');

            // //clear mongodb data
            // await PatientHistory.deleteMany({});
            // console.log(' previous data cleared successfully from mongodb');

        }

        // ── 3. Insert uniques entities in PostgreSQL 
        const customer_emails  = new Set();
        const product_names = new Set();
        const supplier_emails = new Set();
        const category_names = new Set();
        const skus = new Set();

        for(const row of rows){
            //console.log(`Processing row: ${JSON.stringify(row)}`);
        
            const customer_email = row.customer_email.toLowerCase();
            if(!customer_emails.has(customer_email)){               

                await pool.query(`INSERT INTO customer (customer_name, customer_email, customer_address, customer_phone) 
                    VALUES ($1, $2, $3, $4)
                    ON CONFLICT (customer_email) DO NOTHING`, 
                    [row.customer_name, row.customer_email, row.customer_phone, row.customer_address]);
                customer_emails.add(customer_email);
            }


          
        }
    }catch(error){
        console.error("Error migrating data:", error);
        throw error;
    }
}