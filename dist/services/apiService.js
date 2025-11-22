export const fetchProductData = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        return data; // now TypeScript knows data.products is APIProduct[]
    }
    catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
    finally {
        console.log("Request finished (success or error)");
    }
};
