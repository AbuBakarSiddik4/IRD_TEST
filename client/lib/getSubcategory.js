
export async function getSubcategory(id){

    const result = await fetch(`http://localhost:5000/api/subcategory/${id}`);
    return result.json();
}