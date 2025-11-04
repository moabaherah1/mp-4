import getData from "@/lib/getData";
import { BookTypes } from "@/types/BookTypes";

export default async function Home() {
    const data = await getData();

    if (data.error) {
        return (
            <main className="flex justify-center items-center h-[70vh]">
                <p className="text-red-600 text-xl font-semibold">{data.error}</p>
            </main>
        );
    }

    const books = Array.isArray(data.books) ? data.books.flat() : [];

    return (
        <main className="p-6">
            <h1 className="text-4xl font-bold text-center mb-8"></h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {books.map((book: BookTypes) => (
                    <div
                        key={book.id}
                        className="bg-white p-4 shadow rounded-lg"
                    >
                        <img
                            src={book.image}
                            alt={book.title}
                            className="w-full h-full object-cover rounded"
                        />

                        <h2 className="text-lg font-semibold mt-3">{book.title}</h2>

                        <p className="text-sm text-gray-700">
                            Author: {book.authors?.[0]?.name ?? "Unknown"}
                        </p>

                        <p className="text-sm text-yellow-600 font-medium">
                            Rating: {book.rating?.average?.toFixed(2) ?? "No rating"}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}