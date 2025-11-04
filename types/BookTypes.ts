export type BookTypes = {
    id: number;
    title: string;
    image: string;
    rating: {
        average: number;
    };
    authors: {
        id: number;
        name: string;
    }[];
};
