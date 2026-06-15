import fetch from "node-fetch";
import { expect } from "chai";
import { describe, it } from "mocha";
import Ajv from "ajv";
import schemaHomework from "./homeworkSchema.js";

const ajv = new Ajv();


describe('Homework Testing Automation Web', function () {
    const baseURL = "https://dummyjson.com";

    it('Access Website', async function () {
        const response = await fetch(`${baseURL}`, {
            headers: {
                "Content-Type": "application/json",
            }
        });
        expect(response.status).to.equal(200);
       
    }); 

    it('POST - Add User', async function () {
        const newPost = {
            "firstName": "Gilang",
            "lastName": "Santoso",
            "age": 30
        };
        const response = await fetch(`${baseURL}/users/add`, { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost)
        });
        expect(response.status).to.equal(201);

        const data = await response.json();
        const cekschema = ajv.compile(schemaHomework);
        const valid = cekschema(data);
        expect(valid," validasi schema ada yang salah").to.be.true;
    });

    it('PUT - Update User', async function () { 
        const updateData = {
            "lastName": "Toto"
        };
        const response = await fetch(`${baseURL}/users/8`, { 
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData)
        });
        expect(response.status).to.equal(200);
    })

    it('DELETE - Delete User', async function () { 
        const response = await fetch(`${baseURL}/users/8`, { 
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
        expect(response.status).to.equal(200);
    })

});    

