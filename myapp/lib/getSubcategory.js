
export async function getSubcategory(id){
    const result = await fetch(`https://ird-backend-u5g7.onrender.com/api/subcategory/${id}`);
    return result.json();
}