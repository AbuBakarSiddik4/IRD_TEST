export async function getCategory(){
    const result = await fetch(`https://ird-backend-u5g7.onrender.com/api/category`);
    return result.json();
}