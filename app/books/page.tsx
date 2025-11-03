export default function BooksPage() {
    return (
        <main className="p-10 max-w-3xl mx-auto">

            <h1 className="text-4xl font-bold text-center mb-8">
                About Books & Genres
            </h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-3">Why Reading Matters</h2>
                <p className="text-blue-500 ">
                    Reading allows us to explore new worlds, gain knowledge, and think creatively.
                    Whether it’s fantasy, science fiction, mystery, or non-fiction, books have
                    shaped cultures, inspired generations, and captured human imagination for centuries.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-3">Popular Book Genres</h2>

                <ul className="list-disc list-inside space-y-3 text-blue-500">
                    <li>
                        <strong>Fantasy:</strong> Magic, mythical creatures, epic battles, and legendary adventures.
                    </li>
                    <li>
                        <strong>Science Fiction:</strong> Futuristic technology, space travel, alternate worlds,
                        and time exploration.
                    </li>
                    <li>
                        <strong>Mystery:</strong> Suspenseful plots involving clues, crimes, or hidden truths.
                    </li>
                    <li>
                        <strong>Historical Fiction:</strong> Stories based on real historical events and time periods.
                    </li>
                    <li>
                        <strong>Children’s Literature:</strong> Fun, educational, and imaginative stories for young readers.
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">Fun Facts About Famous Authors</h2>

                <ul className="list-disc list-inside space-y-3 text-blue-500">
                    <li>
                        <strong>J.K. Rowling</strong> wrote parts of Harry Potter in cafes while struggling financially.
                    </li>
                    <li>
                        <strong>Dr. Seuss</strong> originally wrote advertising material for bug spray before becoming
                        a children’s author.
                    </li>
                    <li>
                        <strong>George Orwell</strong> based &ldquo;1984&rdquo; on his observations about totalitarianism.
                    </li>
                    <li>
                        <strong>Agatha Christie</strong> is the best-selling fiction author of all time, with more than
                        2 billion books sold.
                    </li>
                    <li>
                        <strong>Mark Twain</strong> was born — and died — during a Halley’s Comet appearance.
                    </li>
                </ul>
            </section>
        </main>
    );
}
