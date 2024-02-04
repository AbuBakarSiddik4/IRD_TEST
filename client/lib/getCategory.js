export async function getCategory(){
    const result = await fetch(`http://localhost:5000/api/category`);
    return result.json();
}