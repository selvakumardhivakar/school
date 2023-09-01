"use client";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useState } from "react";

export default function Home() {
  const [text, setTodo] = useState("");
  const createTodo = useMutation(api.todos.createTodo);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodo("");
          createTodo({
             text,
          });
        }}
      >
        <input
          placeholder="Todo"
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold mt-5 py-2 px-4 rounded-full">
          add
        </button>
      </form>
    </main>
  );
}
