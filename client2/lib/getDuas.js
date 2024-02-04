
export async function getDuas(id){
    const result = await fetch(`https://ird-backend-u5g7.onrender.com/api/category/dua/${id}`);
    return result.json();
}