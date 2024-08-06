import { db } from "@/db";
import { redirect } from "next/navigation";


export default function SnippetCreatePage(){
    async function createSnippet(formData:FormData) {
        //server action directive
        'use server'
        //check the user inputs and make sure theyre valid
        const title =formData.get('title') as string;
        const code = formData.get('code') as string;

        //create a new record in the database
        const snippet = await db.snippet.create({
            data:{
                title,
                code
            }
        });
        console.log(snippet);

        //Redirect user back to root route
        redirect('/');
        
    }
    return(
        <form action={createSnippet}>
            <h3 className="font-bold m-3">Create a Snippet</h3>
            <div className="flex flex-col gap">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">
                        Title
                    </label>
                    <input
                        name="title"
                        className="border rounded p-2 w-full"
                        id="title"
                    />
                </div>
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="code">
                        Code
                    </label>
                    <textarea
                        name="code"
                        className="border rounded p-2 w-full"
                        id="code"
                    />
                </div>
                <button type="submit" className="rounded p-2 bg-blue-200">
                    Create
                </button>
            </div>
        </form>
    )
}